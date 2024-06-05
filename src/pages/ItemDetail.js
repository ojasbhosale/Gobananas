import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, CircularProgress } from '@mui/material';

const ItemDetail = ({ items }) => {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id, 10));

  if (!item) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container>
      <Box mt={4} mb={4}>
        <img src={item.image} alt={item.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
        <Typography variant="h4" component="h1" gutterBottom>{item.title}</Typography>
        <Typography variant="h6" component="h2">{item.price} USD</Typography>
        <Typography variant="body1" component="p" mt={2}>{item.description}</Typography>
      </Box>
    </Container>
  );
};

export default ItemDetail;
