import React , {useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';
import { async } from 'q';

const App=()=> {

const App_ID = "aef2ead6"
const App_Key = "c7d25d5530984295c18fec9cd7bb6294"

   const [recipes , setRecipes] = useState([]);
   const [search , setSearch]   = useState("");
   const [query , setQuery]    = useState("garlic");
  useEffect(()=>{
    getRecepies();
  },[query]);

  const getRecepies = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}&from=0&to=3&calories=591-722&health=alcohol-free`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }
   const updateSearch = e => {
     setSearch(e.target.value);
   }

   const getSearch= e =>{
     e.preventDefault();
     setQuery(search);
     setSearch("");
        
   }

  return (
    <div className="App">
      <form  onSubmit={getSearch} className="search-form">
        <input className = "search-bar" type = "text" value = {search} onChange={updateSearch}/>
        <button className = "search-button" type = "submit">
        <i class="material-icons">search</i>
        </button>
        </form>
        <div className="recipes">
        {recipes.map(recipe => (
          <Recipe title = {recipe.recipe.label}
           calories = {recipe.recipe.calories}
            image = {recipe.recipe.image} 
            ingredients = {recipe.recipe.ingredients}
            healthLabels ={recipe.recipe.healthLabels}
            key = {recipe.recipe.label} 
            />
        ))}
        </div>
      </div>
  );
}

export default App;
