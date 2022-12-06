module.exports = {
    launch: {
        headless: process.env.HEADLESS === "false" ? false : true,

    },
    browserContext: process.env.INCOGNITO ? 'incognito' : 'default',
}