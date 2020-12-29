import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  // create a listener
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The user is', authUser);

      if (authUser) {
        // the uer is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

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
          <Route exact path='/payment'>
            <Header />
            <Payment />
          </Route>
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
