import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredients,healthLabels}) =>{
       
    return (  
        <div className={style.recipe}>
        <h1 className={style.title}>{title}</h1>
        <ol>

            <h2>Ingredients</h2>
            {ingredients.map(ingredient=>(
                <li>
                    {ingredient.text}
                </li>
            ))}
        </ol>
        <p className={style.p}>Calories:  {calories}</p>
        <img className={style.image} src = {image} alt=""/>
        <p>{healthLabels}</p>


        </div>
    
      
    );
    
}
 
export default Recipe ;