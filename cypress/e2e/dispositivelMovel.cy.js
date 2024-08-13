describe('Testando dispositivos moveis', ()=>{

    it('Deve exisitir um botão de menu burguer', ()=>{
        cy.visit('/')
        cy.viewport("iphone-x")
        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('neilton@alura.com');
        cy.getByData('senha-input').type('123456');
        cy.getByData('botao-enviar').click();

        cy.location('pathname').should('eq', '/home')

        cy.getByData('menu-burguer').click()
        cy.getByData('menu-lateral').find('a').eq(3).click()

        cy.location('pathname').should('eq', '/home/investimentos')


    })
})