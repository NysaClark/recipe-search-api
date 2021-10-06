import React, {useState, useContext} from 'react';
import {useFetch} from './useFetch';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [query, setQuery] = useState('ice cream cake');
    const [pageNum, setPageNum] = useState(1);

    const {loading, error, hits, nbPages} = useFetch(`?q=${query}&`);

    const changePage = (input) => {
        if(input === '+' && pageNum < nbPages){
            setPageNum(pageNum + 1);
        }else if(input === '+' && pageNum >= nbPages){
            setPageNum(1);
        }else if(input === '-' && pageNum > 1){
            setPageNum(pageNum - 1);
        }
    }

    return <AppContext.Provider value={{query, setQuery, pageNum, setPageNum, nbPages, loading, error, hits, changePage}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}