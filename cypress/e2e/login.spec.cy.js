import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage';


const loginPage = new LoginPage()

describe('EBAC Shop - Tests', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.accessLoginInvalid()

    cy.get('body').should('contain', 'Erro: O usuário Testing não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.')
  });
  it('Login - Success', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

      cy.get('body').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
  });
})