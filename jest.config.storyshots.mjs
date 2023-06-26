import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  displayName: 'storyshots',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // tsconfig.jsonのcompilerOptions>pathsの定義に合わせる
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/test/storybook.test.js'],
};

export default createJestConfig(customJestConfig);
