import { useState } from 'react';
import logo from '../assets/logo.png'; 
import './Navbar.css'
const Navbar = () => {
  const [activelink,setactivelink] = useState('');
  return (
    <div className="container">
   <div className="row shadow-sm py-2 d-block mx-auto sticky-top" id='row-nav'>
    <div className="col">
        <nav className=" nav" id='nav'>
       <div className=" col-lg-2 col-12 d-block text-center" >
     <img src={logo} alt="" className='img img-fluid py-2 rounded-2' id='logo'/>
       </div>
       <div className="col-12 col-lg-6">
        <ul className='nav py-2 justify-content-center flex-wrap '>
          <li className=' nav-item'><a href="" className={` text-dark nav-link ${activelink=== 'home'?'active-link':""}`} onClick={()=>setactivelink('home')}>Home</a></li>
          <li className='nav-item'><a href="" className={`text-dark nav-link ${activelink=== 'news'?'active-link':""}`} onClick={()=>setactivelink('news')}>News</a></li>
          <li className=' nav-item'><a href="" className={`text-dark nav-link ${activelink=== 'history'?'active-link':""}`} onClick={()=>setactivelink('history')}>History</a></li>
          <li className=' nav-item'><a href="" className={`text-dark nav-link ${activelink=== 'books'?'active-link':""}`} onClick={()=>setactivelink('books')}>Books</a></li>
          <li className=' nav-item'><a href="" className={`text-dark nav-link ${activelink=== 'contact'?'active-link':""}`} onClick={()=>setactivelink('contact')}>Contact</a></li>
        </ul>
       </div>
       <div className=" col-lg-4 col-12">
    <form action="" className="w-100 py-2">
  <div className="input-group">
    <input
      type="text"
      className="form-control shadow-sm mx-2"
      id="input-1"
      placeholder="Search here"
      aria-label="Search"
    />
    <button type="submit" className="btn " id='btn-nav'>
      Enter
    </button>
  </div>
</form>

       </div>
        </nav>
    
    </div>
   </div>
    </div>
  )
}

export default Navbar
