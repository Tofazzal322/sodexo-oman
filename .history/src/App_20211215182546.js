// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/pages/Login/Login';
import Home from './component/pages/Home/Home';
import JoinUs from './component/pages/Home/JoinUs';

function App() {
  return (
    <Auth
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/joinUs" element={<JoinUs></JoinUs>}></Route>
        {/* <Route path="/home" element={<Home></Home>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
