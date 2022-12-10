const Product = require('../models/product');

const get = (req, res) => {
    Product.find((error, products) => {
        if (error) {
            console.error(error);
        } else {
            res.json(products)
        }
    });
}

module.exports = {
    get
}
