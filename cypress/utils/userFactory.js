export function generateUser(isAdministrator = false) {
    const uniqueId = `${Date.now()}-${Cypress._.random(1000, 9999)}`;

    return {
        name: isAdministrator
            ? `Administrador Teste ${uniqueId}`
            : `Usuário Teste ${uniqueId}`,

        email: isAdministrator
            ? `administrador.${uniqueId}@qa.com.br`
            : `usuario.${uniqueId}@qa.com.br`,

        password: 'teste123',
        administrator: String(isAdministrator)
    };
}

export function generateUpdatedUser(isAdministrator = true) {
    const uniqueId = `${Date.now()}-${Cypress._.random(1000, 9999)}`;

    return {
        name: `Usuário Atualizado ${uniqueId}`,
        email: `usuario.atualizado.${uniqueId}@qa.com.br`,
        password: 'teste123',
        administrator: String(isAdministrator)
    };
}