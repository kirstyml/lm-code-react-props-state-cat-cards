import React, { useState } from "react";
import Cat from "../data/cat";
import Dog from "../data/dog";

interface AddAnimalFormProps {
    addCat: (cat: Cat) => void,
    addDog: (dog: Dog) => void
}

const AddAnimalForm : React.FC<AddAnimalFormProps> = ({ addCat, addDog }) => {
    const [ nameInputValue, setNameInputValue ] = useState<string>('');
    const [ speciesInputValue, setSpeciesInputValue ] = useState<string>('');
    const [ foodsInputValue, setFoodsInputValue ] = useState<string>('');
    const [ birthYearInputValue, setBirthYearInputValue ] = useState<string>('');
    const [ typeInputValue, setTypeInputValue ] = useState<string>('cat');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) : void => {
        console.log("handleSubmit!");
        const favFoods = foodsInputValue.split(",");
        const birthYear = parseInt(birthYearInputValue);
        if(typeInputValue === "cat") {
            addCat({ name: nameInputValue, species: speciesInputValue, favFoods: favFoods, birthYear: birthYear});
        }
        if(typeInputValue === "dog") {
            addDog({ name: nameInputValue, species: speciesInputValue, favFoods: favFoods, birthYear: birthYear});
        }
        event.preventDefault();
    }


    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <fieldset>
                <legend>Choose Cat or Dog:</legend>
                <input name="type" type="radio" value="cat" onChange={(event) => setTypeInputValue(event.target.value)} checked />
                <label htmlFor="cat">Cat</label>
                <input name="type" type="radio" value="dog" onChange={(event) => setTypeInputValue(event.target.value)} />
                <label htmlFor="dog">Dog</label>
            </fieldset>
            <label htmlFor="name">Name:</label>
            <input value={nameInputValue} name="cheese" type="text" onChange={(event) => setNameInputValue(event.target.value)} />
            <label htmlFor="species">Species:</label>
            <input value={speciesInputValue} name="species" type="text" onChange={(event) => setSpeciesInputValue(event.target.value)} />
            <label htmlFor="foods">Favourite foods:</label>
            <input value={foodsInputValue} name="foods" type="text" onChange={(event) => setFoodsInputValue(event.target.value)} />
            <label htmlFor="birthYear">Birth year:</label>
            <input value={birthYearInputValue} name="birthYear" type="text" onChange={(event) => setBirthYearInputValue(event.target.value)} />
            <input type="submit" value="Add animal!" />
        </form>
    )
};

export default AddAnimalForm;


