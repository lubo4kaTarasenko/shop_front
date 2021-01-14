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
import HomePage from './components/home';
import ShowProduct from './components/showProduct';


function App() {

  return (
    <div id='main'>     
      <Router>
        <Header/>     
        <Switch>
          <Route path="/sign_up" component={SignUp}/>           
          <Route path="/log_in" component={LogIn} />           
          <Route path="/profile" component={Profile}/>
          <Route path="/product/:url_name" component={ShowProduct} />   
          <Route path="/home" component={HomePage}/>
          <Route path="" component={HomePage}/>                          
        </Switch>      
    </Router>

  </div>
  );
}

export default App;
