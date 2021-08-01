import './styles/App.sass'
import About from './components/About'
import BannerSlider from './components/BannerSlider'
function App() {
  return (
    <div className="App">
      <BannerSlider />
      <About />
    </div>
  );
}

export default App;
