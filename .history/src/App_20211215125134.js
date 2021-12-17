// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/pages/Login/Login';
import Home from './component/pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={<Login></Login>}></Route>
        <Route path="/home" path={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;