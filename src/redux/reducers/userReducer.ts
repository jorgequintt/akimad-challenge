import { UserStateType } from '../../types/reducers';

const initialState: UserStateType = {
    profileData: {
        username: '',
        avatarUrl: '',
        url: '',
        name: '',
        company: '',
        blog: '',
        location: '',
        email: '',
        bio: '',
        publicRepos: 0,
        publicGists: 0,
        followers: 0,
        following: 0,
        createdAt: '',
    },
    loading: false,
    organizations: [],
    loadingOrganizations: false,
    repositories: [],
    loadingRepositories: false,
    organizationsError: '',
    repositoriesError: '',
    userError: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_TO_LOADING':
            return { ...state, loading: true };

        case 'START_FETCHING_PROFILE':
            return {
                ...initialState,
                profileData: { ...initialState.profileData },
                loading: true,
                loadingOrganizations: true,
                loadingRepositories: true,
            };

        case 'SET_PROFILE_DATA':
            return { ...state, loading: false, userError: '', profileData: { ...action.payload } };
        case 'SET_REPOSITORIES':
            return {
                ...state,
                loadingRepositories: false,
                repositoriesError: '',
                repositories: [...action.payload],
            };
        case 'SET_ORGANIZATIONS':
            return {
                ...state,
                loadingOrganizations: false,
                organizationsError: '',
                organizations: [...action.payload],
            };

        case 'SET_PROFILE_DATA_ERROR':
            return { ...state, loading: false, userError: action.payload };
        case 'SET_REPOSITORIES_ERROR':
            return { ...state, loadingRepositories: false, repositoriesError: action.payload };
        case 'SET_ORGANIZATIONS_ERROR':
            return { ...state, loadingOrganizations: false, organizationsError: action.payload };

        default:
            return state;
    }
}
