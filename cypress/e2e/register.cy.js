import messages from '../fixtures/messages.json';
import { ROUTES } from '../constants/routes';
import { homeAdminPage, registerPage } from '../pages';
import UserService from '../services/UserService';
import { generateUser } from '../utils/userFactory';

describe('Cadastro de usuários', () => {
    let administratorUser;
    let administratorUserId;
    let registeredUserEmail;
    let additionalUserId;

    beforeEach(() => {
        administratorUser = generateUser(true);
        administratorUserId = null;
        registeredUserEmail = null;
        additionalUserId = null;

        UserService.createUser(administratorUser).then((response) => {
            expect(response.status).to.equal(201);
            administratorUserId = response.body._id;
        });

        cy.login(administratorUser.email, administratorUser.password);
        cy.url().should('include', ROUTES.ADMIN_HOME);
        homeAdminPage.getRegisterUsersButton().should('be.visible');
        homeAdminPage.clickRegisterUsersButton();
        cy.url().should('include', ROUTES.REGISTER_USERS);
    });

    afterEach(() => {
        if (registeredUserEmail) {
            UserService.deleteUserByEmail(registeredUserEmail);
        }
        if (additionalUserId) {
            UserService.deleteUser(additionalUserId);
        }
        if (administratorUserId) {
            UserService.deleteUser(administratorUserId);
        }
    });

    it('Deve cadastrar um usuário não administrador', () => {
        const newUser = generateUser(false);
        registeredUserEmail = newUser.email;
        registerPage.registerUser(newUser);
        cy.url().should('include', ROUTES.USERS_LIST);
        cy.contains(newUser.email).should('be.visible');
    });

    it('Deve cadastrar um usuário administrador', () => {
        const newAdministratorUser = generateUser(true);
        registeredUserEmail = newAdministratorUser.email;
        registerPage.registerUser(newAdministratorUser);
        cy.url().should('include', ROUTES.USERS_LIST);
        cy.contains(newAdministratorUser.email).should('be.visible');
    });

    it('Não deve cadastrar um e-mail já existente', () => {
        const existingUser = generateUser(false);
        UserService.createUser(existingUser).then((response) => {
            expect(response.status).to.equal(201);
            additionalUserId = response.body._id;
        });
        registerPage.registerUser(existingUser);
        cy.contains(messages.register.emailAlreadyExists).should('be.visible');
        cy.url().should('include', ROUTES.REGISTER_USERS);
    });

    it('Deve validar os campos obrigatórios', () => {
        registerPage.clickRegisterButton();
        cy.contains(messages.register.requiredName).should('be.visible');
        cy.contains(messages.register.requiredEmail).should('be.visible');
        cy.contains(messages.register.requiredPassword).should('be.visible');
        cy.url().should('include', ROUTES.REGISTER_USERS);
    });

    it('Não deve cadastrar um e-mail em formato inválido', () => {
        const userWithInvalidEmail = generateUser(false);
        userWithInvalidEmail.email = 'email-invalido';
        registerPage.registerUser(userWithInvalidEmail);
        registerPage.getEmailInput().then(($emailInput) => {
            const emailInput = $emailInput[0];
            expect(emailInput.checkValidity()).to.equal(false);
            expect(emailInput.validity.typeMismatch).to.equal(true);
            expect(emailInput.validationMessage).to.not.be.empty;
        });
        cy.url().should('include', ROUTES.REGISTER_USERS);
    });
});
