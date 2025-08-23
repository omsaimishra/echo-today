import Bookstore from "./Bookstore/Bookstore"
import Home from "./Home/Home"
import Navbar from "./Navbar/Navbar"
import News from "./News/News"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <News/>
      <Bookstore/>
    </div>
  )
}

export default App
