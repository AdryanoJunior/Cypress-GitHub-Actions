class AddProductPage {

    selectorsList() {
        const selectors = {
            seeProducts: "[href='http://lojaebac.ebaconline.art.br/produtos/']",
            productTitle: '.product_title',
            selectProduct: "[data-product_sku='WH09']",
            selectSizeXL: "[data-title='XL']",
            selectColorGreen: '.button-variable-item-Green',
            addMoreProduct: "[value='+']",
            buyButton: '.single_add_to_cart_button',
            viewCart: "[tabindex='1']",
            pageTitle: '.page-title',
            quantityField: "[inputmode='numeric']",
            completePurchaseButton: '.checkout-button',
            confirmCart: '.checkout-button'
        }
        return selectors
    }

    accessProduct() {
        cy.get(this.selectorsList().seeProducts).eq(1).click()
        
    }

     selectProduct() {
        cy.get(this.selectorsList().selectProduct).click({force: true})
        cy.get(this.selectorsList().productTitle)
        cy.get(this.selectorsList().selectSizeXL).click()
        cy.get(this.selectorsList().selectColorGreen).click()
        cy.get(this.selectorsList().addMoreProduct).click()
        cy.get(this.selectorsList().buyButton).click()
        

     }  
       viewCartPage() {
        cy.get(this.selectorsList().viewCart).click()
       }
     
      checkCheckoutPage() {
        cy.location('pathname').should('equal', '/carrinho/')
      }
      confirmCartPage() {
        cy.get(this.selectorsList().pageTitle)
      }
      quantityFieldPage() {
        cy.get(this.selectorsList().quantityField).clear().eq(0).type('3')
      }
      completePurchasePage() {
        cy.get(this.selectorsList().completePurchaseButton).click()
        cy.get(this.selectorsList().confirmCart).click()
      }
}

export default AddProductPage