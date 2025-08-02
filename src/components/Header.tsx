import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <>
      <header>
        <Link reloadDocument to={'/'}>
        <h1>Heokid</h1>
        </Link>
      
        
      </header>
    </>
  )
}

export default Header
