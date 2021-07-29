import './styles/App.sass'
import BannerSlider from './components/BannerSlider'
import bgImage2 from './styles/images/bg-2.jpg'
function App() {
  return (
    <div className="App" style={{
      background: `url(${bgImage2}) no-repeat center center fixed`
    }}>
      <BannerSlider />
    </div>
  );
}

export default App;
