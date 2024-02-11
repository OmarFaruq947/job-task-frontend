import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  const [profileData, setProfileData] = useState([]);
 console.log("data", profileData);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_ProfileUrl}profile`)
      .then((res) => {
        return res?.json();
      })
      .then((data) => {
       
        setProfileData(data);
      });
  }, []);

  
  return (
    <div className="mx-[5%]">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
     {
      profileData?.map(profile=>  <ProfileCard key={profile?.id} profile={profile} />)
     }   
      </div>
    </div>
  );
};

export default Profile;
