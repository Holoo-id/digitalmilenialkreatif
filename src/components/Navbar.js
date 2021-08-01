function Navbar(props) {
  return(
    <nav className="navbar">
      <div className="navBrand">
        <img className="navLogo" src={props.logo}/>
        <div className="navBrandText">digital muda kreatif</div>
      </div>
      <ul className="navMenu">
        <a href="" className="navMenuItem">portofolio</a>
        <a href="" className="navMenuItem">about</a>
        <a href="" className="navMenuItem">contact</a>
      </ul>
    </nav>
  )
}
export default Navbar