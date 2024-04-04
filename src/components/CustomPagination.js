import React from 'react';
import Pagination from '@mui/material/Pagination';

const CustomPagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <Pagination
            count={totalPages}
            page={currentPage}
            onChange={onPageChange}
            color="primary"
            variant="outlined"
            shape="rounded"
        />
    );
};

export default CustomPagination;

