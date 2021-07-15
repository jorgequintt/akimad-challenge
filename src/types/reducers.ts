export interface ProfileDataType {
    username: string;
    url: string;
    avatarUrl: string;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    bio?: string;
    publicRepos: number;
    publicGists: number;
    followers: number;
    following: number;
    createdAt: string;
}

export interface UserDataItem {
    name: string;
    description: string;
    url: string;
}

export interface UserStateType {
    profileData: ProfileDataType;
    loading: boolean;
    organizations: Array<UserDataItem>;
    loadingOrganizations: boolean;
    repositories: Array<UserDataItem>;
    loadingRepositories: boolean;
    organizationsError: string;
    repositoriesError: string;
    userError: string;
}

export interface SearchResult {
    avatarUrl: string;
    username: string;
}

export interface SearchStateType {
    searchTerm: string;
    loading: boolean;
    results: null | Array<SearchResult>;
    page: number;
    error: string;
}
