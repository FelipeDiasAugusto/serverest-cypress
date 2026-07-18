import messages from '../fixtures/messages.json';
import { ROUTES } from '../constants/routes';
import { homeAdminPage, homeStorePage, loginPage } from '../pages';
import UserService from '../services/UserService';
import { generateUser } from '../utils/userFactory';

describe('Login', () => {
    let createdUserIds;

    beforeEach(() => {
        createdUserIds = [];
    });

    afterEach(() => {
        cy.wrap(createdUserIds).each((userId) => {
            UserService.deleteUser(userId);
        });
    });

    it('Deve realizar login com usuário administrador', () => {
        const administratorUser = generateUser(true);
        UserService.createUser(administratorUser).then((response) => {
            expect(response.status).to.equal(201);
            createdUserIds.push(response.body._id);
        });
        cy.login(administratorUser.email, administratorUser.password);
        cy.url().should('include', ROUTES.ADMIN_HOME);
        homeAdminPage.getRegisterUsersButton().should('be.visible');
        homeAdminPage.getListUsersLink().should('be.visible');
        homeAdminPage.getRegisterProductsLink().should('be.visible');
        homeAdminPage.getListProductsLink().should('be.visible');
        homeAdminPage.getReportsLink().should('be.visible');
        homeAdminPage.getLogoutButton().should('be.visible');
    });

    it('Deve realizar login com usuário não administrador', () => {
        const storeUser = generateUser(false);
        UserService.createUser(storeUser).then((response) => {
            expect(response.status).to.equal(201);
            createdUserIds.push(response.body._id);
        });
        cy.login(storeUser.email, storeUser.password);
        cy.url().should('include', ROUTES.STORE_HOME);
        homeStorePage.getShoppingListLink().should('be.visible');
        homeStorePage.getCartLink().should('be.visible');
        homeStorePage.getSearchInput().should('be.visible');
        homeStorePage.getProductsTitle().should('be.visible');
        homeStorePage.getLogoutButton().should('be.visible');
    });

    it('Não deve realizar login com senha incorreta', () => {
        const registeredUser = generateUser(false);
        UserService.createUser(registeredUser).then((response) => {
            expect(response.status).to.equal(201);
            createdUserIds.push(response.body._id);
        });
        cy.login(registeredUser.email, 'senha-incorreta');
        cy.contains(messages.login.invalidCredentials).should('be.visible');
        cy.url().should('include', ROUTES.LOGIN);
    });

    it('Não deve realizar login com e-mail inexistente', () => {
        const unregisteredUser = generateUser(false);
        cy.login(unregisteredUser.email, unregisteredUser.password);
        cy.contains(messages.login.invalidCredentials).should('be.visible');
        cy.url().should('include', ROUTES.LOGIN);
    });

    it('Deve validar os campos obrigatórios', () => {
        loginPage.visit();
        loginPage.clickLoginButton();
        cy.contains(messages.login.requiredEmail).should('be.visible');
        cy.contains(messages.login.requiredPassword).should('be.visible');
        cy.url().should('include', ROUTES.LOGIN);
    });
});
