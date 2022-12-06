import Product from "./Product";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect  } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ShopingList = (props) => {

    const [ShoppingList, setShoppingList] = useState(props.ShoppingList);
    const [totalPrice, setTotalPrice] = useState(0);
    
    const handleSubmit = async () => {
        if(ShoppingList.length > 0) {
            setTotalPrice(0);
            props.ResetShoppingList();
        } else {
            toast.error("You dont have products in your shopping list");
        }
    }

    useEffect(() => {

        const totalShopingList = () => {
            let total = 0;
            ShoppingList.map(product => total+=(Number)(product.price));
            setTotalPrice(total);
        };
        totalShopingList();
        
      }, ShoppingList);

    return(
        <div> 
            <Toaster
                position="top-left"
                reverseOrder={false}
            />

            <Grid container direction="column" spacing={2}>
            <Grid item xs={4}>
                <Typography item xs={12} sx={{p:2}} component="div" variant="h5">Shoping List</Typography>
            </Grid>
                {ShoppingList.map((product,index) => {
                    return (
                        <Product 
                        key={index}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        imageUrl={product.imageUrl} />)

                })}
                <Grid item xs={8}>
                    <Typography item xs={12} sx={{p:2}} component="div" variant="h5">Total: {totalPrice} $ </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" size="medium" onClick={handleSubmit}>Order</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default ShopingList;