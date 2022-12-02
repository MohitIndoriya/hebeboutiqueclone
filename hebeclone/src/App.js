import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Signup from './components/login/Signup';
import AllRoutes from './components/Routes/allRoutes';
import Navbar1 from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar1/>
     
     <AllRoutes/>
     
     
    </div>
  );
}

export default App;
