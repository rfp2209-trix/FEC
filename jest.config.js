module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
  // '^.+\\.(t|j)sx?': 'babel-jest'
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.jsx'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!axios)'],
};

// '^.+\\.(t|j)sx?': 'babel-jest'