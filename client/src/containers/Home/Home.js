import React, { Fragment } from "react";
import { LatestRecipes } from "../../components/LatestRecipes/LatestRecipes";

export const Home = ({recipes}) => {

    return (
        <Fragment>
            <LatestRecipes recipes={recipes} />
        </Fragment>
    )
}