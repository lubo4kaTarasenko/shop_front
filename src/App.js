import './App.css';
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Profile from './components/profile';
import HomePage from './components/home';
import ShowProduct from './components/showProduct';
import Order from './components/order';

function App() {
  console.log('v0.0.8')
 
  return (
    <div id='main'>      
      <Router>
        <Header/>         
        <Switch>    
          <Route path="/order" component={Order}/>    
          <Route path="/profile" component={Profile}/>
          <Route path="/product/:url_name" component={ShowProduct} />   
          <Route path="/home" component={HomePage}/>
          <Route path="" component={HomePage}/>                          
        </Switch>              
      </Router>
    <Footer/>   

  </div>
  );
}

export default App;
