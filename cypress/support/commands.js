import { loginPage } from '../pages';

Cypress.Commands.add('login', (email, password) => {
    loginPage.login(email, password);
});
