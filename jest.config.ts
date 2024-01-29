module.exports = async () => {
  return {
    setupFiles: ["<rootDir>/jest.setup.ts"],
    verbose: true,
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testEnvironment: 'node',
    testRegex: '.spec.ts$',
    testPathIgnorePatterns: ['.e2e-spec.ts$'],
    transform: {
      "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
    },
  };
};
