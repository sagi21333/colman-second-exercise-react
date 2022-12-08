/// Here need to be implemented a axios requets to the server side and

export const getSupermarketProductList = () => {
    const productList = [
    {title: "milk", price: "10", imageUrl: "/images/milk.jpeg", key: '1'},
    {title: "pasta", price: "5", imageUrl: "/images/pasta.jpeg", key: '2'},
    {title: "Banana", price: "9", imageUrl: "/images/pasta.jpeg", key: '2'},
    {title: "Avokado", price: "7", imageUrl: "/images/pasta.jpeg", key: '2'}];
    // todo: adding a call to the server get products list
    return (productList);
}

export const orderShoppingList = (productList) => {
    // todo: adding a call to the server to save the order
}
