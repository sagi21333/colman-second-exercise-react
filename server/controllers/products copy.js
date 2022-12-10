const ShopingList = require('../models/shopingList');

const put = (req, res) => {
    ShopingList.insertOne(products[i])((error, products) => {
        if (error) {
            console.error(error);
        } else {
            res.json(products)
        }
    });
}

module.exports = {
    put
}
