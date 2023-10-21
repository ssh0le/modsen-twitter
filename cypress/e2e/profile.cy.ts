import { getInputField, loginTestUser, typeInInput } from './helpers';

const saveButtonName = 'save';
const saveButtonAlias = '@save';

const resetName = 'reset';
const resetAlias = '@reset';

describe('Profile test', () => {
  it('Updates info', () => {
    loginTestUser();
    cy.get('button').contains('Edit Profile').as('edit-button').should('exist');
    cy.get('@edit-button').click();
    cy.get('button')
      .contains('button', 'Save info')
      .as(saveButtonName)
      .should('exist');
    const data = Date.now();
    cy.get(saveButtonAlias).should('be.disabled');
    typeInInput('telegram', String(data));
    cy.get(saveButtonAlias).should('not.be.disabled');
    cy.get('button')
      .contains('button', 'Reset')
      .as(resetName)
      .should('not.be.disabled');
    cy.get(saveButtonAlias).click();
    cy.wait(4000);
    cy.get(resetAlias).should('be.disabled');
    getInputField('telegram').should('have.value', String(data));
  });
});
