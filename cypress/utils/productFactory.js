export function generateProduct() {
    const uniqueValue = Date.now();

    return {
        name: `Produto QA ${uniqueValue}`,
        price: '100',
        description: `Produto criado durante teste automatizado ${uniqueValue}`,
        quantity: '1',
        imagePath: 'cypress/fixtures/product-image.png'
    };
}