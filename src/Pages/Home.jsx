import React from 'react'
import SearchForm from '../Components/SearchForm'
import PageButtons from '../Components/PageButtons'
import Loading from '../Components/Loading'
import Recipes from '../Components/Recipes'
import { useGlobalContext } from "../util/context";

const Home = () => {
    const {loading} = useGlobalContext();
    return (
        <main>
            <SearchForm />
            <PageButtons />
            {loading ? <Loading /> : <Recipes />}
        </main>
    )
}

export default Home
