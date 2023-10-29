import { loginTestUser } from './helpers';

const buttonName = 'add';
const buttonAlias = '@add';

describe('tweet', () => {
  it('adds and delets tweet', () => {
    loginTestUser();
    cy.get('textarea')
      .parent()
      .find('button')
      .contains('button', 'Tweet')
      .as(buttonName)
      .should('exist')
      .should('be.disabled');
    const data = `Test Tweet ${new Date().getTime()}`;
    cy.get('textarea').type(data);
    cy.get(buttonAlias).click();
    cy.wait(3000);
    cy.get('p')
      .contains(data)
      .should('exist')
      .parent()
      .as('tweet')
      .get('@tweet')
      .find('div:last-child() svg')
      .click();
    cy.wait(3000);
    cy.get('@tweet').find('div:last-child() span').should('exist');
    cy.get('@tweet')
      .parent()
      .parent()
      .find('div:last-child() svg')
      .last()
      .click();
    cy.get('div').contains('Delete').click();
    cy.get('p').contains(data).should('not.exist');
  });
});
