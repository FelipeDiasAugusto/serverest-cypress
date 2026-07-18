import productListSelectors from '../selectors/productListSelectors';

class ProductListPage {

    validateProductRegistered(productName) {
        cy.contains('td', productName)
            .should('be.visible');
    }

    deleteProduct(productName) {
        cy.contains('td', productName)
            .parents('tr')
            .find(productListSelectors.deleteButton)
            .click();
    }

    validateProductDeleted(productName) {
        cy.contains('td', productName)
            .should('not.exist');
    }

}

export default new ProductListPage();