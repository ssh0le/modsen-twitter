import { loginTestUser } from './helpers';

const buttonName = 'add';
const buttonAlias = '@add';

describe('tweet', () => {
  it('adds tweet', () => {
    loginTestUser();
    cy.get('textarea')
      .parent()
      .find('button')
      .contains('button', 'Tweet')
      .as(buttonName)
      .should('exist')
      .should('be.disabled');
    const data = 'Test Tweet';
    cy.get('textarea').type(data);
    cy.get(buttonAlias).click();
    cy.wait(2000);
    cy.get('p').contains(data).should('exist');
    cy.get('img[alt="Unsetted like"]').as('like').click();
    cy.wait(2000);
    cy.get('@like').should('not.exist');
    cy.get('img[alt="Post actions"]').parent().click();
    cy.get('div').contains('Delete').click();
    cy.get('p').contains(data).should('not.exist');
  });
});
