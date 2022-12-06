import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import * as React from 'react';

const Product = (props) => {

    return(
        <Card sx={{ display: 'flex', minWidth: '30%', maxWidth: '40%', mb: 2, pr: 2, pl: 2, pt:2}} >
            <Grid container direction="column">
            <Grid Item xs={8} container direction="column">
                
                    <Typography component="div" variant="h5">{props.title}</Typography>
                    <Typography variant="subtitle1" color="text.primary" component="div">
                    {props.price} $ 
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                    {props.description}
                    </Typography>
                
            </Grid>
                <CardMedia 
                Item
                    xs={4}
                    component="img"
                    sx={{ width: 120 }}
                    image={props.imageUrl}
                    alt="product photo"
                />
            
            </Grid>
            </Card>
    );
};

export default Product;