import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
// import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Main from './Components/Main';
// import Nav from './Components/Nav';
import General from './Components/General'
import Product from './Components/Product'
import Old from './Components/Old'
import Shipping from './Components/Shipping'
import Clients from './Components/Clients'
import Copones from './Components/Copones'
import Static from './Components/Static'
import Complain from './Components/Complain'
import Back from './Components/Back'
import SliderImg from './Components/SliderImg'
import NewBadr from './Components/NewBadr'
import School from './Components/School'
import University from './Components/University'
import Craft from './Components/Craft'
import Footer from './Components/Footer'
import Warrant from './Components/Warrant'
import Sub from'./Components/Sub'
import New from './Components/New'
import DetailsSchool from './Components/DetailsSchool';
import Stages from './Components/Stages';
import DetailsUniversity from './Components/DetailsUniversity';
import StagesUniversity from './Components/StagesUniversity';
import DetailsCraft from './Components/DetailsCraft';
import StagesCraft from './Components/StagesCraft';
import Test from './Components/Test';
import {
  AddMainProduct,
  ApiMainStemUrl,
  GetMainProducts,
  EditMainProduct,
  DeleteMainProduct,
  GetImg,
} from "./Services/MyVars";

const {
  GetInfo,
  EditInfo,
  AddInfo,
  DeleteInfo,
} = require("./Services/Services");



function App() {
  return (
    <div className="App">
       {/* <Login/> */}
       {/* <Nav/> */}

       <Router>
       <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/header" exact element={<Header />} />
          <Route path="/main" exact element={<Main />} />
          <Route path="/sub" exact element={<Sub/>} />
          <Route path="/general" exact element={<General />} />
          <Route path="/product" exact element={<Product />} />
          <Route path="/new" exact element={< New/>} />
          <Route path="/old" exact element={< Old/>} />
          <Route path="/shipping" exact element={< Shipping/>} />
          <Route path="/clients" exact element={< Clients/>} />
          <Route path="/copones" exact element={<Copones />} />
          <Route path="/static" exact element={<Static />} />
          <Route path="/complain" exact element={< Complain/>} />
          <Route path="/back" exact element={< Back/>} />
          <Route path="/slide" exact element={< SliderImg/>} />
          <Route path="/newbadr" exact element={<NewBadr />} />
          <Route path="/school" exact element={< School/>} />
          <Route path="/university" exact element={<University />} />
          <Route path="/craft" exact element={< Craft/>} />
          <Route path="/footer" exact element={< Footer/>} />
          <Route path="/warrant" exact element={< Warrant/>} />
          <Route path="/details" exact element={< DetailsSchool/>} />
          <Route path="/stages" exact element={< Stages/>} />
          <Route path="/udetails" exact element={< DetailsUniversity/>} />
          <Route path="/ustages" exact element={< StagesUniversity/>} />
          <Route path="/Cdetails" exact element={< DetailsCraft/>} />
          <Route path="/Cstages" exact element={< StagesCraft/>} />
          <Route path="/test" exact element={< Test/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
