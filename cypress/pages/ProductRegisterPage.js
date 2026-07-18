class ProductRegisterPage {

    registerProduct(product) {
        cy.get('[data-testid="nome"]')
            .type(product.name);

        cy.get('[data-testid="preco"]')
            .type(product.price);

        cy.get('[data-testid="descricao"]')
            .type(product.description);

        cy.get('[data-testid="quantity"]')
            .type(product.quantity);

        if (product.image) {
            cy.get('[data-testid="imagem"]')
                .selectFile(product.image);
        }

        cy.get('[data-testid="cadastarProdutos"]')
            .click();
    }

    deleteProduct(productName) {
        cy.contains('tr', productName)
            .should('be.visible')
            .within(() => {
                cy.get('.btn-danger')
                    .click();
            });
    }

    validateProductIsVisible(productName) {
        cy.contains('tr', productName)
            .should('be.visible');
    }

    validateProductDoesNotExist(productName) {
        cy.contains('tr', productName)
            .should('not.exist');
    }
}

export default new ProductRegisterPage();
