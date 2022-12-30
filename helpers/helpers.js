/**
 * @module helpers
 */

/**
 * @param {string} page - Page instance
 * @param {string} browser - Browser instance
 * @returns  New page instance
 */
async function newTabInstance(page, browser) {
    const pageTarget = page.target();
    const newTarget = await browser.waitForTarget((target) => target.opener() === pageTarget);
    const newPage = await newTarget.page();
    await newPage.bringToFront();
    return newPage;
}

/**
 * Wait for XPath and click
 * @param {string} page - Page instance 
 * @param {string} locator - Web element locator (XPath)
 * @returns Element Handle
 */
async function waitAndClick(page, locator) {
    const element = await page.waitForXPath(locator, { visible: true });
    await element.click();
    return element;
}

/**
 * Wait for XPath and type text
 * @param {string} page - Page instance 
 * @param {string} locator - Web element locator (XPath)
 * @param {string} txt - Enter what you want to type 
 * @returns Element Handle
 */
async function waitAndType(page, locator, txt) {
    const element = await page.waitForXPath(locator, { visible: true });
    await element.type(txt);
    return element;
}

/**
 * Get innerText from the element
 * @param {string} page - Page instance 
 * @param {string} locator - Web element locator (XPath)
 * @returns {string} 
 */
async function getValue(page, locator) {
    const element = await page.waitForXPath(locator);
    const data = await page.evaluate(ele => ele.innerText, element);
    return data;
}

/**
 * 
 * @param {number} ms - The number of milliseconds to wait for
 * @returns {Promise} Promise which resolves after the timeout has completed
 */
async function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

module.exports = { newTabInstance, waitAndClick, waitAndType, getValue, delay };