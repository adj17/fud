import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Register from './components/Register';
import Adminprofile from './components/Adminprofile';
import Basic from './components/Home';
import Admin from './components/Admin';
import Tableu from './components/Viewu';
import Userpage from './components/Userpage';
import Orderplace from './components/Orderplace';

import Usersearch from './components/Usersearch';
import Add from './components/Addfud';
import View from './components/Adminview';

import Signin from './components/Signin';
import Profile from './components/Profile';
import Order from './components/Order';

function App() {
  return (
    <div className="App">



  

 {/* home */}
     <Router>
      <Routes>
      <Route exact path="/" element={<Basic/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Signin" element={<Signin/>} />
         <Route exact path="/Userpage" element={<Userpage/>} />
         <Route path="/Usersearch" element={<Usersearch/>} />
      <Route path="/Adminprofile" element={ <Adminprofile/>} />
      <Route path="/Profile" element={ <Profile/>} />
      <Route path="/Orderplace" element={ <Orderplace/>} />
      <Route path="/Order" element={ <Order/>} />
        <Route exact path="/Admin" element={<Admin/>} />
        <Route path="/Adminview" element={<View/>} />

        <Route path="/Viewu" element={<Tableu/>} />
        
        <Route path="/Addfud" element={<Add/>} />
      </Routes>
    </Router>  
   

{/* admin */}

   {/* <Router>
      <Routes>
      <Route exact path="/" element={<Admin/>} />
      <Route path="/Adminview" element={<View/>} />
        <Route path="/Viewu" element={<Tableu/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Addjob" element={<Add/>} />
      </Routes>
    </Router>   */}

    {/* user */}
    {/* <Router>
      <Routes>
      <Route exact path="/" element={<Userpage/>} />
      <Route path="/Usersearch" element={<Usersearch/>} />
      <Route path="/Profile" element={ <Profile/>} />
      <Route path="/Apply" element={ <Apply/>} />
        <Route path="/Login" element={<Login/>} />
   
      </Routes>
    </Router>   */}
    </div>
  );
}

export default App;
