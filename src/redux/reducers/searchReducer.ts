import { SearchStateType } from '../../types/reducers';

const initialState: SearchStateType = {
    searchTerm: '',
    loading: false,
    results: null,
    page: 1,
    error: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'START_SEARCH':
            return {
                ...state,
                loading: true,
                searchTerm: action.payload.searchTerm,
                page: action.payload.page,
                error: '',
                results: [],
            };

        case 'SET_SEARCH_ERROR':
            return { ...state, loading: false, error: action.payload };

        case 'SET_SEARCH_RESULTS':
            return { ...state, loading: false, error: '', results: action.payload };

        default:
            return state;
    }
}
