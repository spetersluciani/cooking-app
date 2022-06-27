import React, { useEffect, useState } from "react";

export const IngredientField = ({id, removable, amount, measurement, name, updateIngredient}) => {
    const [ingredientAmount, setIngredientAmount] = useState(amount);
    const [ingredientMeasurement, setIngredientMeasurement] = useState(measurement);
    const [ingredientName, setIngredientName] = useState(name);

    const measurementUnits = [ 'tbsp', 'tsp', 'oz', 'fl. oz', 'cup', 'quart', 'pint', 'gallon', 'liter', 'lb', 'mL', 'g', 'kg' ];

    useEffect(() => {
        let ingredient = {
            id: id,
            amount: ingredientAmount,
            measurement: ingredientMeasurement,
            name: ingredientName
        }
        updateIngredient(ingredient);
    }, [ingredientAmount, ingredientMeasurement, ingredientName]);

    return (
        <div className="ingredientRow" id={id}>
            <label htmlFor={'ingredientAmount'}>Amount</label>
            <input type={'number'} id={'ingredientAmount'} min='0' value={ingredientAmount} onChange={(e) => setIngredientAmount(e.target.value)} />
            <label htmlFor={'ingredientMeasurement'}>Measurement</label>
            <select id={'ingredientMeasurement'} value={ingredientMeasurement} onChange={(e) => setIngredientMeasurement(e.target.value)} >
                {measurementUnits.map((unit, index) => {
                   return <option key={index} value={unit}>{unit}</option>;
                })}
            </select>
            <label htmlFor={'ingredientName'}>Name</label>
            <input type={'text'} id={'ingredientName'} value={ingredientName} onChange={(e) => setIngredientName(e.target.value)} />
            {removable && <button>X</button>}
            {id}
        </div>
    )
}