class MyAccountPage {

    selectorsList() {
        const selectors = {
            sectionTitleAccount: '.page-title',
        }
        return selectors
    }
    
    titleMyAccount() {
        cy.get(this.selectorsList().sectionTitleAccount)
    }
}

export default MyAccountPage