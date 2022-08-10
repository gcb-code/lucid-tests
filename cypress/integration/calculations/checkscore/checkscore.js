import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('Regular user visits the homepage for the first time', () => {
  cy.visit('/')
  cy.wait(3000)
})

When('They click on the start button', () => {
  cy.get('span').contains('START').should('be.visible').click()
  cy.wait(3000)
})

Then('Their score should be visible as {string}', (score) => {
  cy.get('p').should('contain', score)
})
