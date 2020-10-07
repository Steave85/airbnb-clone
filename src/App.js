import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {actionTypes} from './context/Reducer'
import { useStateValue } from './context/RoomProvider';
import {homeCards as home_cards, roomCards as room_cards, rooms} from './data'
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [{homeCards, roomCards}, dispatch] = useStateValue();
  
  useEffect(() => {
    dispatch({
      ...homeCards,
      type: actionTypes.SET_HOME_CARDS,
      homeCards: home_cards,
      roomCards: room_cards
    });
    dispatch({
      ...homeCards,
      type: actionTypes.SET_ROOMS,
      rooms,
    });
  },[homeCards, roomCards, dispatch])

  return (
    <div className="app">
      <Router>
          <Header />
          <Switch>
              <Route exact path="/"><HomePage /></Route>
              <Route path="/search"><SearchPage /></Route>
          </Switch>
          <Footer />
      </Router> 
    </div>
  );
}

export default App;
