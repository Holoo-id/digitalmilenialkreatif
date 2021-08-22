import { AlternateEmail, Facebook, Instagram, LinkedIn, Pinterest, Room, Twitter, WhatsApp, YouTube } from '@material-ui/icons'
function Contact() {
  return(
    <div className="contactPage">
      <img src="./images/custom_hr.png" className="customHr"/>
      <h2 className="pageTitle" style={{
            margin: '1em'
          }}>contact</h2>
      <h4 className="judul">Contact us to find out more or how we can help you better.</h4>
      <div className="infoWrap">
        <div className="contactInfo">
          <div className="info">
            <h4 className="head">bandung</h4>
            <p>Jl. Gegerkalong Tonggoh Raya No.6, Gegerkalong, Kec. Sukasari, Kota Bandung, Jawa Barat 40153</p>
          </div>
          <div className="info">
            <h4 className="head">for bussiness inquiries</h4>
            <p>info@digitalmilenialkreatif.com</p>
            <p>+62 xxx-xxxx-xxxx</p>
            <div className="infoContactWrap">
              <a href="" className="infoContact">
                <AlternateEmail fontSize={'large'} />
                <p className="button purple">email</p> 
              </a>
              <a href="" className="infoContact">
                <WhatsApp fontSize={'large'} />
                <p className="button purple">whatsapp</p>
              </a>
            </div>
          </div>
          <div className="customMaps">
            <iframe src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Jl.%20Gegerkalong%20Tonggoh%20Raya%20No.6,%20Gegerkalong,%20Kec.%20Sukasari,%20Kota%20Bandung,%20Jawa%20Barat%2040153+(Digital%20Milenial%20Kreatif)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            {/* <a href="https://www.maps.ie/draw-radius-circle-map/">Easy radius map</a> */}
          </div>
        </div>
        <div className="contactForm">
          <form method="post">
            <div className="formGroup">
              <label className="formLabel">Name*</label>
              <input type="text" className="formInput" placeholder="|"/>
            </div>
            <div className="formGroup">
              <label className="formLabel">Phone*</label>
              <input type="tel" className="formInput" placeholder="|"/>
            </div>
            <div className="formGroup">
              <label className="formLabel">Email*</label>
              <input type="email" className="formInput" placeholder="|"/>
            </div>
            <div className="formGroup">
              <label className="formLabel">Your Message*</label>
              <textarea type="email" className="formInput" placeholder="|" rows="7"></textarea>
            </div>
            <div className="formGroup">
              <input type="submit" className="button purple" value="Submit" style={{
                width: '100%'
              }}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact