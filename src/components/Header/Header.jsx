import './Header.css';
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className='p-10 flex-row flex-between'>
        <h2>
          <Link to='/' >
              El-Boghdady
          </Link>
        </h2>

        <h1>E</h1>
    </header>
  )
}

export default Header;