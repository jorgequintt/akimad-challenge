import React, { useState } from 'react';
import { connect } from 'react-redux';
import { search } from '../../redux/actions/searchActions';

// MaterialUi
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

export const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { loading, searchTerm: activeSearchTerm } = props;

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    const handleSubmit = () => {
        props.search(searchTerm);
    };

    return (
        <Paper className="search-box">
            <InputBase
                disabled={loading}
                className="search-input"
                onChange={handleInputChange}
                value={searchTerm || activeSearchTerm}
                placeholder="Search"
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmit();
                    }
                }}
            />
            <IconButton onClick={handleSubmit} disabled={loading} type="submit">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

const mapStateToProps = (state) => ({
    loading: state.search.loading,
    searchTerm: state.search.searchTerm,
});

const mapDispatchToProps = { search };

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
