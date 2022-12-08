import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect  } from 'react';

const Product = (props) => {
    const [fullName, setFullName] = useState(props.fullName);
    const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
    const [address, setAddress] = useState(props.address);

    const handleChangeFullName = (event) => {
        setFullName(event.target.value);
        props.handleChangeFullName(event.target.value);
    }

    const handleChangeNumber = (event) => {
        setPhoneNumber(event.target.value);
        props.handleChangePhoneNumber(event.target.value);
    }

    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
        props.handleChangeAddress(event.target.value);
    }

    return(
            <Grid container direction="row" sx={{ml:4}}>
                <Grid Item xs={2.5}>
                    <TextField value={fullName} onChange={handleChangeFullName} id="standard-basic" required helperText="Full Name" />
                </Grid>
                <Grid Item xs={2.5}>
                    <TextField value={phoneNumber} onChange={handleChangeNumber} id="standard-basic" required helperText="Phone number" />
                </Grid>
                <Grid Item xs={2.5}>
                <TextField value={address} onChange={handleChangeAddress} id="standard-basic" required helperText="address" />
                </Grid>
            </Grid>  
    );
};

export default Product;