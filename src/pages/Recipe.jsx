import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components";


function Recipe() {
    const {name} = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');
    const Detail = async()=>{
        const res = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await res.json();
        setDetails(data);
    }
    useEffect(() => {
        Detail();
    } , [name]);
  return (
   <DetailWrapper>
    <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
    </div>
    <Info>
        <div>
          <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
         <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        </div>
   
     {activeTab === 'instructions' && (<div>
        <h4 dangerouslySetInnerHTML={{__html:details.summary}}></h4>
        <h4 dangerouslySetInnerHTML={{__html:details.instructions}}></h4>
     </div>)}
     {activeTab === 'ingredients' &&   (<ul>
        {details.extendedIngredients.map(ingredient => (
            <li key={ingredient.id}>{ingredient.original}</li>
        ))}
     </ul>)}
    </Info>

   </DetailWrapper>
            
     
       
    
  )
}
const DetailWrapper = styled.div`

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
.active{
    background:linear-gradient(35deg, #494949,#313131);
    color: white;
}
img{
    max-width:400px;
    border-radius:1rem;
    width:100%;
}
`


const Button = styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
font-weight:600;
margin-right:1rem;
margin-bottom:1rem;
curson:pointer;
`
const Info  = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:1rem;
margin-top:1rem;
margin-bottom:1rem;
`

export default Recipe