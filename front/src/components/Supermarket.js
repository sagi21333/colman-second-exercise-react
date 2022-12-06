import Product from "./Product";
import React, { useState, useEffect  } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ComShoppingList from './ShoppingList';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {orderShoppingList, getSupermarketProductList} from '../services/supermarketService';
import toast, { Toaster } from 'react-hot-toast';

const Supermarket = () => {

    const [clicked, setClicked] = useState(false);
    const [productList, setProductsList] = useState([]);
    useEffect(() => {
        const products = getSupermarketProductList();
        setProductsList(products)}, []);

    const [ShoppingList, setShoppingList] = useState([]);

    const ResetShoppingList = () => {
        orderShoppingList();
        toast.success('Successfully ordered!')
        setShoppingList([]);
        setClicked(false);
    };

    const handleAddProduct = (key) => {
        let newShoppingList = ShoppingList;
        newShoppingList.push(productList.find(p => p.key === key));
        setShoppingList(newShoppingList);
        toast.success('Successfully added to cart!')
    };
    
    return (
        <div>
            <Toaster
                position="top-left"
                reverseOrder={false}
            />

            {clicked ? 
            <Grid container direction="column" spacing={2} sx={{m:5}}>
                <Grid item xs={8}> <Button item variant="outlined" onClick={() => setClicked(false)}>return to supermarket</Button> </Grid>
            <ComShoppingList ShoppingList={ShoppingList} ResetShoppingList={ResetShoppingList}/> 
            </Grid> : 
            <Grid container direction="column" spacing={2} sx={{m:5}}>
                <Grid item xs={8}>
                    <IconButton item xs={4} color="primary" onClick={() => setClicked(true)} aria-label="add to shopping cart">
                        Cart < ShoppingCartOutlinedIcon sx={{ml:2}}/>
                    </IconButton>
                </Grid>
                <Grid item xs={8}>
                    <Typography sx={{p:2}} component="div" variant="h5">Supermarket</Typography>
                </Grid>
                {productList.map((product,index) => {
                    return (
                        <Grid container direction="row" key={index}>
                            <Product 
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            imageUrl={product.imageUrl} />
                            <IconButton color="primary" onClick={() => handleAddProduct(product.key)} aria-label="add to shopping cart">
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Grid>
                    )
                })}
                </Grid>
                }
        </div>
    );
};

export default Supermarket;