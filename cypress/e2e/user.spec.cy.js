import userData from '../fixtures/user-data.json'
import { faker } from '@faker-js/faker';
import LoginPage from '../pages/loginPage';
import MyAccountPage from '../pages/myAccountPage';
import AddProductPage from '../pages/addProductPage';
import CheckoutPage from '../pages/checkoutPage';

const loginPage = new LoginPage()
const myAccountPage = new MyAccountPage()
const addProductPage = new AddProductPage()
const checkoutPage = new CheckoutPage()

describe('EBAC Shop - Tests', () => {

  it('Buy Products - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    myAccountPage.titleMyAccount()
    
    addProductPage.accessProduct()
    addProductPage.selectProduct()
    
    cy.get('body').should('contain', '2 × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

    addProductPage.viewCartPage()
    addProductPage.checkCheckoutPage()

    addProductPage.confirmCartPage()
    addProductPage.quantityFieldPage()

    addProductPage.completePurchasePage()

    cy.location('pathname').should('contain', '/checkout/')
    cy.get('body').should('contain', 'Você tem um cupom de desconto? Clique aqui e informe o código do seu cupom de desconto')
    
    checkoutPage.fillPersonalDetails(faker.person.firstName(), faker.person.lastName())
    checkoutPage.fillAddressDetails(faker.location.streetAddress(), faker.location.city())
    checkoutPage.fillComboBoxState()
    checkoutPage.fillPersonalData(faker.number.int())
    checkoutPage.additionalInformation()
    checkoutPage.agreeTerms()
    checkoutPage.placeOrder()

    cy.get('body').should('contain', 'Obrigado. Seu pedido foi recebido.')
    cy.get('body').should('contain', 'Detalhes do pedido')
    cy.get('body').should('contain', 'Endereço de faturamento')
  })

  
  });