const productPageLocators = {
    product: `//*[text()="APPLE iPhone 13 5G (Midnight, 128 GB)"]`,
    highlights:
    {
        rom: `//*[text()="128 GB ROM"]`,
        display: `//*[text()="15.49 cm (6.1 inch) Super Retina XDR Display"]`,
        camera: `//*[text()="12MP + 12MP | 12MP Front Camera"]`,
        processor: `//*[text()="A15 Bionic Chip Processor"]`
    },
    hl: `//div[text()="Highlights"]/following-sibling::div/ul/li`,
}

module.exports = { productPageLocators };