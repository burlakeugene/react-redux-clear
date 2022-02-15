const { defaults } = require('jest-config');

module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src/app'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/jest/svgrMock.js'
  },
};
