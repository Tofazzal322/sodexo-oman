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
import BenefitsRewards from "./component/pages/OurServices/BenefitsRewards";
import PersonalHomeServices from "./component/pages/OurServices/PersonalHomeServices";
import CaseStudies from "./component/pages/InspiredThinking/CaseStudies";
import Career from "./component/pages/Carrers/Career";
import FindJobs from "./component/pages/Carrers/FindJobs";
import AdminRoute from "./component/pages/Dashboard/AdminRoute";
import DashboardHome from "./component/pages/Dashboard/DashboardHome";

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
            <Route
              path="/foodServices"
              element={<FoodServices></FoodServices>}
            ></Route>
            <Route
              path="/propertyServices"
              element={<PropertyServices></PropertyServices>}
            ></Route>
            <Route
              path="/facilityManagement"
              element={<FacilityManagement></FacilityManagement>}
            ></Route>
            <Route
              path="/BenefitsRewards"
              element={<BenefitsRewards></BenefitsRewards>}
            ></Route>
            <Route
              path="/PersonalHomeServices"
              element={<PersonalHomeServices></PersonalHomeServices>}
            ></Route>
            <Route
              path="/CaseStudies"
              element={<CaseStudies></CaseStudies>}
            ></Route>
            <Route path="/Insights" element={<Insights></Insights>}></Route>
            <Route path="/Career" element={<Career></Career>}></Route>
            <Route path="/FindJobs" element={<FindJobs></FindJobs>}></Route>

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                 
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}>
              </Route>
              <Route
                path={`/dashboard/adminDashboard`}
                element={
                  <AdminRoute>
                    <AdminDashboard></AdminDashboard>
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/adminDashboard`}
                element={
                  <AdminRoute>
                    <AdminDashboard></AdminDashboard>
                  </AdminRoute>
                }
              ></Route>
            </Route>

            <Route
              path="/dashboard/register"
              element={<Register></Register>}
            ></Route>
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
