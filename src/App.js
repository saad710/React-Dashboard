import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Component/HomePage';
import NoMatch from './Component/NoMatch';
import ChatMessage from './Component/ChatMessage';

import EventCalendar from './Component/EventCalendar';

function App() {
  return (
    <Router>
      <Switch>
      <Route path = "/home">
        <HomePage/>
      </Route>
      <Route path = "/chat">
        <ChatMessage/>
      </Route>
      <Route path = "/event">
        <EventCalendar/>
      </Route>
     
      <Route exact path = "/">
        <HomePage/>
      </Route>
      <Route path = "*">
        <NoMatch/>
      </Route>
      </Switch>
     </Router>
  );
}

export default App;
