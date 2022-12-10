import axios from 'axios';

// function to get the list of products from the server
export const getSupermarketProductList = async () => {
    let products;
  
    try {
        await axios
        .get('http://localhost:4000/products')
        .then((res) => {
          products = res.data;
        })
        .catch((err) => {
          console.error(err);
          throw new Error('Failed to get supermarket product list');
        });
    } catch (err) {
      console.error(err);
    }
  
    console.log(products);
    return products;
};

// function to save the order to the server
export const orderShoppingList = (productList) => {
  return axios
    .post('http://localhost:4000/orders', { productList })
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      throw new Error('Failed to save shopping list order');
    });
};