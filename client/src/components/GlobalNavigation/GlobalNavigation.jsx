import React from "react";
import { NavLink } from "react-router-dom";
import './GlobalNavigation.css';

export const GlobalNavigation = () => {
    return (
        <nav className="global-navigation">
            <NavLink className="global-link" activeClassName="active" to="/">Home</NavLink>
            <NavLink className="global-link" activeClassName="active" to="/create">Create Recipe</NavLink>
        </nav>
    )
}