import { Link } from "react-router-dom"

function Navbar(props) {
  return(
    <nav className="navbar">
      <Link to="/" className="navBrand">
        <img className="navLogo" src="./images/dmk_putih.png"/>
        <div className="navBrandText">digital mileinial kreatif</div>
      </Link>
      <ul className="navMenu">
        <Link to="/work" className="navMenuItem">work</Link>
        <Link to="/contact" className="navMenuItem">contact</Link>
        <Link to="/about" className="navMenuItem">about</Link>
      </ul>
    </nav>
  )
}
export default Navbar