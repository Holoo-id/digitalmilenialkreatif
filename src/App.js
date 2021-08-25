import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.sass'
import About from './components/page/About';
import Footer from './components/Footer';
import UnderConstruction from './components/UnderConstruction';
import ToggleSidebar from './components/ToggleSidebar';
import Contact from './components/page/Contact';
import Work from './components/page/work_page/Work';

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
          {/* <Switch>
            <Route exact path="/" component={Work} />
            <Route exact path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch> */}
          <Footer />
          <ToggleSidebar />
        </div>
      </Router>
    )
  }
}

export default App;
