import React, {useState, useEffect} from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TagList from './components/TagList';
import SortDropdown from './components/SortDropdown';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import {fetchTags} from './services/stackOverflowAPI';
import PageSizeSelector from './components/PageSizeSelector';
import AppHeader from './components/AppHeader';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';


const theme = createTheme({});

const App = () => {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sortBy, setSortBy] = useState('popular_desc');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
              const { items, quota_remaining} = await fetchTags(currentPage, pageSize, sortBy);
              setTags(items);
              const totalPagesCalc = quota_remaining > 0 ? Math.ceil(quota_remaining / pageSize) : 1;
              setTotalPages(totalPagesCalc);
              setError(null);
            } catch (error) {
                console.error(error);
                setError('Failed to fetch tags');
                setTotalPages(1);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage, pageSize, sortBy]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handlePageSizeChange = (event) => {
        let newSize = Number(event.target.value);
        newSize = Math.max(Math.min(newSize, 100), 1);
        setPageSize(newSize);
        setCurrentPage(1);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppHeader />
            <Container component='main' maxWidth='md'>
                <Box sx={{mt: 2}}>
                    <SortDropdown
                        sortBy={sortBy}
                        handleSortChange={handleSortChange}
                    />
                    <PageSizeSelector
                        pageSize={pageSize}
                        onPageSizeChange={handlePageSizeChange}
                    />
                </Box>
                {loading ? (
                    <CircularProgress />
                ) : error ? (
                    <Alert severity='error'>{error}</Alert>
                ) : (
                    <>
                        <TagList tags={tags} />
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={handlePageChange}
                            color='primary'
                            variant='outlined'
                            shape='rounded'
                            sx={{mt: 2}}
                        />
                    </>
                )}
            </Container>
        </ThemeProvider>
    );
};

export default App;
