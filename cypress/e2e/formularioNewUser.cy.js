describe ('Formulário de Novos clientes', () =>{
    beforeEach (() =>{
        cy.visit('http://localhost:3000/')
        cy.getByData('botao-cadastro').click()
    })

    it('Validar texto da descrição',() => {
        cy.get('.ModalCadastroUsuario_modal__descricao__NxeR0').should('exist').and('have.text','Preencha os campos abaixo para criar sua conta corrente!')
    })

    it('Validar existencias dos campos Nome, E-mail e Senha', () => {
        cy.get('[for="nome"]').should('exist').and('have.text','Nome')
        cy.get('[for="email"]').should('exist').and('have.text','E-mail')
        cy.get('[for="senha"]').should('exist').and('have.text','Senha')
    })
    
    it('Validar mensagens de erro por campo em branco',() =>{
       //Validando campo senha
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo de senha é obrigatório')
        //Validando mensagem de erro campo E-mail
        cy.getByData('senha-input').type('12345')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
        //Validando mensagem de erro campo Nome
        cy.getByData('email-input').type('gustavoteste@gmail.com')
        cy.getByData('botao-enviar').click()
       // cy.getByData('mensagem-erro').should('exist').and('have.text','O campo de nome é obrigatório')
    })

    it('Preencher os campos com os dados do cliente', () => {
        cy.getByData('nome-input').type('Gustavo Teste')
        cy.getByData('email-input').type('gustavoteste2@gmail.com')
        cy.getByData('senha-input').type('teste@123')
    })

    it('Validar login com conta já existente', () => {
        cy.getByData('nome-input').type('Gustavo Teste')
        cy.getByData('email-input').type('gustavoteste1@gmail.com')
        cy.getByData('senha-input').type('teste@123')
        cy.get('[data-test="checkbox-input"]').check()
        cy.getByData('botao-enviar').click()
        cy.getByData("mensagem-erro").should('exist').and('have.text','E-mail já cadastrado!')
    
    })

   
 it('Clique no botão Criar Conta', () => {
     cy.getByData('nome-input').type('Phoebe Russell')
     cy.getByData('email-input').type('ohfofri@pen.bb')
     cy.getByData('senha-input').type('teste@123')
     cy.get('[data-test="checkbox-input"]').check()
     cy.getByData('botao-enviar').click()
     cy.getByData("mensagem-sucesso").should('exist').and('have.text','Usuário cadastrado com sucesso!')
        })
    })


