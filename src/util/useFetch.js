import { useState, useEffect } from 'react';
const API_ENDPOINT_1 = `https://api.edamam.com/api/recipes/v2`;
const API_ENDPOINT_2 = `type=public&app_id=${process.env.REACT_APP_RECIPE_API_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}&`

export const useFetch = (query) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({show: false, msg: ""});
    const [hits, setHits] = useState([]);
    // const [page, setPage] = useState(1);
    const [nbPages, setNbPages] = useState(1)

    //the url is a varibale that will take in the endpoint and the query
    const fetchRecipes = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            if(data.hits) {
                setHits(data.hits);
                setNbPages(Math.ceil(data.count / 20));
                setError({show: false, msg: ""});
            }else if(data.recipe){
                setHits(data.recipe);
                setError({show: false, msg: ""});
            }else{
                data.map((d) => {
                    const {message} = d;
                    setError({show: true, msg: message})
                })
            }
            setLoading(false);

        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        console.log(`${API_ENDPOINT_1}${query}${API_ENDPOINT_2}`);
        fetchRecipes(`${API_ENDPOINT_1}${query}${API_ENDPOINT_2}`);
    }, [query]);

    return {loading, error, hits, nbPages};
};