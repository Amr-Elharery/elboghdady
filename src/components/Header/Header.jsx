import './Header.css';
import {Link} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import UserImage from "../UserImage/UserImage";

function Header() {
  return (
    <header className='p-10 flex-row flex-between bg-primary'>
        <h2 className={"hide-mobile"}>
          <Link to='/' className={"c-white"}>
              El-Boghdady
          </Link>
        </h2>

        <SearchBar />

        <UserImage />
    </header>
  )
}

export default Header;