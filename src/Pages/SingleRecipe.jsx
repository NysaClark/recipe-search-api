import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useFetch } from "../util/useFetch";
import Loading from '../Components/Loading'

const SingleRecipe = () => {
  const { id } = useParams();
  const { error, hits: recipe, loading } = useFetch(`/${id}?`);

  if(loading){
    return <Loading />
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back to Recipes
        </Link>
      </div>
    );
  }

  const {
    label,
    image,
    source,
    url,
    dietLabels,
    cautions,
    ingredientLines,
    calories,
    totalTime,
    cuisineType,
    mealType,
    dishType,
  } = recipe;

  return (
    <section className="single-recipe">
        <div className="recipe-top">

            <div className="recipe-header">
                <h2>{label}</h2>
                <h3>from <a href={url}>{source}</a></h3>
                <img src={image} alt={label} />
            </div>

            <div className="recipe-info">

                <h4>recipe facts</h4>

                {totalTime !== 0 && <p>total make time: {totalTime} mins</p>}

                {calories && <p>{Math.ceil(calories)} calories</p>}

                {dietLabels.length !== 0 && <h5>diet label(s):</h5>}
                {dietLabels.map((dl, index) => {
                    return <p key={index}>{dl}</p>
                })}

                {cuisineType.length !== 0 && <h5>cuisine type(s):</h5>}
                {cuisineType.map((ct, index) => {
                    return <p key={index}>{ct}</p>
                })}

                {mealType.length !== 0 && <h5>meal type(s):</h5>}
                {mealType.map((m, index) => {
                    return <p key={index}>{m}</p>
                })}

                {dishType.length !== 0 && <h5>dish type(s):</h5>}
                {dishType.map((dt, index) => {
                    return <p key={index}>{dt}</p>
                })}

                {cautions.length !== 0 && <h5>caution(s):</h5>}
                {cautions.map((ca, index) => {
                    return <p key={index}>{ca}</p>
                })}

            </div>

        </div>

        <div className="ingredients">
            <h4>Ingredients</h4>
            <u className="ingredientList">
                {ingredientLines.map((ingredient, index) => {
                    return <li key={index}>{ingredient}</li>
                })}
            </u>
        </div>


        <Link to="/" className="btn">Back to Recipes</Link>
    </section>
  );
};

export default SingleRecipe;
