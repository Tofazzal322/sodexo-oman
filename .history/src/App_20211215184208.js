// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/pages/Login/Login';
import Home from './component/pages/Home/Home';
import JoinUs from './component/pages/Home/JoinUs';
import AuthProvider from './Context/AuthProvider';
import Header from './component/shared/Header';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/joinUs" element={<JoinUs></JoinUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>  
        <Route path="/login" element={<Login></Login>}></Route>  
      </Routes>
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
