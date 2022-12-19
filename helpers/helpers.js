async function newTabInstance(page, browser) {
    const pageTarget = page.target();
    const newTarget = await browser.waitForTarget((target) => target.opener() === pageTarget);
    const newPage = await newTarget.page();
    await newPage.bringToFront();
    return newPage;
}

async function waitAndClick(page, locator) {
    const element = await page.waitForXPath(locator, { visible: true });
    await element.click();
    return element;
}

async function waitAndType(page, locator, txt) {
    const element = await page.waitForXPath(locator, { visible: true });
    await element.type(txt);
    return element;
}

async function getValue(page, locator) {
    const element = await page.waitForXPath(locator);
    const data = await page.evaluate(ele => ele.innerText, element);
    return data;
}

async function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

module.exports = { newTabInstance, waitAndClick, waitAndType, getValue, delay };