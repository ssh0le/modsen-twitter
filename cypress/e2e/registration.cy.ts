import { errorMessages } from './constants';
import {
  clickSubmit,
  getInputField,
  getSelectField,
  isContainErrors,
  selectOption,
  typeInInput,
} from './helpers';

const { minLength, maxLength, required, wrongPhone, wrongEmail } =
  errorMessages;

const correctInputData = {
  name: 'Boris',
  phone: '+375291234567',
  email: 'test@test.com',
  password: 'W6a&eh"!47)2',
};

const correctSelectData = {
  year: 2002,
  month: 2,
  day: 9,
};

describe('Sign up test', () => {
  beforeEach(() => {
    cy.visit(`/registartion`);
  });
  describe('Empty form validation', () => {
    it('Validates empty form', () => {
      clickSubmit();
      isContainErrors(required, 7);
    });
  });
  describe('Field validation', () => {
    beforeEach(() => {
      Object.entries(correctInputData).forEach(([field, value]) => {
        getInputField(field).type(String(value));
      });
      Object.entries(correctSelectData).forEach(([field, value]) => {
        getSelectField(field).select(String(value));
      });
    });
    it.skip('validates name', () => {
      const name = 'name';
      typeInInput(name, 's'.repeat(2));
      clickSubmit();
      isContainErrors(minLength, 1);
      typeInInput(name, 's'.repeat(40));
      isContainErrors(maxLength, 1);
      typeInInput(name, correctInputData[name]);
      isContainErrors(maxLength, 0);
    });
    it.skip('validates phone', () => {
      const name = 'phone';
      typeInInput(name, 'asda');
      clickSubmit();
      isContainErrors(wrongPhone, 1);
      typeInInput(name, correctInputData[name]);
      isContainErrors(wrongPhone, 0);
    });
    it.skip('validates email', () => {
      const name = 'email';
      typeInInput(name, 'asda');
      clickSubmit();
      isContainErrors(wrongEmail, 1);
      typeInInput(name, correctInputData[name]);
      isContainErrors(wrongEmail, 0);
    });
    it.skip('validates password', () => {
      const name = 'password';
      typeInInput(name, 's'.repeat(2));
      clickSubmit();
      isContainErrors(minLength, 1);
      typeInInput(name, 's'.repeat(40));
      isContainErrors(maxLength, 1);
      typeInInput(name, correctInputData[name]);
      isContainErrors(maxLength, 0);
    });
    it('reset day if not in month days', () => {
      selectOption('year', '2020');
      selectOption('month', '1');
      selectOption('day', '29');
      selectOption('year', '2021');
      getSelectField('day').should('not.have.value', '29');
    });
    it('save correct date', () => {
      selectOption('year', '2020');
      selectOption('month', '1');
      selectOption('day', '29');
      getSelectField('day').should('have.value', '29');
    });
  });
});
