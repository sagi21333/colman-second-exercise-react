const Product = require('../models/product');

const get = (req, res) => {
    Product.find((error, products) => {
        if (error) {
            console.error(error);
        } else {
            res.send(products)
        }
    });
}

module.exports = {
    get
}
