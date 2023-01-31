import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Cat from './data/cat';
import Dog from './data/dog';
import CatCard from './components/cat_card';
import DogCard from './components/dog_card';
import catData from './data/cat-data';
import dogData from './data/dog-data';
import AddAnimalForm from './components/form';
import { v4 as uuidv4 } from 'uuid';


function App(): JSX.Element {

	// JavaScript/TypeScript code can be inserted here!
	const [cats, setCats] = useState<Array<Cat>>(catData);
	const [dogs, setDogs] = useState<Array<Dog>>(dogData);

	const catCount = cats.length;

	const dogCount = dogs.length;

	const addCat = (newCat: Cat) => {
		newCat.id = uuidv4();
		setCats([...cats, newCat]);
	}

	const addDog = (newDog: Dog) => {
		newDog.id = uuidv4();
		setDogs([...dogs, newDog]);
	}

	return (
		<>
			<Navbar />
			<Header catCount={catCount} dogCount={dogCount} />

			<main>
				<div className='cards__wrapper'>
					{cats.map((cat, index) => <CatCard
						key={cat.id}
						name={cat.name}
						species={cat.species}
						favFoods={cat.favFoods}
						birthYear={cat.birthYear}
						catIndex={index}
					/>)}
					{dogs.map((dog, index) => <DogCard
						key={dog.id}
						name={dog.name}
						species={dog.species}
						favFoods={dog.favFoods}
						birthYear={dog.birthYear}
						dogIndex={index}
					/>)}
				</div>
				<AddAnimalForm addCat={addCat} addDog={addDog} />
			</main>

			<Footer />
		</>
	);
}

export default App;
