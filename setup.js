const puppeteer = require('puppeteer');
const { config } = require("./puppeteer.config");
global.puppeteer = puppeteer;

module.exports = async function () {
    console.log("\n");
    console.table(config);
    const browser = await puppeteer.launch(config.launch);
    if (config.browserContext === "incognito") {
        this.global.context = await browser.createIncognitoBrowserContext();
    }
    else if (config.browserContext === "default" || !config.browserContext) {
        this.global.context = browser;
    }
    else {
        throw new Error(`browserContext should be either 'incognito' or 'default'. Received '${config.browserContext}'`)
    }
    const page = await this.global.context.newPage();
    global.browser = browser;
    global.context = this.global.context
    global.page = page;
};