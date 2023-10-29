import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  unmockedModulePathPatterns: [
    'firebase/app',
    'firebase/auth',
    'firebase/auth',
    'firebase/firestore',
    'firebase/storage',
  ],
  moduleNameMapper: {
    '.+\\.(png|jpg|svg)$': 'jest-transform-stub',
    '\\.(gif|ttf|eot|svg|png)$':
      '<rootDir>/__test__/test/__ mocks __/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@UI': '<rootDir>/src/components/UI/index.ts',
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};

export default config;
