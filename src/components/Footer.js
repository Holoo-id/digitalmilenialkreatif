import { Link } from "react-router-dom"
import { AlternateEmail, Facebook, Instagram, LinkedIn, Pinterest, Room, Twitter, WhatsApp, YouTube } from '@material-ui/icons'

function Footer() {
  return(
    <footer className="footer">
      <div className="footerTop">
        <div className="footerTopColumn">
          <ul className="footerMenu">
            <li className="footerMenuItem">
              <Link to="/" className="footerMenuItem">Home</Link>
            </li>
            <li className="footerMenuItem">
              <Link to="/work" className="footerMenuItem">Work</Link>
            </li>
            <li className="footerMenuItem">
              <Link to="/contact" className="footerMenuItem">Contact</Link>
            </li>
            <li className="footerMenuItem">
              <Link to="/about" className="footerMenuItem">About</Link>
            </li>
          </ul>
          <ul className="footerMenu">
            <li className="footerMenuItem">Teknologi Informasi</li>
            <li className="footerMenuItem">Digital Marketing</li>
            <li className="footerMenuItem">Property</li>
            <li className="footerMenuItem">DMKademy</li>
          </ul>
          <ul className="footerMenu">
            <li className="footerMenuItemTitle">Portofolio</li>
          </ul>
        </div>
        <div className="footerTopColumn">
          <div className="footerInfo">
            <h4 className="footerInfoHeader">bandung</h4>
            <p className="footerInfoText">Jl. Gegerkalong Tonggoh Raya No.6, Gegerkalong, Kec. Sukasari, Kota Bandung, Jawa Barat 40153</p>
            <div className="footerContactWrap">
              <a href="" className="footerContactAlt">
                <Room fontSize={'large'}/>
                <p className="button white">google maps</p> 
              </a>
            </div>
          </div>
          <div className="footerInfo">
            <h4 className="footerInfoHeader">for bussiness inquiries</h4>
            <p className="footerInfoText">info@digitalmilenialkreatif.com</p>
            <p className="footerInfoText">+62 xxx-xxxx-xxxx</p>
            <div className="footerContactWrap">
              <a href="" className="footerContact">
                <AlternateEmail fontSize={'large'} />
                <p className="button white">email</p> 
              </a>
              <a href="" className="footerContact">
                <WhatsApp fontSize={'large'} />
                <p className="button white">whatsapp</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="socialIconsWrap">
          <a href="" className="socialIcon"><Facebook /></a>
          <a href="" className="socialIcon"><Instagram /></a>
          <a href="" className="socialIcon"><LinkedIn /></a>
          <a href="" className="socialIcon"><Pinterest /></a>
          <a href="" className="socialIcon"><Twitter /></a>
          <a href="" className="socialIcon"><YouTube /></a>
        </div>
        <p className="copyright">2021 Digital milenial kreatif. All rights reserved</p>
      </div>
    </footer>
  )
}
export default Footer