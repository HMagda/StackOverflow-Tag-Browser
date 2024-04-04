import React from 'react';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';

const SortDropdown = ({ sortBy, handleSortChange }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="sort-label">Sort By</InputLabel>
      <Select
        labelId="sort-label"
        value={sortBy}
        onChange={handleSortChange}
      >
        <MenuItem value="popular_desc">Most Popular</MenuItem>
        <MenuItem value="popular_asc">Least Popular</MenuItem>
        <MenuItem value="name_asc">Name (A-Z)</MenuItem>
        <MenuItem value="name_desc">Name (Z-A)</MenuItem>
        <MenuItem value="activity_desc">Most Recent Activity</MenuItem>
        <MenuItem value="activity_asc">Least Recent Activity</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortDropdown;
