import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.sass'
import About from './components/page/About';
import Contact from './components/page/Contact';
import DivisionTemplate from './components/page/DivisionTemplate';
import Home from './components/page/Home';
import UnderConstruction from './components/UnderConstruction';
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/tech" component={DivisionTemplate} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
