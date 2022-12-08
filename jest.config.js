const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

/** @type {import('ts-jest').JestConfigWithTsJest} */
// Add any custom config to be passed to Jest
const customJestConfig = {
  testPathIgnorePatterns: ['<rootDir>/.history/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': [
      'babel-jest',
      {
        presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
        plugins: [
          'babel-plugin-macros',
          ['babel-plugin-styled-components', { ssr: true }],
        ],
      },
    ],
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
