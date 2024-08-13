import '@testing-library/cypress/add-commands'

 Cypress.Commands.add('getByData', (seletor) => {
    return cy.get(`[data-test=${seletor}]`)
 })

   //Cypress.Commands.add ('verificarTexto', (seletor, texto) =>{
  // cy.get(`${seletor}`).contains(`${texto}`)
 // })