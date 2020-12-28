import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route exact path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
