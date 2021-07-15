import { SearchResult } from '../../types/reducers';
import githubApi from '../../util/githubApi';

export const search =
    (searchTerm, page = 1) =>
    async (dispatch) => {
        try {
            dispatch({ type: 'START_SEARCH', payload: { searchTerm, page } });
            const searchFetchResponse = await githubApi.get('/search/users', {
                params: { q: searchTerm, per_page: 20, page },
            });

            console.log(searchFetchResponse);
            const searchData = searchFetchResponse.data;

            const searchResults: Array<SearchResult> = searchData.items.map(
                (searchResult): SearchResult => ({
                    username: searchResult.login,
                    avatarUrl: searchResult.avatar_url,
                })
            );

            dispatch({ type: 'SET_SEARCH_RESULTS', payload: searchResults });
        } catch (error) {
            let errorMsg = 'Unknown error';
            if (error.response) {
                if (error.response.status === 404) errorMsg = 'Not found';
                if (error.response.status === 403) errorMsg = 'Forbidden';
                if (error.response.status === 422) errorMsg = 'Unprocessable entity';
            } else if (error.message) {
                errorMsg = error.message;
            }

            dispatch({ type: 'SET_SEARCH_ERROR', payload: errorMsg });
        }
    };

export const goNextPage = () => (dispatch, getState) => {
    const { searchTerm, page } = getState().search;
    dispatch(search(searchTerm, page + 1));
};

export const goPreviousPage = () => (dispatch, getState) => {
    const { searchTerm, page } = getState().search;
    if (page === 1) return;
    dispatch(search(searchTerm, page - 1));
};
