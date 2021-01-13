import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header';
import SignUp from './components/signUp';
import LogIn from './components/logIn';
import Profile from './components/profile';
import Home from './components/home';


function App() {

  return (
    <div id='main'>     
      <Router>
        <Header/>     
        <Switch>
          <Route path="/sign_up" component={SignUp}/>           
          <Route path="/log_in" component={LogIn} />           
          <Route path="/profile" component={Profile}/>
          <Route path="/home" component={Home}/>
          <Route path="" component={Home}/>
        </Switch>      
    </Router>

  </div>
  );
}

export default App;
