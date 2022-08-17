import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"


function Search() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const submitSearch = (e) => {
    e.preventDefault()
    console.log(search)
    navigate(`/searched/${search}`)
  } 
  return (
   <Form onSubmit={submitSearch}>
    <div>
        <FaSearch />
    <input onChange={(e) => setSearch(e.target.value) } type="text" value={search} />

    </div>

   </Form>
  )
}
const Form = styled.form`
margin:1rem 0;
div{
    width:100%;
    position:relative;
}
  input{
    border:none;
    background:linear-gradient(35deg, #494949,#313131);
    font-size:1.5rem;
    color:white;
    padding:1rem 3rem;
    border:none;
    border-radius:1rem;
    outline:none;
    width:100%;
  }
  svg{
    position: absolute;
    top: 50%;
    left:0%;
    transform: translate(100%,-50%);
    color:white;
  }

`

export default Search