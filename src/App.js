import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.sass'
import About from './components/page/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portofolio from './components/Portofolio';
import UnderConstruction from './components/UnderConstruction';
import ToggleSidebar from './components/ToggleSidebar';
import theLogo from './logo.svg'
import Contact from './components/page/Contact';

function App() {
  const constStatus = false
  if (constStatus) {
    return(
      <div className="App">
        <UnderConstruction />
      </div>
    )
  } else {
    return (
      <Router>
        <div className="App">
          {/* <Navbar logo={theLogo}/> */}
          <Switch>
            <Route exact path="/" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route path="/portofolio" component={Portofolio} />
          </Switch>
          <Footer />
          <ToggleSidebar />
        </div>
      </Router>
    )
  }
}

export default App;
