import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DataList from '../User/DataList';
import CenteredLoading from '../CenteredLoading';
import CenteredMessage from '../CenteredMessage';

// Redux
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/userActions';

// MaterialUI
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ProfileData from '../User/ProfileData';

export const UserPage = (props) => {
    const {
        profileData,
        loading,
        organizations,
        loadingOrganizations,
        repositories,
        loadingRepositories,
        userError,
        organizationsError,
        repositoriesError,
    } = props;
    const history = useHistory();

    const { username: usernameParam } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        props.fetchUser(usernameParam);
    }, []);

    const backToSearch = () => {
        history.goBack();
    };

    return (
        <Container maxWidth="md">
            <Button
                startIcon={<ArrowBackIosIcon />}
                onClick={backToSearch}
                style={{ marginTop: '20px' }}
                size="small"
            >
                Go back to results
            </Button>
            <Box m={4}>
                {loading ? (
                    <CenteredLoading />
                ) : userError ? (
                    <CenteredMessage icon={ErrorOutlineIcon} message={userError} color="#F33" />
                ) : (
                    <Paper>
                        <Grid container>
                            <Grid md={5} sm={5} xs={12} item>
                                <ProfileData profileData={profileData} />
                            </Grid>
                            <Grid md={7} sm={7} xs={12} item>
                                <div className="profile-repos-and-orgs-column">
                                    <DataList
                                        list={repositories}
                                        loading={loadingRepositories}
                                        error={repositoriesError}
                                        title="Repositories"
                                        emptyMsg="No repositories found"
                                    />
                                    <DataList
                                        list={organizations}
                                        loading={loadingOrganizations}
                                        error={organizationsError}
                                        title="Organizations"
                                        emptyMsg="No organizations found"
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                )}
            </Box>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    profileData: state.user.profileData,
    loading: state.user.loading,
    organizations: state.user.organizations,
    loadingOrganizations: state.user.loadingOrganizations,
    organizationsError: state.user.organizationsError,
    repositories: state.user.repositories,
    loadingRepositories: state.user.loadingRepositories,
    repositoriesError: state.user.repositoriesError,
    userError: state.user.userError,
});

const mapDispatchToProps = {
    fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
