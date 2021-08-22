import BannerSlider from './BannerSlider'
import Services from './Services'
function Home() {
  return(
    <div className="homePage">
      <figure className="theBackground">
        <img src="./images/bg-2.jpg" alt="thebackground"/>
      </figure>
      <BannerSlider />
      <Services />
    </div>
  )
}
export default Home