import { ADMIN_HOME_SELECTORS } from '../constants/selectors';

class HomeAdminPage {
    getRegisterUsersButton() {
        return cy.get(ADMIN_HOME_SELECTORS.REGISTER_USERS_BUTTON);
    }
    getListUsersLink() { return cy.contains('Listar Usuários'); }
    getRegisterProductsLink() { return cy.contains('Cadastrar Produtos'); }
    getListProductsLink() { return cy.contains('Listar Produtos'); }
    getReportsLink() { return cy.contains('Relatórios'); }
    getLogoutButton() { return cy.get(ADMIN_HOME_SELECTORS.LOGOUT_BUTTON); }
    clickRegisterUsersButton() { this.getRegisterUsersButton().click(); }
}

export default new HomeAdminPage;
