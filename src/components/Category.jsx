import {FaPizzaSlice,FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiBeerStein} from 'react-icons/gi';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

function Category() {
  return (
    <div className='Navigation'>
        <SLink to={'/cuisine/Italian'}>

            <FaPizzaSlice />
            <h4>Italian</h4>
        
        </SLink>

        <SLink to={'/cuisine/American'}>
        
            <FaHamburger />
            <h4>American</h4>
        
        </SLink>

        <SLink to={'/cuisine/Thai'}>
        
            <GiNoodles />
            <h4>Thai</h4>
        
        </SLink>

        <SLink to={'/cuisine/German'}>
        
            <GiBeerStein/>
            <h4>German</h4>
        
        </SLink>
    </div>
  )
}
const SLink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    margin-right:1rem;
   background:linear-gradient(35deg, #494949,#313131);
   width:6rem;
   height:6rem;
   cursor:pointer;
   transform:scale(0.8);
   padding:1rem;

   h4{
    color:white;
    font-size:0.8rem;

   }
   svg{
    color:white;
    font-size:1.5rem;
   }
   &.active{
    background:linear-gradient(to right, #f27121,#e94057);
    svg{
        color:white;
    }
    h4{
        color:white;
    }
   }
   &:hover{
    background:rgb(45,45,45);
   }

`


export default Category