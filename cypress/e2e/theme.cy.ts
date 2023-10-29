import { colors } from './constants';
import { loginTestUser } from './helpers';

const { white, black, lightGray, darkGray } = colors;

it('Theme', () => {
  loginTestUser();
  cy.get('aside')
    .parent()
    .should('have.css', 'background-color', white)
    .should('have.css', 'color', black);
  cy.get('aside').should('have.css', 'border-right-color', lightGray);
  cy.get('label').click();
  cy.get('aside')
    .parent()
    .should('have.css', 'background-color', black)
    .should('have.css', 'color', white);
  cy.get('aside').should('have.css', 'border-right-color', darkGray);
});
