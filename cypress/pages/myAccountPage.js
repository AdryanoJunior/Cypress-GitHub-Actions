class MyAccountPage {

    selectorsList() {
        const selectors = {
            sectionTitleAccount: "[title='My account']",
        }
        return selectors
    }
    
    titleMyAccount() {
        cy.get(this.selectorsList().sectionTitleAccount)
    }
}

export default MyAccountPage