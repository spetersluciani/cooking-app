import React, { useEffect, useState } from "react";

export const IngredientField = ({id, measurement, units, name, updateIngredient}) => {
    const [ingredientMeasurement, setIngredientMeasurement] = useState(measurement);
    const [ingredientUnits, setIngredientUnits] = useState(units);
    const [ingredientName, setIngredientName] = useState(name);

    const measurementUnits = [ 'tbsp', 'tsp', 'oz', 'fl. oz', 'cup', 'quart', 'pint', 'gallon', 'liter', 'lb', 'mL', 'g', 'kg' ];

    useEffect(() => {
        let ingredient = {
            id: id,
            measurement: ingredientMeasurement,
            units: ingredientUnits,
            name: ingredientName
        }
        updateIngredient(ingredient);
    }, [ingredientMeasurement, ingredientUnits, ingredientName]);

    return (
        <div className="ingredientRow" id={id}>
            <label htmlFor={'ingredientAmount'}>Amount</label>
            <input type={'number'} id={'ingredientAmount'} min='0' value={ingredientMeasurement} onChange={(e) => setIngredientMeasurement(e.target.value)} />
            <label htmlFor={'ingredientMeasurement'}>Measurement</label>
            <select id={'ingredientMeasurement'} value={ingredientUnits} onChange={(e) => setIngredientUnits(e.target.value)} >
                {measurementUnits.map((unit, index) => {
                   return <option key={index} value={unit}>{unit}</option>;
                })}
            </select>
            <label htmlFor={'ingredientName'}>Name</label>
            <input type={'text'} id={'ingredientName'} value={ingredientName} onChange={(e) => setIngredientName(e.target.value)} />
        </div>
    )
}