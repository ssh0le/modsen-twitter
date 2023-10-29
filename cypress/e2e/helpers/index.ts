export const getInputField = (name: string) => cy.get(`input[name='${name}']`);

export const getSelectField = (name: string) =>
  cy.get(`select[name='${name}']`);

export const clickSubmit = () => {
  cy.get('button').click();
};

export const typeInInput = (name: string, text: string) => {
  getInputField(name).clear().type(text);
};

export const selectOption = (name: string, option: string) => {
  getSelectField(name).select(option);
};

export const isContainErrors = (text: string, number: number) => {
  cy.get(`p:contains("${text}")`).should('have.length', number);
};

export const loginTestUser = () => {
  cy.visit('/login');
  typeInInput('login', 'cypress@test.com');
  typeInInput('password', '12345678');
  clickSubmit();
  cy.wait(6000);
};

export const convertHexToRgb = (hex: string): string => {
  const normalizedHex = Array.from(hex.slice(1)).reduce((result, char) => {
    if (hex.length > 4) {
      return result + char;
    } else {
      return result + char + char;
    }
  }, '');
  const aRgbHex = normalizedHex.match(/.{2}/g);

  if (!aRgbHex) {
    return '';
  }

  const [r, g, b] = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
  return `rgb(${r}, ${g}, ${b})`;
};
