import React, { Fragment } from "react";
import './NavigationContainer.css';

export const NavigationContainer = ({ children }) => {
    return (
        <div className="navigation-container">
            {children}
        </div>
    )
}