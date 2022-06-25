import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch}from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Blogs from './pages/Blogs';
import WebArt from './pages/WebArt';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component ={Home}/>
        <Route export path='/menu' component ={Menu}/>
        <Route export path='/about' component ={About}/>
        <Route export path='/blogs' component ={Blogs}/>
        <Route export path='/webart' component ={WebArt}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
