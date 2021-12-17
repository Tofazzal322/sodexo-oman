// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/pages/Login/Login';
import Home from './component/pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/joinUs" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        {/* <Route path="/login" element={<Login></Login>}></Route>   */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
