import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const ItemCard = ({ item }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardActionArea component={Link} to={`/item/${item.id}`}>
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {item.price} USD
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default ItemCard;
