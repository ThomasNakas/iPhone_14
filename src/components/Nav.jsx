import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

// global navbar
function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <NavbarL />
      </div>
    </nav>
  );
}

export default Nav;

// navbar list
function NavbarL() {
  return (
    <ul className="list-styled">
      <li>
        <img src={Logo} alt="Apple logo" width="15px" height="44px" />
      </li>
      <li>
        <span src='#' className="link-styled">Store</span>
      </li>
      <li>
        <span src='#' className="link-styled">Mac</span>
      </li>
      <li>
        <span src='#' className="link-styled">iPad</span>
      </li>
      <li>
        <span src='#' className="link-styled">iPhone</span>
      </li>
      <li>
        <span src='#' className="link-styled">Watch</span>
      </li>
      <li>
        <span src='#' className="link-styled">AirPods</span>
      </li>
      <li>
        <span src='#' className="link-styled">Tv & Home</span>
      </li>
      <li>
        <span src='#' className="link-styled">Entertainment</span>
      </li>
      <li>
        <span src='#' className="link-styled">Accessories</span>
      </li>
      <li>
        <span className="link-styled">Support</span>
      </li>
      <li>
        <img src={Search} alt="Search" width="15px" height="44px" />
      </li>
      <li>
        <img src={Store} alt="Store" height="44px" width="14px" />
      </li>
    </ul>
  );
}
