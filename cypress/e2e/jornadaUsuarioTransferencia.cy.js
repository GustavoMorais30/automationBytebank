describe("Validar jornada do cliente até o fim da realização de uma transação", () => {
    it('Deve permitir que o usuário acesse a página inicial, realize o ligin no site, faça uma transação, e faça o logout do site', ()=>{
        cy.visit('/')

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('gustavoteste1@gmail.com')
        cy.getByData('senha-input').type('teste@123')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')

        cy.getByData('select-opcoes').select('Transferência')
        cy.getByData('form-input').type('1')
        cy.getByData('realiza-transacao').click()

        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 1')

        cy.getByData('botao-sair').click()

        cy.location('pathname').should('eq', '/')
    })
})