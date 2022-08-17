import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';
import {Link,useParams} from 'react-router-dom'


function Cuisine() {
    
    const {cuisine} = useParams();
    const [cuisines, setCuisines] = useState([]);
    const getCuisine = async (name) => {
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const data = await res.json();
        setCuisines(data.results);
        
    }
    useEffect(() => {
        getCuisine(cuisine);
        console.log(cuisines)
    },[cuisine]);
  return (
    <div className='CategoryStyle'>
        {cuisines.map((recipe)=>{
            return(
                <div key={recipe.id}>
                    <Link to={`/recipe/${recipe.id}`}>
                    <img src={recipe.image} alt={recipe.title} />
                    <h4>{recipe.title}</h4>
                    </Link>
                    
                </div>
            )
        })}
    </div>
  )
}

export default Cuisine