// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleNameMapper: {
    // aliasを定義 （tsconfig.jsonのcompilerOptions>pathsの定義に合わせる）
    '^@/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/src/components/**/?(*.)+(test).ts',
    '**/src/functions/**/?(*.)+(test).ts',
    '**/src/hooks/**/?(*.)+(test).ts',
  ],
};

module.exports = createJestConfig(customJestConfig);
