import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Recipes from './Recipes';
import * as actions from "../Redux/actionCreators"

export default function MealCard({match}) {
    const noAddCss = ".add-button {display: none}"

    const mealId = Number(match.params.mealId);

    const mealList = useSelector(state =>
        state.mealList)

    const meal = mealList.find(meal => meal.id === mealId);


    if (!meal) {
        return (
            <div>
                <h2>Meal not found!</h2>
            </div>
        )
    }

    return(
        <div className="list-card-container">
            <h3 className='card-title'>{meal.title}</h3>
            <Recipes recipes={"meal"} mealId={mealId}/>
            <style>{noAddCss}</style>
        </div>
    );
}

//     recipe_id serial,
//     title varchar(50) NOT NULL,
//     details varchar(2000) NOT NULL,
//     instructions varchar(2000) NOT NULL,
//     dish_type varchar(50) NULL,
//     isPublic boolean NOT NULL DEFAULT FALSE,
//     CONSTRAINT PK_recipe PRIMARY KEY (recipe_id)