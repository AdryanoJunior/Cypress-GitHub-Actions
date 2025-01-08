class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "#password",
            loginButton: "[name='login']",
            wrongCredentialAlert: "[role='alert']",
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/minha-conta/')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        
    }
    accessLoginInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage