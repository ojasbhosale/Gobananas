import React from 'react';
import Grid from '@mui/material/Grid';
import ItemCard from './ItemCard';

const ItemList = ({ items }) => (
  <Grid container spacing={2}>
    {items.map((item) => (
      <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
        <ItemCard item={item} />
      </Grid>
    ))}
  </Grid>
);

export default ItemList;
