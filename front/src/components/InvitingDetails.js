import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'

const Product = (props) => {
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')

    const handleChangeFullName = (event) => {
        const value = event.target.value
        setFullName(value)
        props.handleChangeFullName(value)
    }

    const handleChangeNumber = (event) => {
        const value = event.target.value
        setPhoneNumber(value)
        props.handleChangeNumber(value)
    }

    const handleChangeAddress = (event) => {
        const value = event.target.value
        setAddress(value)
        props.handleChangeAddress(value)
    }

    return (
        <Grid container direction="row" sx={{ ml: 4 }}>
            <Grid Item xs={2.5}>
                <TextField
                    label="fullName"
                    value={fullName}
                    onChange={handleChangeFullName}
                    id="standard-basic"
                    required
                />
            </Grid>
            <Grid Item xs={2.5}>
                <TextField
                    label="Phone number"
                    value={phoneNumber}
                    onChange={handleChangeNumber}
                    id="standard-basic"
                    required
                />
            </Grid>
            <Grid Item xs={2.5}>
                <TextField
                    label="address"
                    value={address}
                    onChange={handleChangeAddress}
                    id="standard-basic"
                    required
                />
            </Grid>
        </Grid>
    )
}

export default Product
