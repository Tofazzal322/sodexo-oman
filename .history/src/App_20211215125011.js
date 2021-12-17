// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={<Login></Login>}></Route>
        <Route path={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
