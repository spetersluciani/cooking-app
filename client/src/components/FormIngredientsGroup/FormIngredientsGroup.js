import React, { useEffect, useState } from "react";
import { IngredientField } from "../IngredientField/IngredientField";

export const FormIngredientsGroup = () => {
    const [ingredients, setIngredients] = useState([{
        id: 1,
        amount: '',
        measurement: 'tbsp',
        name: ''
    }]);

    const updateIngredient = (updatedIngredient) => {
        let newIngredients = [...ingredients];
        let targetIngredient = newIngredients.findIndex(ingredient => ingredient.id === updatedIngredient.id);

        newIngredients[targetIngredient] = updatedIngredient;

        setIngredients(newIngredients);
    }

    const addIngredientField = (e) => {
        e.preventDefault();
        let id = ingredients[ingredients.length - 1].id + 1;
        setIngredients(ingredients => [...ingredients, {
            id: id,
            amount: '',
            measurement: 'tbsp',
            name: ''
        }]);
    }

    const removeIngredientField = (e, index) => {
        e.preventDefault();

        let array = [...ingredients];
        array.splice(index, 1);
        setIngredients(array);
    }

    return (
        <div className="ingredientGroup">
            {ingredients.map(ingredient => {
                return <IngredientField key={ingredient.id} id={ingredient.id} amount={ingredient.amount} measurement={ingredient.measurement} name={ingredient.name} removable={true} updateIngredient={updateIngredient} />
            })}
            <button onClick={(e) => addIngredientField(e)}>Add Ingredient</button>
        </div>
    )
}