import React, { useEffect, useState } from "react";

export const FormInstructionsGroup = ({setRecipeInstructions}) => {
    const [instructions, setInstructions] = useState([{
        id: 1,
        value: ''
    }]);

    const addInstructionField = (e) => {
        e.preventDefault();
        let id = (instructions.length === 0 ? 1 : instructions[instructions.length - 1].id + 1);
        setInstructions(instructions => [...instructions, {
            id: id,
            value: ''
        }]);
    };

    const updateInstructions = (id, updatedInstruction) => {
        let newInstructions = [...instructions];
        let targetInstruction = newInstructions.findIndex(instruction => instruction.id === id);

        newInstructions[targetInstruction].value = updatedInstruction;
        setInstructions(newInstructions);
    };

    const removeInstructionField = (e, id) => {
        e.preventDefault();

        let newInstructions = [...instructions];
        let targetInstruction = newInstructions.findIndex(instruction => instruction.id === id);

        newInstructions.splice(targetInstruction, 1);
        setInstructions(newInstructions);
    };

    useEffect(() => {
        let sendInstructions = instructions.map(instruction => {
            return instruction.value;
        });
        setRecipeInstructions(sendInstructions);
    }, [instructions]);

    return (
        <div className="instructionGroup">
            <label>Instructions</label>
            {instructions && instructions.map(instruction => {
                return(
                    <div key={instruction.id} className="instructionFirld">
                        <textarea rows={2} cols={70} value={instruction.value} onChange={(e) => updateInstructions(instruction.id, e.target.value)} required />
                        <button onClick={(e) => removeInstructionField(e, instruction.id)}>X</button>
                    </div>
                )
            })}
            <button onClick={(e) => addInstructionField(e)}>Add Instruction</button>
        </div>
    );
}