import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";

const App = () => {
  return (
      <div className="">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="profileDetails/:id" element={<ProfileDetails />} />
        </Routes>
      </div>
  
  );
};

export default App;
