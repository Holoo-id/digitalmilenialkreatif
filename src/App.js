import './styles/App.sass'
import About from './components/About'
import BannerSlider from './components/BannerSlider'
import Navbar from './components/Navbar';
import Services from './components/Services';
import bgImage2 from './styles/images/bg-2.jpg'
import theLogo from './logo.svg'

function App() {
  return (
    <div className="App">
      <figure className="theBackground">
        <img src={bgImage2}/>
      </figure>
      <Navbar logo={theLogo}/>
      <BannerSlider />
      <About />
      <Services />
    </div>
  );
}

export default App;
