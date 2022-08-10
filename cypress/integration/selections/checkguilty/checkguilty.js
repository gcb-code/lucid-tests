import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('Regular user visits the homepage', () => {
  cy.visit('/')
  cy.wait(3000)
})

When('They navigate to the judge step for making a case against kevin', () => {
  cy.get('span').contains('START').should('be.visible').click()
  cy.wait(3000)
  cy.get('#pa_5c9126fe3f4fb_p179d7b273e1-card__image-1')
    .should('be.visible')
    .click()
  cy.wait(3000)
  cy.get('span').contains('JUDGE THIS').should('be.visible').click()
  cy.wait(3000)
})

And('They vote with the guilty option', () => {
  cy.get('#pa_5c9126fe47260_p15515116385-answer-1').should('be.visible').click()
  cy.get('span').contains('VOTE').should('be.visible').click()
  cy.wait(3000)
})

Then('They should see this message as {string}', (message) => {
  cy.get('body > #pa_5c9126fe47260_p1554e607e46-modal__text > :nth-child(1)')
    .should('be.visible')
    .contains(message)
})
