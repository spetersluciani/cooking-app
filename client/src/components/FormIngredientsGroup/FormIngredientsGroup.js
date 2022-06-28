import React, { useEffect, useState } from "react";
import { IngredientField } from "../IngredientField/IngredientField";

export const FormIngredientsGroup = ({setRecipeIngredients}) => {
    const [ingredients, setIngredients] = useState([{
        id: 1,
        measurement: 0,
        units: 'tbsp',
        name: ''
    }]);

    const addIngredientField = (e) => {
        e.preventDefault();
        let id = (ingredients.length === 0 ? 1 : ingredients[ingredients.length - 1].id + 1);
        setIngredients(ingredients => [...ingredients, {
            id: id,
            measurement: 0,
            units: 'tbsp',
            name: ''
        }]);
    };

    const updateIngredient = (updatedIngredient) => {
        let newIngredients = [...ingredients];
        let targetIngredient = newIngredients.findIndex(ingredient => ingredient.id === updatedIngredient.id);

        newIngredients[targetIngredient] = updatedIngredient;

        setIngredients(newIngredients);
    };

    const removeIngredientField = (e, id) => {
        e.preventDefault();

        let newIngredients = [...ingredients];
        let targetIngredient = newIngredients.findIndex(ingredient => ingredient.id === id);

        newIngredients.splice(targetIngredient, 1);
        setIngredients(newIngredients);
    };

    useEffect(() => {
        let sendIngredients = ingredients.map(ingredient => {
            return {
                measurement: parseInt(ingredient.measurement, 10),
                units: ingredient.units,
                name: ingredient.name
            }
        });

        setRecipeIngredients(sendIngredients);
    }, [ingredients]);

    return (
        <div className="ingredientGroup">
            <label>Ingredients</label>
            {ingredients && ingredients.map(ingredient => {
                return (
                    <div key={ingredient.id} className="ingredientField">
                        <IngredientField id={ingredient.id} measurement={ingredient.measurement} units={ingredient.units} name={ingredient.name} updateIngredient={updateIngredient} />
                        <button onClick={(e) => removeIngredientField(e, ingredient.id)}>X</button>
                    </div>
                )
            })}
            <button onClick={(e) => addIngredientField(e)}>Add Ingredient</button>
        </div>
    );
}