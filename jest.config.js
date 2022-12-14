module.exports = {
    reporters: [
        "default",
        ["./node_modules/jest-html-reporter", {
            outputPath: "./test-report/report.html",
            includeFailureMsg: true,
            includeSuiteFailure: true,
        }]
    ],
    setupFiles: ['./jest.setup.js'],
    verbose: true,
    globalSetup: './setup.js',
    globalTeardown: './teardown.js',
    testEnvironment: 'node',
    testTimeout: 30000,
}