const productPageLocators = {
    product: (searchProductName) => `//div[text()="${searchProductName}"]`,
    highlights: `//div[text()="Highlights"]/following-sibling::div/ul/li`,
}

module.exports = { productPageLocators };