const puppeteer = require('puppeteer');
const { launch } = require("./jest-puppeteer.config")
module.exports = async function () {
    console.log(launch);
    const browser = await puppeteer.launch(launch);
    globalThis.__BROWSER_GLOBAL__ = browser;
};