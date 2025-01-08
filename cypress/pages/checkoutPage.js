class CheckoutPage {

    selectorsList() {
        const selectors = {
            firstNameCheckout: '#billing_first_name',
            lastNameCheckout: '#billing_last_name',
            streetAddressField: '#billing_address_1',
            cityField: '#billing_city',
            postcodeField: "[name='billing_postcode']",
            labelState: "[aria-label='Estado']",
            selectState: "[aria-autocomplete='list']", 
            validateState: ".validate-state",
            phoneField: '#billing_phone',
            emailField: '#billing_email',
            commentsField: '#order_comments',
            termField: '#terms',
            placeOrderButton: '#place_order'

        }
        return selectors
    }
    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameCheckout).clear().type(firstName)
        cy.get(this.selectorsList().lastNameCheckout).clear().type(lastName)
    }
    fillAddressDetails(streetAddress, city) {
        cy.get(this.selectorsList().streetAddressField).clear().type(streetAddress)
        cy.get(this.selectorsList().cityField).clear().type(city)
    }
    fillComboBoxState() {
        cy.get(this.selectorsList().labelState).click()
        cy.get(this.selectorsList().selectState).type('Bahia')
        cy.get(this.selectorsList().validateState).click()
    }
    fillPersonalData(phone, email) {
        cy.get(this.selectorsList().postcodeField).clear().type('01521-020')
        cy.get(this.selectorsList().phoneField).clear().type(phone)
        cy.get(this.selectorsList().emailField).clear().type(email)
    }
    additionalInformation() {
        cy.get(this.selectorsList().commentsField).type('Deixar o pedido na Portaria')
    }
    agreeTerms() {
         cy.get(this.selectorsList().termField).click()
    }
    placeOrder() {
          cy.get(this.selectorsList().placeOrderButton).click()
          
    }
    ensureOperation() {
        
    }
}

export default CheckoutPage