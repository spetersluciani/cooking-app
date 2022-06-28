import React, { Fragment, useState } from "react";
import { Input } from "../Input/Input";
import { FormIngredientsGroup } from "../FormIngredientsGroup/FormIngredientsGroup";
import { FormInstructionsGroup } from "../FormInstructionsGroup/FormInstructionsGroup";
import { useNavigate } from "react-router-dom";

export const CreateRecipe = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [cooktime, setCooktime] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [recipeCategory, setRecipeCategory] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState([]);
    const [recipeInstructions, setRecipeInstructions] = useState([]);
    const [recipeYield, setRecipeYield] = useState('');


    const handleNewRecipe = (e) => {
        e.preventDefault();
        
        const newRecipe = {
            name: name ,
            cooktime: cooktime,
            prepTime: prepTime,
            recipeCategory: recipeCategory,
            recipeIngredients: recipeIngredients,
            recipeInstructions: recipeInstructions,
            recipeYield: recipeYield
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"recipe": newRecipe})
        };
        fetch('http://localhost:9000/api/recipe', requestOptions)
            .then(response => response.json())
            .then(data => {
                navigate(`../recipe/${data._id}`);
            });
    }

    return (
        <Fragment>
            <h1>Create Recipe</h1>
            <form onSubmit={handleNewRecipe}>
                <Input label={'Recipe Name'} type={'text'} inputName={'name'} value={name} onChange={(e) => setName(e.target.value)} />
                <Input label={'Preparation Time'} type={'text'} inputName={'prepTime'} value={prepTime} onChange={(e) => setPrepTime(e.target.value)} />
                <Input label={'Cooking Time'} type={'text'} inputName={'cooktime'} value={cooktime} onChange={(e) => setCooktime(e.target.value)} />
                <Input label={'Recipe Yield'} type={'text'} inputName={'recipeYield'} value={recipeYield} onChange={(e) => setRecipeYield(e.target.value)} />
                <Input label={'Recipe Category'} type={'text'} inputName={'recipeCategory'} value={recipeCategory} onChange={(e) => setRecipeCategory(e.target.value)} />
                <FormIngredientsGroup recipeIngredients={recipeIngredients} setRecipeIngredients={setRecipeIngredients} />
                <FormInstructionsGroup setRecipeInstructions={setRecipeInstructions} />
                <input type={'submit'} value={'Create Recipe'} />
            </form>
        </Fragment>
    );
}