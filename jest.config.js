module.exports = {
    preset: "jest-puppeteer",
    reporters: ["default", "./node_modules/jest-html-reporter"],
    setupFiles: ['./jest.setup.js'],
    verbose: true,
    globalSetup: './setup.js',
    globalTeardown: './teardown.js',
    testEnvironment: 'node',
    testTimeout: 30000,
}