import React, { Fragment } from "react";
import { LatestRecipes } from "../../components/LatestRecipes/LatestRecipes";
import { PopularRecipes } from "../../components/PopularRecipes/PopularRecipes";
import { CreateRecipe } from "../../components/CreateRecipe/CreateRecipe";

export const Home = ({recipes}) => {

    return (
        <Fragment>
            <CreateRecipe />
            <LatestRecipes recipes={recipes} />
            <PopularRecipes recipes={recipes} />
        </Fragment>
    )
}