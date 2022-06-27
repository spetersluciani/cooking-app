import React, { useEffect, useState } from "react";

export const CreateRecipeIngredient = () => {
    const [ingredientAmount, setIngredientAmount] = useState(0);
    const [ingredientMeasurement, setIngredientMeasurement] = useState('');
    const [ingredientName, setIngredientName] = useState('');
    const [ingredientString, setIngredientString] = useState('');

    const measurementUnits = [ 'tbsp', 'tsp', 'oz', 'fl. oz', 'cup', 'quart', 'pint', 'gallon', 'liter', 'lb', 'mL', 'g', 'kg' ];

    useEffect(() => {
        if (ingredientAmount && ingredientMeasurement && ingredientName) {
            setIngredientString(`${ingredientAmount} ${ingredientMeasurement} ${ingredientName}`);
        }
    }, [ingredientAmount, ingredientMeasurement, ingredientName]);

    return (
        <div className="ingredientRow">
            <label htmlFor={'ingredientAmount'}>Amount</label>
            <input type={'number'} id={'ingredientAmount'} min='0' value={ingredientAmount} onChange={(e) => { setIngredientAmount(e.target.value) }} />
            <label htmlFor={'ingredientMeasurement'}>Measurement</label>
            <select id={'ingredientMeasurement'} value={ingredientMeasurement} onChange={(e) => { setIngredientMeasurement(e.target.value) }}>
                {measurementUnits.map((unit, index) => {
                   return <option key={index} value={unit}>{unit}</option>;
                })}
            </select>
            <label htmlFor={'ingredientName'}>Name</label>
            <input type={'text'} id={'ingredientName'} value={ingredientName} onChange={(e) => { setIngredientName(e.target.value) }} />
        </div>
    )
}