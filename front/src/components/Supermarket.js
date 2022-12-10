import Product from './Product'
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ComShoppingList from './ShoppingList'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import IconButton from '@mui/material/IconButton'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { getSupermarketProductList } from '../services/supermarketService'
import toast, { Toaster } from 'react-hot-toast'

const Supermarket = () => {
    const [clicked, setClicked] = useState(false)
    const [productList, setProductsList] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then((Response) => Response.json())
            .then((data) => setProductsList(data))
            .catch((err) => console.log(err));
    });

    const [ShoppingList, setShoppingList] = useState([])

    const ResetShoppingList = () => {
        setShoppingList([])
        setClicked(false)
    }

    const handleAddProduct = (key) => {
        let newShoppingList = ShoppingList
        newShoppingList.push(productList.find((p) => p.key === key))
        setShoppingList(newShoppingList)
        toast.success('Successfully added to cart!')
    }

    return (
        <div>
            <Toaster position="top-right" reverseOrder={false} />

            {clicked ? (
                // First option shoping list click
                <Grid container direction="column" spacing={2} sx={{ m: 5 }}>
                    <Grid item xs={8}>
                        <Button
                            item
                            variant="outlined"
                            onClick={() => setClicked(false)}
                        >
                            return to supermarket
                        </Button>
                    </Grid>

                    <ComShoppingList
                        ShoppingList={ShoppingList}
                        ResetShoppingList={ResetShoppingList}
                    />
                </Grid>
            ) : (
                // Second option shoping list click
                <Grid container spacing={2} sx={{ m: 5 }}>
                    <Grid item xs={8}>
                        <IconButton
                            item
                            xs={4}
                            color="primary"
                            onClick={() => setClicked(true)}
                            aria-label="add to shopping cart"
                        >
                            Cart{' '}
                            <ShoppingCartOutlinedIcon
                                color="secendery"
                                sx={{ ml: 2 }}
                            />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" component="div" variant="h4">
                            Supermarket
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container sx={{ mt: 4 }}>
                        {productList.map((product, index) => {
                            return (
                                <Grid
                                    item
                                    xs={6}
                                    container
                                    direction="row"
                                    key={index}
                                >
                                    <Grid item xs={8}>
                                        <Product
                                            title={product.title}
                                            price={product.price}
                                            description={product.description}
                                            imageUrl={product.imageUrl}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton
                                            color="primary"
                                            onClick={() =>
                                                handleAddProduct(product.key)
                                            }
                                            aria-label="add to shopping cart"
                                        >
                                            <AddShoppingCartIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            )}
        </div>
    )
}

export default Supermarket
