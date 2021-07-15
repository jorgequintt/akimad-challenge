import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { goNextPage, goPreviousPage } from '../../redux/actions/searchActions';
import SearchResult from './SearchResult';
import CenteredMessage from '../CenteredMessage';
import CenteredLoading from '../CenteredLoading';

// MaterialUI
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export const SearchResults = (props) => {
    const { page, results, loading, error } = props;

    const handleNextPage = () => {
        window.scrollTo(0, 0);
        props.goNextPage();
    };
    const handlePreviousPage = () => {
        window.scrollTo(0, 0);
        props.goPreviousPage();
    };

    return (
        <>
            {results === null ? (
                ''
            ) : loading ? (
                <CenteredLoading />
            ) : error ? (
                <CenteredMessage message={error} icon={ErrorOutlineIcon} color="#F33" />
            ) : results.length === 0 ? (
                <CenteredMessage message="No results" icon={SentimentVeryDissatisfiedIcon} color="#777" />
            ) : (
                <>
                    <Grid container spacing={2}>
                        {results.map((result) => (
                            <SearchResult
                                key={result.username}
                                username={result.username}
                                avatarUrl={result.avatarUrl}
                            />
                        ))}
                    </Grid>
                    <Box m={3} className="pagination-container">
                        <Button
                            disabled={page === 1}
                            onClick={handlePreviousPage}
                            color="primary"
                            variant="contained"
                        >
                            Prev
                        </Button>
                        <Typography variant="overline">PAGE {page}</Typography>
                        <Button color="primary" variant="contained" onClick={handleNextPage}>
                            Next
                        </Button>
                    </Box>
                </>
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    results: state.search.results,
    page: state.search.page,
    loading: state.search.loading,
    error: state.search.error,
});

const mapDispatchToProps = {
    goNextPage,
    goPreviousPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
