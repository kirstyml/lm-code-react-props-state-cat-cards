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
        <form className="form" onSubmit={(event) => handleSubmit(event)}>
            <fieldset className="form__fieldset">
                <legend className="form__label">Choose Cat or Dog:</legend>
                <input className="form__radio" name="type" type="radio" value="cat" onChange={(event) => setTypeInputValue(event.target.value)} checked />
                <label className="form__label" htmlFor="cat">Cat</label>
                <input className="form__radio" name="type" type="radio" value="dog" onChange={(event) => setTypeInputValue(event.target.value)} />
                <label className="form__label" htmlFor="dog">Dog</label>
            </fieldset>
            <label className="form__label" htmlFor="name">Name:</label>
            <input className="form__input" value={nameInputValue} name="cheese" type="text" onChange={(event) => setNameInputValue(event.target.value)} />
            <label className="form__label" htmlFor="species">Species:</label>
            <input className="form__input" value={speciesInputValue} name="species" type="text" onChange={(event) => setSpeciesInputValue(event.target.value)} />
            <label className="form__label" htmlFor="foods">Favourite foods:</label>
            <input className="form__input" value={foodsInputValue} name="foods" type="text" onChange={(event) => setFoodsInputValue(event.target.value)} />
            <label className="form__label" htmlFor="birthYear">Birth year:</label>
            <input className="form__input" value={birthYearInputValue} name="birthYear" type="text" onChange={(event) => setBirthYearInputValue(event.target.value)} />
            <input className="form__input" type="submit" value="Add animal!" />
        </form>
    )
};

export default AddAnimalForm;


