
import { types } from "../types/types";
import { loadRepositories } from "../helpers/loadRepositories";




export const filteredRepositories = (filtered)=>({
    type: types.repositoriesLoad,
    payload: [...filtered]
    
})



export const startLoadingRepositories = (uid) => {
    console.log("Si entra")
    
    return async (dispatch) => {
        const repositories = await loadRepositories();
        dispatch(setRepositories(repositories.data.viewer.repositories.nodes));
        dispatch(setProfile(repositories.data.viewer));
    }
}

export const setRepositories = (repositories) => ({
    type: types.repositoriesLoad,
    payload: [...repositories]
})

export const setProfile=(profile)=>({
    type: types.profile,
    payload: profile
})










export const noteLogout = () => ({
    type: types.notesLogoutCleaning
})