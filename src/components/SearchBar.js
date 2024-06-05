import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <Box mb={2}>
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      sx={{ 
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px',
        }
      }}
    />
  </Box>
);

export default SearchBar;
