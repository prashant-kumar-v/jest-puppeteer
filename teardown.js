module.exports = async function () {
    // close the browser instance
    await globalThis.__BROWSER_GLOBAL__.close();
};