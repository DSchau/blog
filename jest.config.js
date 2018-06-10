module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.cache'],
  transform: {
    '^.+\\.js$': '<rootDir>/jest.transform.js'
  }
}
