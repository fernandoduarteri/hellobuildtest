import { types } from "../types/types";

const initialState = {
    repositories: [],
    profile: {}
}
export const repositoriesReducer = (state = initialState, action) => {
    switch (action.type) {


        case types.repositoriesLoad:
            return {
                ...state,
                repositories: [...action.payload]
            }
        case types.profile:
            return {
                ...state,
                profile: {
                    avatar: action.payload.avatarUrl,
                    bio: action.payload.bio,
                    name: action.payload.name,
                    login: action.payload.login,
                    url: action.payload.url,
                    email: action.payload.email,
                    location: action.payload.location,
                    updatedAt: action.payload.updatedAt
                }
            }

        default:
            return state;
    }
}