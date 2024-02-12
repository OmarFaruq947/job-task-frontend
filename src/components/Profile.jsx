import { InlineIcon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";



const Profile = () => {

const [searchTerm, setSearchTerm] = useState("");
const [profileData, setProfileData] = useState([]);
console.log("main data->",profileData);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProfileData(data?.users);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  fetchData();
}, [searchTerm]);

  return (
    <div className="mx-[5%] my-[5%]">
      {/* search  */}
      <div className="flex justify-center pb-3">
        <div className="inline-flex border rounded w-[70%] md:w-[40%]   h-10 bg-transparent">
          <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
            <div className="flex bg-gray-400">
              <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm ">
                <InlineIcon
                  icon="bi:search"
                  style={{ color: "#fff", fontSize: "15px" }}
                />
              </span>
            </div>
            <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }} 
              type="text"
              className="flex-shrink flex-grow flex-auto leading-normal  w-px border border-none border-l-0 rounded rounded-l-none px-3 relative  text-gray-500 dark:text-gary-50 font-thin dark:bg-gray-200"
              placeholder={`Search Email / Name/ Company name of ${profileData.length} Data`}
            />
          </div>
        </div>
      </div>
      {/* search end */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {profileData
          ?.filter((value) => {
            if (searchTerm == "") {
              return value;
            } else if (
              value.firstName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          ?.map((profile) => (
            <ProfileCard key={profile?.id} profile={profile}/>
          ))}
      </div>
    </div>
  );
};

export default Profile;
