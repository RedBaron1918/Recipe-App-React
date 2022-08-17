import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

function Searched() {
    const { search } = useParams();
    const [searchRecipes, setSearchRecipes] = useState('')

    const getSearch = async (name) => {
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const data = await res.json();
        setSearchRecipes(data.results);
        
    }
    useEffect(() => {
        getSearch(search)
        console.log(searchRecipes)
    } , [search])

  return (
    <div className='CategoryStyle'>
        {searchRecipes ? (searchRecipes.map((recipe)=>{
            return(
                <div key={recipe.id}> 
                    <Link to={`/recipe/${recipe.id}`}>
                    <img src={recipe.image} alt={recipe.title} />
                    <h4>{recipe.title}</h4>
                    </Link>
                </div>
            )
        })) : (<h2>loading...</h2>)}
    </div>
  )
}

export default Searched