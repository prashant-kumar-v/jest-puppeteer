const testMaxRetry = process.env.RETRIES || 0;
/**
 * 
 * @param {string} name - The name of your test
 * @param {number} [maxRetry] - Max retry for test
 */
module.exports = async function testWithRetry(name, func, maxRetry = testMaxRetry) {
    if (maxRetry >= 0) {
        test(name, async () => {
            let retryCount = 0;
            while (retryCount <= maxRetry) {
                try {
                    await func();
                } catch (e) {
                    if (retryCount >= maxRetry) {
                        const targetDir = "./screenshots/";
                        const openPages = await context.pages();
                        await openPages[openPages.length - 1].screenshot({ path: `${targetDir}${name}.png`, fullPage: true });
                        throw e;
                    }
                    retryCount = retryCount + 1;
                }
            }
        })
    }
}