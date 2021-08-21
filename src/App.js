import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.sass'
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portofolio from './components/Portofolio';
import UnderConstruction from './components/UnderConstruction';
import ToggleSidebar from './components/ToggleSidebar';
import theLogo from './logo.svg'

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
          <Navbar logo={theLogo}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/#homeSection2" component={Home} />
            <Route path="/portofolio" component={Portofolio} />
          </Switch>
        </div>
        <Footer />
        <ToggleSidebar />
      </Router>
    )
  }
}

export default App;
