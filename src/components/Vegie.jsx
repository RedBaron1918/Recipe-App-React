import { useEffect, useState } from "react";
import { Splide,SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setveggie] = useState([]);
  
  useEffect(() => {
    getveggie();
    
  },[])

  const getveggie = async () => {
    const check = localStorage.getItem("veggie");

    if(check){
      setveggie(JSON.parse(check));
    }else{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=7&tags=vegetarian`);
    const data = await api.json();
    localStorage.setItem("veggie", JSON.stringify(data.recipes));
    setveggie(data.recipes);
    }
    
  }
            

  return (
    <div>
        <div className="Wrapper" >
          <h3>Vegetarian Dishes</h3>
          <Splide options={{
              perPage: 3,
              arrows:false,
              pagination: false,
              drag:'free',
              gap:"3rem",
           
          }}>
            {veggie ? (veggie.map(recipe => (
              <SplideSlide key={recipe.id}>
                <div className="Card" >
                  <Link to={`/recipe/${recipe.id}`}>
                  <div className="para">
                  <p>{recipe.title.slice(0,10)}...</p>
                  </div>
                <img src={recipe.image} alt={recipe.title} />
                </Link>
                </div>
              </SplideSlide>
            ))) : (<h2>Loading...</h2>)}
          </Splide>
          
        </div>
      
    </div>
    
  )
}

export default Veggie