import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";

const App = () => {
  return (
      <div className="dark:bg-[#0E1827]">
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="profileDetails/:id" element={<ProfileDetails />} />
        </Routes>
        <Footer />
      </div>
  
  );
};

export default App;
