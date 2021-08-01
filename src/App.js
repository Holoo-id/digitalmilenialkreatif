import './styles/App.sass'
import About from './components/About'
import BannerSlider from './components/BannerSlider'
import Navbar from './components/Navbar';
import theLogo from './logo.svg'
import bgImage2 from './styles/images/bg-2.jpg'
function App() {
  return (
    <div className="App">
      <figure className="theBackground"><img src={bgImage2}/></figure>
      <Navbar logo={theLogo}/>
      <BannerSlider />
      <About />
    </div>
  );
}

export default App;
