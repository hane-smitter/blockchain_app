import React from 'react';
import { BrowserRouter as Router, Routes,Switch, Route, Link} from "react-router-dom";

/**
 * Include Components
 * - - - - - - - - - - - - 
 */

import Header from './Components/Header';
import Footer from './Components/Footer';

/**
 * Pages Components
 * - - - - - - - - - - - - 
 */
import LandingHome from './Pages/LandingHome';
import AdminLogin from './Pages/AdminLogin';
import Citizen from './Pages/Citizen';
import TrafficLogin from './Pages/TrafficLogin';
import WeaponLogin from './Pages/WeaponLogin';
import EducationLogin from './Pages/EducationLogin';

import Home from './Pages/Home';

//Hospital Page
import HostpitalAdd from './Pages/Hostpital/HostpitalAdd';
import HostpitalIndex from './Pages/Hostpital/HostpitalIndex';
import UnionLogin from './Pages/UnionLogin';
import UnionCouncil from './Pages/UnionCounci';
import WeaponLisence from './Pages/WeaponLisence';
import Educations from './Pages/Educations';
import TrafficChallan from './Pages/TrafficChallan';
import CriminalRecord from './Pages/CriminalRecord';
import CriminalLogin from './Pages/CriminalLogin';
import UnionDashboard from './Pages/UnionDashboard';
import ShowUnionCouncil from './Pages/ShowUnionCouncil';
import WeaponDashboard from "./Pages/WeaponDashboard";
import ShowWeapon from './Pages/ShowWeapon';
import ShowEducation from './Pages/ShowEducation';
import EducationDashboard from './Pages/EdocationDashboard';
import ChallanDashboard from './Pages/ChallanDashboard';
import ShowChallan from './Pages/ShowChallan';
import ShowCriminal from './Pages/ShowCriminal';
import CriminalDashboard from './Pages/CriminalDashbord';
import MarriageLogin from './Pages/MarriageLogin';
import MarriageRecord from './Pages/MerriageRecord';
//Traffic Page
//import TrafficAdd from './Pages/Traffic/TrafficAdd';
//import TrafficIndex from './Pages/Traffic/TrafficIndex';
import { GlobalProvider } from './context/GlobalState';
export default class App extends React.Component
{
  render()
  {
    return (
      <GlobalProvider>
      <Router>
            <Routes>
            {/* <Route exact path="/" element={<LandingHome/>} /> */}
            <Route exact path="/" element={<Home/>} />
            <Route path="/admin-login" element={<AdminLogin />}>
              
            </Route>
            <Route path="/citizen" element={<Citizen />}>
              
            </Route>
            <Route path="/traffic-login" element={<TrafficLogin />}>
              
            </Route>
            <Route path="/weapon-login" element={ <WeaponLogin />}>
             
            </Route>
            <Route path="/show-weapon" element={ <ShowWeapon/>}>
             
             </Route>
            <Route path="/weapon-dashboard" element={ <WeaponDashboard/>}>
             
             </Route>
            <Route path="/education-login" element={  <EducationLogin />}>
            
            </Route>
            <Route path="/show-education" element={  <ShowEducation/>}>
           
            </Route>
            
            <Route path="/education-dashboard" element={  <EducationDashboard/>}>
            
            </Route>
            {/* <Route path="/dashboard" element={<Home />}>
              
            </Route> */}
            <Route path="/hospital-add" element={ <HostpitalAdd />}>
             
            </Route>
            <Route path="/hospital-index" element={<HostpitalIndex />}>
              
            </Route>
            <Route path="/union-login" element={<UnionLogin />}>
              
            </Route>
           
            
            <Route path="/union-council" element={<UnionCouncil />}>
              
            </Route>
            
            <Route path="/show-unoin" element={<ShowUnionCouncil/>}>
              
            </Route>
            <Route path="/union-dashboard" element={<UnionDashboard/>}>
              
            </Route>
            <Route path="/weapon-Lisence" element={<WeaponLisence />}>
              
              </Route>
              <Route path="/education" element={<Educations />}>
              
              </Route>
              <Route path="/challan" element={<TrafficChallan />}>
              
              </Route>
              <Route path="/challan-dashboard" element={<ChallanDashboard/>}>
              
              </Route>
              <Route path="/show-challan" element={<ShowChallan/>}>
              
              </Route>
              <Route path="/criminal" element={<CriminalRecord />}>
              
              </Route>
              
              <Route path="/criminal-login" element={<CriminalLogin />}>
              
              </Route>
              <Route path="/show-criminal" element={<ShowCriminal />}>
              
              </Route>
              <Route path="/criminal-dashboard" element={<CriminalDashboard />}>
              
              </Route>
              <Route path="/marriage-login" element={<MarriageLogin />}>
              
              </Route>
              <Route path="/marriage" element={<MarriageRecord/>}>
              
              </Route>
           
          </Routes>
      </Router>
      </GlobalProvider>
    );
  }
}