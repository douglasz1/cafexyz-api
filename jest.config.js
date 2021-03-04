const { resolve } = require('path');
const root = resolve(__dirname);
module.export = {
    rootDir: root,
    displayName: 'root-tests',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    clearMocks: true,
    preset: 'ts-jest',
    moduleNameMapper: {
        '@src/(.*)': '<rootDir>/src/$1',
        '@test/(.*)': '<rootDir>/test/$1',
    },
};