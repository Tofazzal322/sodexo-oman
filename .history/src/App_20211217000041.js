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
import News from "./component/pages/InspiredThinking/News";
import FoodServices from "./component/pages/OurServices/FoodServices";
import PropertyServices from "./component/pages/OurServices/PropertyServices";
import Integrator from "./component/pages/OurServices/integrator";
import FacilityManagement from "./component/pages/OurServices/FacilityManagement";

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
            <Route path="/news" element={<News></News>}></Route>
            <Route path="/foodServices" element={<FoodServices></FoodServices>}></Route>
            <Route path="/propertyServices" element={<PropertyServices></PropertyServices>}></Route>
            {/* <Route path="/Integrator" element={<Integrator></Integrator>}></Route> */}
            <Route path="/facilityManagement" element={<FacilityManagement></FacilityManagement>}></Route>
            <Route path="/BenefitsRewards" element={<BenefitsRewards></BenefitsRewards>}></Route>
            <Route path="/propertyServices" element={<PropertyServices></PropertyServices>}></Route>
            <Route
              path="/adminDashboard"
              element={
                <PrivateRoute>
                  <AdminDashboard></AdminDashboard>
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
            <Route path="/dashboard/register" element={<Register></Register>}></Route>
            <Route path="/dashboard" element={<Register></Register>}></Route>
            <Route path="/dashboard" element={<Register></Register>}></Route>
            <Route path="/dashboard" element={<Register></Register>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
