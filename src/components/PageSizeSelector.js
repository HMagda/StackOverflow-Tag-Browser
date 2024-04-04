import React from 'react';
import { TextField, Box } from '@mui/material';

const PageSizeSelector = ({ pageSize, onPageSizeChange }) => {
  return (
    <Box sx={{ my: 2 }}>
      <TextField
        label="Page Size"
        type="number"
        variant="outlined"
        size="small"
        value={pageSize}
        onChange={onPageSizeChange}
        inputProps={{ min: "1", max: "100", step: "1" }}
      />
    </Box>
  );
};

export default PageSizeSelector;

