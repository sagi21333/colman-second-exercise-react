import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import * as React from 'react';

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
            <Grid container>
                <Grid Item xs={8}>
                    <TextField value={fullName} onChange={handleChangeFullName} id="standard-basic" required defaultValue="Full Name" />
                </Grid>
                <Grid Item xs={8}>
                    <TextField value={phoneNumber} onChange={handleChangeNumber} id="standard-basic" required defaultValue="Phone number" />
                </Grid>
                <Grid Item xs={8}>
                <TextField value={address} onChange={handleChangeAddress} id="standard-basic" required defaultValue="address" />
                </Grid>
            </Grid>  
    );
};

export default Product;