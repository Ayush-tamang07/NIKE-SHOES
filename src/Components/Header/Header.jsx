import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  return (
    <header>
      <img
        className="nike"
        src="https://cdn.mos.cms.futurecdn.net/786NzPhpXo6G8hkutJkHTM-1200-80.jpg"
        alt="logo"
        width={58.9633}
      />
      <ul className="nav-links">
        <li><a href="#">New & Featured</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">Kids</a></li>
        <li><a href="#">Jordan</a></li>
      </ul>
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faHeart} className="cart-icon" />
        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
      </div>
    </header>
  );
}

export default Header;
