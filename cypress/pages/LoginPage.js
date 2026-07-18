import { LOGIN_SELECTORS } from '../constants/selectors';
import { ROUTES } from '../constants/routes';

class LoginPage {
    visit() {
        cy.visit(ROUTES.LOGIN);
    }

    typeEmail(email) {
        cy.get(LOGIN_SELECTORS.EMAIL_INPUT).clear().type(email);
    }

    typePassword(password) {
        cy.get(LOGIN_SELECTORS.PASSWORD_INPUT).clear().type(password);
    }

    clickLoginButton() {
        cy.get(LOGIN_SELECTORS.LOGIN_BUTTON).click();
    }

    login(email, password) {
        this.visit();
        this.typeEmail(email);
        this.typePassword(password);
        this.clickLoginButton();
    }
}

export default new LoginPage;
