import './App.css'
import { BrowserRouter, NavLink } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <nav className='navbar navbar-expand navbar-light bg-light'>
          <ul className='navbar-nav'>
            <li className="nav-item">
              <NavLink to='/' className='nav-link' > Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about' className='nav-link'> About </NavLink>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </>
  )
}

export default App
