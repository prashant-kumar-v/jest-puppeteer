jest.setTimeout(30000);
jest.retryTimes(process.env.RETRIES, { logErrorsBeforeRetry: true });