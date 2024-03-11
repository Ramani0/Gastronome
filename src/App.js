import {BrowserRouter as Router,Routes,Route,Navigate,} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Next from "./Components/next";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Nextb from "./Components/Nextb";
import Nextc from "./Components/Nextc";
import Nave from "./Components/Nave";
import Nextx from "./Components/Nextx";
import Nexty from "./Components/Nexty";
import Nextz from "./Components/Nextz";
import Order from "./Components/Order";

import Adminlog from "./Components/Adminlog";
import Adminedit from "./Components/Adminedit";
import Adminpa from "./Components/Adminpa";
import Adminpa1 from "./Components/Adminpa1";
import Admindel from "./Components/Admindel";
import Emailfm from "./Components/Emailfm";
import Login2 from "./Components/Login2";









function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Next" element={<Next />}/>
        <Route exact path="/Login" element={<Login />}/>
        <Route exact path="/Footer" element={<Footer />}/>
        <Route exact path="Signup" element={<Signup />} />
        <Route exact path="Nextb" element={<Nextb />} />
        <Route exact path="Nextc" element={<Nextc />} />
        <Route exact path="Nextx" element={<Nextx />} />
        <Route exact path="Nexty" element={<Nexty />} />
        <Route exact path="Nextz" element={<Nextz />} />
        <Route exact path="Order" element={<Order />} />
        <Route exact path="Adminlog" element={<Adminlog />} />
        <Route exact path="Adminedit" element={<Adminedit />}/>
        <Route exact path="Adminpa" element={<Adminpa />}/>
        <Route exact path="Adminpa1" element={<Adminpa1 />}/>
        <Route exact path="Admindel" element={<Admindel />}/>
       <Route exact path="Emailfm" element={<Emailfm />} />
       <Route exact path="Login2" element={<Login2 />} />

        
        <Route exact path="Nave" element={<Nave />} />


        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </Router>


  );
}

export default App;
