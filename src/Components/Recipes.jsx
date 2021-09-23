import React from 'react'
import {useGlobalContext} from '../util/context';
import {Link} from 'react-router-dom';

const Recipes = () => {
    const {hits} = useGlobalContext();
    
    return <section className="recipes">
        {hits.map((hit) => {
            const {recipe} = hit;

            const id = recipe.uri.split('_')[1];

            return (
                <Link to={`/recipes/${id}`} key={id} className="recipe">
                    <article>
                        <img src={recipe.image} alt={recipe.label} />
                        <h4>{recipe.label}</h4>
                    </article>
                </Link>
            )
        })}
    </section>
}

export default Recipes
