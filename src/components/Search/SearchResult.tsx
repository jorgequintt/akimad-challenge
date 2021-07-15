import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setToLoading } from '../../redux/actions/userActions';

// MaterialUI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export const SearchResult = (props) => {
    const { username, avatarUrl } = props;
    const history = useHistory();

    const handleClick = () => {
        props.setToLoading();
        history.push(`/user/${username}`);
    };

    return (
        <Grid lg={3} md={3} sm={4} xs={6} item>
            <Link to="#" onClick={handleClick} style={{ textDecoration: 'none' }}>
                <Paper className="user-container-search">
                    <Grid container justify="center" direction="column" alignItems="center">
                        <Grid xs={12} item>
                            <Avatar className="user-avatar-search" src={avatarUrl} />
                        </Grid>
                        <Grid xs={12} className="user-username-search" item>
                            <Typography>{username}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Link>
        </Grid>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { setToLoading };

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
