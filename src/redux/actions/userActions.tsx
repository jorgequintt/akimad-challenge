import { ProfileDataType, UserDataItem } from '../../types/reducers';
import githubApi from '../../util/githubApi';
import axios from 'axios';

export const setToLoading = () => (dispatch) => {
    dispatch({ type: 'SET_TO_LOADING' });
};

export const fetchUser = (username) => async (dispatch) => {
    try {
        dispatch({ type: 'START_FETCHING_PROFILE' });
        const userFetchResponse = await githubApi.get(`/users/${username}`);
        const userData = userFetchResponse.data;
        const reposUrl = userData.repos_url;
        const organizationsUrl = userData.organizations_url;

        const profileData: ProfileDataType = {
            username: userData.login ?? '',
            avatarUrl: userData.avatar_url ?? '',
            url: userData.url ?? '',
            name: userData.name ?? '',
            company: userData.company ?? '',
            blog: userData.blog ?? '',
            location: userData.location ?? '',
            email: userData.email ?? '',
            bio: userData.bio ?? '',
            publicRepos: userData.public_repos ?? 0,
            publicGists: userData.public_gists ?? 0,
            followers: userData.followers ?? 0,
            following: userData.following ?? 0,
            createdAt: userData.created_at ?? '',
        };

        dispatch({ type: 'SET_PROFILE_DATA', payload: profileData });

        dispatch(fetchRepositories(reposUrl));
        dispatch(fetchOrganizations(organizationsUrl));
    } catch (error) {
        let errorMsg = 'Unknown error';
        if (error.response) {
            if (error.response.status === 404) errorMsg = 'User not found';
            if (error.response.status === 403) errorMsg = 'Forbidden';
            if (error.response.status === 422) errorMsg = 'Unprocessable entity';
        } else if (error.message) {
            errorMsg = error.message;
        }

        dispatch({ type: 'SET_PROFILE_DATA_ERROR', payload: errorMsg });
    }
};

export const fetchRepositories = (url) => async (dispatch) => {
    try {
        const repositoriesFetchResponse = await axios.get(url);
        const repositoriesData = repositoriesFetchResponse.data;

        const repositories: Array<UserDataItem> = repositoriesData.map(
            (repository): UserDataItem => ({
                name: repository.name ?? '',
                description: repository.description ?? '',
                url: repository.html_url ?? '',
            })
        );

        dispatch({ type: 'SET_REPOSITORIES', payload: repositories });
    } catch (error) {
        let errorMsg = 'Unknown error';
        if (error.response) {
            if (error.response.status === 404) errorMsg = 'Not found';
            if (error.response.status === 403) errorMsg = 'Forbidden';
            if (error.response.status === 422) errorMsg = 'Unprocessable entity';
        } else if (error.message) {
            errorMsg = error.message;
        }

        dispatch({ type: 'SET_REPOSITORIES_ERROR', payload: errorMsg });
    }
};

export const fetchOrganizations = (url) => async (dispatch) => {
    try {
        const organizationsFetchResponse = await axios.get(url);
        const organizationsData = organizationsFetchResponse.data;

        const organizations: Array<UserDataItem> = organizationsData.map(
            (organization): UserDataItem => ({
                name: organization.login ?? '',
                description: organization.description ?? '',
                url: organization.html_url ?? '',
            })
        );

        dispatch({ type: 'SET_ORGANIZATIONS', payload: organizations });
    } catch (error) {
        let errorMsg = 'Unknown error';
        if (error.response) {
            if (error.response.status === 404) errorMsg = 'Not found';
            if (error.response.status === 403) errorMsg = 'Forbidden';
            if (error.response.status === 422) errorMsg = 'Unprocessable entity';
        } else if (error.message) {
            errorMsg = error.message;
        }

        dispatch({ type: 'SET_ORGANIZATIONS_ERROR', payload: errorMsg });
    }
};
