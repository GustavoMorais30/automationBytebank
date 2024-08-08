describe(' Textos da página inicial', () => {
  beforeEach (() => {
    cy.visit('http://localhost:3000/')
  })
  it ('Deve renderizar corretamene o texto da seção vantagens', () => {
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!');
  
  })
  it ('teste commands', () => {
  cy.verificarTexto
})
  
})