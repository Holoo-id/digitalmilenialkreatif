import BannerSlider from './BannerSlider'
import About from './About'
import Services from './Services'
import bgImage2 from '../styles/images/bg-2.jpg'
function Home() {
  return(
    <div className="homePage">
      <figure className="theBackground">
        <img src={bgImage2}/>
      </figure>
      <BannerSlider />
      <About />
      <Services />
    </div>
  )
}
export default Home