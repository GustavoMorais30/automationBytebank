describe ('Formulário de Login', () =>{
    beforeEach (() =>{
        cy.visit('http://localhost:3000/')
    })

    it('Validar mensagem de erro ao inserir email e/ou senha invalido', ()=>{
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@test')
        cy.getByData('senha-input').type('senhainvalida')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')

})
    it('Não deve permintir campo em branco', () => {
        cy.getByData('botao-login').click()
        //quando o campo é vazio não precisa adicionar na na linha de código como se fosse '', pois o usuário não faria essa ação e o cypress interpreta exatamente como um usuário fazendo ações no site
        cy.getByData('senha-input').type('senhainvalida')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo email é obrigatório')
    })
    it('Realizar Login com sucesso', () => {
        cy.getByData('botao-login').click()
        //Para adicionar o email ainda precisa criar uma conta no site e o mesmo se aplica para a senha. Por isso deixarei essa parte do código comentado
       // cy.getByData('email-input').type('neilton@alura.com')
       // cy.getByData('senha-input').type('123456')
       // cy.getByData('botao-enviar').click
    } )
})