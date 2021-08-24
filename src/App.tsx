import React, { useEffect } from 'react';
import { Header } from './components';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import { Home } from './page/Home';
import { dataAction } from './redux/actions/dataAction';
import { useDispatch } from 'react-redux';
import { Info } from './page/Info';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(dataAction())
  }, [])
  
  return (
    <div className="app">
     <div className="container">
      <Router>
      <Header/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/traders/:id' component={Info} exact/>
        </Switch>
      </Router>
     </div>
    </div>
  );
}

export default App;
