module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.jsx'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!axios)'],
};
