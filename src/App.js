import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
