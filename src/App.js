import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.scss';

// Screen
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screen/Home'
import Hometwo from './screen/Hometwo'
  
function App() {
  return (
    <div className="App flex flex-col">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/home-two' component={Hometwo} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
