import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('Regular user visits the homepage', () => {
  cy.visit('/')
  cy.wait(3000)
})

When('They navigate to the case study eye witness step', () => {
  cy.get('span').contains('START').should('be.visible').click()
  cy.wait(3000)
  cy.get('#pa_5c9126fe3f4fb_p179d7b273e1-card__image-1')
    .should('be.visible')
    .click()
  cy.wait(3000)
  cy.get('span').contains('JUDGE THIS').should('be.visible').click()
  cy.wait(3000)
  cy.get('#pa_5c9126fe47260_p15515116385-answer-1').should('be.visible').click()
  cy.get('span').contains('VOTE').should('be.visible').click()
  cy.wait(3000)
  cy.get('span').contains('CONTINUE').click({ force: true })
  cy.wait(3000)
  cy.get('#pr_5c9126fd760e5_pp56c46645babc9-project__menu').click({
    force: true,
  })
  cy.get('span')
    .contains('CASE STUDY: EYEWITNESS')
    .scrollIntoView()
    .click({ force: true })
})

Then('They should see a date on the timeline as {string}', (date) => {
  cy.get('.entry__header__text text').eq(0).should('be.visible').contains(date)
})
