import React, { Fragment } from "react";
import { LatestRecipes } from "../../components/LatestRecipes/LatestRecipes";
import { PopularRecipes } from "../../components/PopularRecipes/PopularRecipes";

export const Home = ({recipes}) => {

    return (
        <Fragment>
            <LatestRecipes recipes={recipes} />
            <PopularRecipes recipes={recipes} />
        </Fragment>
    )
}