import { STORE_HOME_SELECTORS } from '../constants/selectors';

class HomeStorePage {
    getShoppingListLink() { return cy.contains('Lista de Compras'); }
    getCartLink() { return cy.contains('Carrinho'); }
    getSearchInput() { return cy.get(STORE_HOME_SELECTORS.SEARCH_INPUT); }
    getProductsTitle() { return cy.contains('Produtos'); }
    getLogoutButton() { return cy.get(STORE_HOME_SELECTORS.LOGOUT_BUTTON); }
}

export default new HomeStorePage;
