import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Navbar from './components/Navbar';

function App() {
  const {authIsReady, user} = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path='/'>
              {user ? <Home/> : <Redirect to='/login'/>}
            </Route>
            <Route path='/login'>
              {!user ? <Login/> : <Redirect to='/'/>}
            </Route>
            <Route path='/signup'>
              {!user ? <Signup/> : <Redirect to='/'/>}
            </Route>
            <Route path='*'>
              {!user ? <Login/> : <Redirect to='/'/>}
            </Route>
          </Switch>
        </BrowserRouter>
      )}

    </div>
  );
}

export default App
