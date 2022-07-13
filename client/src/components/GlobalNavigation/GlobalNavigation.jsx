import React from "react";
import { NavLink } from "react-router-dom";
import './GlobalNavigation.css';

export const GlobalNavigation = () => {
    return (
        <nav className="global-navigation">
            <NavLink className={({isActive}) => (isActive ? 'global-link active' : 'global-link')} to="/">Home</NavLink>
            <NavLink className={({isActive}) => (isActive ? 'global-link active' : 'global-link')} to="/create">Create Recipe</NavLink>
        </nav>
    )
}