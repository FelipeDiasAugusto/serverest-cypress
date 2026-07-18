class UserService {

    createUser(user, failOnStatusCode = true) {
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/usuarios`,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                nome: user.name,
                email: user.email,
                password: user.password,
                administrador: user.administrator
            },
            failOnStatusCode
        });
    }

    updateUser(userId, user, failOnStatusCode = true) {
        return cy.request({
            method: 'PUT',
            url: `${Cypress.env('apiUrl')}/usuarios/${userId}`,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                nome: user.name,
                email: user.email,
                password: user.password,
                administrador: user.administrator
            },
            failOnStatusCode
        });
    }    

    getUsers(query = {}) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('apiUrl')}/usuarios`,
            qs: query
        });
    }

    getUserById(userId, failOnStatusCode = true) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('apiUrl')}/usuarios/${userId}`,
            headers: {
                accept: 'application/json'
            },
            failOnStatusCode
        });
    }

    getUserByEmail(email) {
        return this.getUsers({ email });
    }

    deleteUser(userId, failOnStatusCode = true) {
        return cy.request({
            method: 'DELETE',
            url: `${Cypress.env('apiUrl')}/usuarios/${userId}`,
            headers: {
                accept: 'application/json'
            },
            failOnStatusCode
        });
    }

    deleteUserByEmail(email) {
        return this.getUserByEmail(email, false)
            .then((response) => {
                const user = response.body.usuarios?.[0];

                if (!user) {
                    return null;
                }

                return this.deleteUser(user._id, false);
            });
    }
    
}

export default new UserService();
