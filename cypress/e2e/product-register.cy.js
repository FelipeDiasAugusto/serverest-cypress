import { ROUTES } from '../constants/routes';
import {
    homeAdminPage,
    productRegisterPage,
    ProductListPage
} from '../pages';
import UserService from '../services/UserService';
import { generateProduct } from '../utils/productFactory';
import { generateUser } from '../utils/userFactory';

describe('Cadastro de produtos', () => {
    let administratorUserId;

    beforeEach(() => {
        const administratorUser = generateUser(true);

        administratorUserId = null;

        UserService.createUser(administratorUser).then((response) => {
            expect(response.status).to.equal(201);
            administratorUserId = response.body._id;
        });

        cy.login(
            administratorUser.email,
            administratorUser.password
        );

        cy.url().should('include', ROUTES.ADMIN_HOME);

        cy.contains('Cadastrar Produtos')
            .should('be.visible')
            .click();

        cy.url().should('include', ROUTES.REGISTER_PRODUCTS);
    });

    afterEach(() => {
        if (administratorUserId) {
            UserService.deleteUser(administratorUserId);
        }
    });

    it('Deve cadastrar um novo produto com sucesso', () => {
        const newProduct = generateProduct();

        productRegisterPage.registerProduct(newProduct);

        cy.url().should('include', ROUTES.PRODUCTS_LIST);

        cy.contains(newProduct.name)
            .should('be.visible');
    });

    it('Deve cadastrar e excluir um produto com sucesso', () => {
        const newProduct = generateProduct();

        productRegisterPage.registerProduct(newProduct);

        cy.url().should('include', ROUTES.PRODUCTS_LIST);

        cy.contains('tr', newProduct.name)
            .should('be.visible')
            .within(() => {
                cy.get('.btn-danger')
                    .click();
            });

        cy.contains('tr', newProduct.name)
            .should('not.exist');
    });

});
