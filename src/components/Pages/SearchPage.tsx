import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// MaterialUI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SearchBar from '../Search/SearchBar';
import Divider from '@material-ui/core/Divider';
import SearchResults from '../Search/SearchResults';

export const SearchPage = (props) => {
    return (
        <Container maxWidth="md">
            <Box m={3} className="search-container">
                <Grid container spacing={3}>
                    <Grid xs={12} item>
                        <SearchBar />
                    </Grid>
                    <Grid xs={12} item>
                        <Divider orientation="horizontal" light={true} variant="middle" />
                    </Grid>
                    <Grid xs={12} item>
                        <SearchResults />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
