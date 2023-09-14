import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GitHubUser from './components/Details';
import Profile from './components/Profile';
import UserCard from './components/UserCard';


function App() {
  return (
    <div className="App">
    <h1>Github Users</h1>
      <Router>
        <Switch>
          <Route exact path='/'  component={GitHubUser} /> 
          <Route path='/profile/:username' component={Profile} />
          <Route path='/userCard/:username' component={UserCard} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
