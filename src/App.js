import React from "react";
import LandingPage from "./screens/landingPage/landingPage";
import { Routes, Route } from "react-router-dom";

import WorkShops from "./screens/Workshops/Workshops";
// import UserDashboard from "./screens/UserDashboard/UserDashboard";
import Loader from "./components/Loader/loader";
import Error from "./components/Error/Error";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import Login from "./components/Auth/Login/Login";

import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";

import EmailVerify from "./components/Auth/EmailVerify/EmailVerify";
import authContext from "./components/Auth/Auth";

import FAQ from "./components/FAQ/Faq";

import AboutUs from "./screens/AboutUs/AboutUs";
import UserDashBoard from "./screens/UserDashboard/UserDashboard";
import Payment from "./components/Payment/Payment"
import NavBar from "./components/navbar/Navbar";

import Footer from "./components/Footer/Footer";

import Domains from "./screens/Domains/Domains";
import EventDisplayer from "./components/eventDisplayer/EventDisplayer";
import Sponsors from "./components/sponsor/Sponsor";
import Arambh from "./components/Aarambh/Arambh";
import Events from "./components/eventDisplayer/Events";
import OurTeam from "./components/OurTeam/OurTeam";

import domainData from "./utils/domains";
import eventsData from "./utils/events";
import Gallery from "./components/gallery/Gallery";
import TeamTable from "./screens/UserDashboard/TeamTable";

import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "@mui/material";


function App() {

  const isMobile = useMediaQuery("(min-width:450px)");

  
  return (
    <>
      <NavBar />
      {/* <Universe/> */}
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Error />} />
          {!authContext.isUserLoggedIn && (
            <Route path="/sign-in" element={<SignIn />} />
          )}
          {!authContext.isUserLoggedIn && (
            <Route path="/sign-up" element={<SignUp />} />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify" element={<EmailVerify />} />
          {!authContext.isUserLoggedIn && (
            <Route path="/user-dashboard" element={<UserDashBoard />} />
          )}
          {!authContext.isUserLoggedIn && (
            <Route path="/team" element={<TeamTable />} />
          )}
          {!authContext.isUserLoggedIn && (
            <Route path="/payment" element={<Payment />} />
          )}
          {/* {!authContext.isUserLoggedIn && (
            <Route path="/register" element={<RegisterEvent />} />
          )} */}
          {/* <Route path="/add-team" element={<AddTeam />} />
        <Route path="/team" element={<Team />} /> */}

          <Route path="/sponsor" element={<Sponsors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ourteam" element={<OurTeam />} />
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          <Route path="/workshops" element={<WorkShops />} />
          <Route path="/domains" element={<Domains domains={domainData} />} />
          <Route
            path="/domains/:domainId"
            element={<Events domains={domainData} />}
          />
          {/* <Route
            path="/domains/:domainId/events/:eventId"
            element={<EventDisplayer events={eventsData} />}
          /> */}

          <Route path="/faq" element={<FAQ />} />
          {/* <Route path="/ca" element={<CA />} /> */}
          {/* <Route path="/aarambh" element={<Arambh />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
