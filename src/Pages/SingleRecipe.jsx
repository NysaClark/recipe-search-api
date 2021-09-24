import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {useFetch} from '../util/useFetch';

const SingleRecipe = () => {
    const {id} = useParams();
    const {error, hits: recipe} = useFetch(`/${id}?`);

    if(error.show){
        return (
            <div className="page-error">
                <h1>{error.msg}</h1>
                <Link to="/" className="btn">Back to Recipes</Link>
            </div>
        )
    }

    const {label, image, source, url, dietLabels, healthLabels, cautions, ingredientLines, calories, totalTime, cuisineType, mealType, dishType} = recipe;

    return (
        <section className="single-movie">
            <div className="ingredients">
                {/* {ingredientLines.map(function(ingredients, i){
                    return <p className={i}>{ingredients}</p>
                })} */}
            </div>
            <div className="recipe-info">

            </div>
            <Link to="/" className="btn">Back to Recipes</Link>
        </section>

    )
}

export default SingleRecipe
