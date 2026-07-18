import { REGISTER_SELECTORS } from '../constants/selectors';

class RegisterPage {
    typeName(name) {
        cy.get(REGISTER_SELECTORS.NAME_INPUT).clear().type(name);
    }
    typeEmail(email) {
        cy.get(REGISTER_SELECTORS.EMAIL_INPUT).clear().type(email);
    }
    typePassword(password) {
        cy.get(REGISTER_SELECTORS.PASSWORD_INPUT).clear().type(password);
    }
    checkAdministrator() {
        cy.get(REGISTER_SELECTORS.ADMINISTRATOR_CHECKBOX).check();
    }
    clickRegisterButton() {
        cy.get(REGISTER_SELECTORS.REGISTER_BUTTON).click();
    }
    getEmailInput() {
        return cy.get(REGISTER_SELECTORS.EMAIL_INPUT);
    }
    registerUser(user) {
        this.typeName(user.name);
        this.typeEmail(user.email);
        this.typePassword(user.password);
        if (user.administrator === 'true') {
            this.checkAdministrator();
        }
        this.clickRegisterButton();
    }
}

export default new RegisterPage;
