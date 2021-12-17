import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/pages/Login/Login";
import Home from "./component/pages/Home/Home";
import JoinUs from "./component/pages/Home/JoinUs";
import AuthProvider from "./Context/AuthProvider";
import Header from "./component/shared/Header";
import Register from "./component/pages/Register/Register";
import Footer from "./component/shared/Footer";
import PrivateRoute from "./component/pages/Login/PrivateRoute";
import Insights from "./component/pages/InspiredThinking/Insights";
import Dashboard from "./component/pages/Dashboard/Dashboard";
import AdminDashboard from "./component/pages/Dashboard/AdminDashboard";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/joinUs" element={<JoinUs></JoinUs>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route
          path="/insights"
          element={
            <PrivateRoute>
              <AdminDashboard></Insights>
            </PrivateRoute>
          }
        />
            <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }
        />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
