import Pages from "./pages/Pages"
import Category from "./components/Category"
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search"
function App() {
  return (
    <div className="check">
       <BrowserRouter>
       
       <Category/>
       <Search/>
        <Pages />
        </BrowserRouter>
    </div>
  )
}

export default App