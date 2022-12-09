import Product from "./Product";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect  } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import InvitingDetails from './InvitingDetails';
import {orderShoppingList} from '../services/supermarketService';

const ShopingList = (props) => {

    const [ShoppingList, setShoppingList] = useState(props.ShoppingList);
    const [totalPrice, setTotalPrice] = useState(0);
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async () => {
        if(ShoppingList.length > 0){
            console.log(fullName !== undefined);
            console.log(fullName);
            if(fullName !== '' && phoneNumber !== '' && address !== '') {
                setTotalPrice(0);
                setFullName(undefined);
                setPhoneNumber(undefined);
                setAddress(undefined);
                props.ResetShoppingList();
                
                try {
                    orderShoppingList({"products": ShoppingList, "fullName": fullName, "phoneNumber": phoneNumber, "address": address});
                    toast.success('Successfully ordered!');
                }
                catch(err) {
                    toast.error("Didn't success order: " + err.message);
                }
            } else {
                toast.error("Yoe didn't enter all the required fields");
            }
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

    const handleChangeFullName = (fullName) => {
        setFullName(fullName);
        console.log(fullName);
    }

    const handleChangeNumber = (phoneNumber) => {
        setPhoneNumber(phoneNumber);
    }

    const handleChangeAddress = (address) => {
        setAddress(address);
    }


    return(
        <div> 
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <Grid container direction="column" spacing={2}>
            <Grid item xs={4}>
                <Typography sx={{p:2}} align="center" component="div" variant="h4">Shoping List</Typography>
            </Grid>
            <Grid item xs={12} container spacing={3}>
                {ShoppingList.map((product,index) => {
                    return (
                        <Grid item xs={5}>
                            <Product 
                                sx={{pr:2}}
                                key={index}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                imageUrl={product.imageUrl} />
                        </Grid>)

                })}
            </Grid>
                <Grid item xs={8}>
                    <Typography sx={{p:2}} component="div" variant="h5">Total: {totalPrice} $ </Typography>
                </Grid>

                <InvitingDetails 
                    fullName={fullName} 
                    address={address} 
                    phoneNumber={phoneNumber} 
                    handleChangeAddress={handleChangeAddress}
                    handleChangeNumber={handleChangeNumber}
                    handleChangeFullName={handleChangeFullName}/>

                <Grid item xs={4} sx={{ml:4, mt:5}}>
                    <Button variant="outlined" size="medium" onClick={handleSubmit}>Order</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default ShopingList;