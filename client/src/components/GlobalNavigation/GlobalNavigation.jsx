import React from "react";
import { Link } from "react-router-dom";

export const GlobalNavigation = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create Recipe</Link>
        </nav>
    )
}