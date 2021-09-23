import React, { useReducer, useContext, useEffect } from 'react';
import {reducer} from './reducer';
const API_ENDPOINT = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_RECIPE_API_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}&`;

const initialState = {
    loading: true,
    query: "chicken",
    hits: [],
    page: 1,
    nbPages: 1
};

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchRecipes = async (url) => {
        dispatch({type: "SET_LOADING"});
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            dispatch({type: "SET_HITS", payload: data});
        } catch (error){
            console.error(error);
        }
    };
    
    const handleSearch = (query) => {
        dispatch({type: "HANDLE_SEARCH", payload: query})
    }

    // const changePage = (page) => {
    //     if(page >= 0 && page <= state.nbPages-1){
    //         dispatch({type: "CHANGE_PAGE", payload: page})
    //     }else if(page > state.nbPages-1){
    //         dispatch({type: "CHANGE_PAGE", payload: 0})
    //     }else if (page < 0){
    //         dispatch({type: "CHANGE_PAGE", payload: state.nbPages-1})
    //     }
    // }

    useEffect(() => {
        fetchRecipes(`${API_ENDPOINT}q=${state.query}`);
    }, [state.query]);

    return (
        <AppContext.Provider value ={{...state, handleSearch}}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}