import { Link } from "react-router-dom"

function Navbar(props) {
  return(
    <nav className="navbar">
      <Link to="/" className="navBrand">
        <img className="navLogo" src={props.logo}/>
        <div className="navBrandText">digital muda kreatif</div>
      </Link>
      <ul className="navMenu">
        <Link to="/portofolio" className="navMenuItem">portofolio</Link>
        <Link to="/#homeSection2" className="navMenuItem">about</Link>
        <a href="" className="navMenuItem">contact</a>
      </ul>
    </nav>
  )
}
export default Navbar