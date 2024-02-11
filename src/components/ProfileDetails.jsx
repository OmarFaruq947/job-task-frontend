import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SocialLink from "./SocialLink";

const ProfileDetails = () => {
  const [singleProfile, setSingleProfile] = useState([]);
  const { id } = useParams();
  console.log("single data", singleProfile);

  useEffect(() => {
    fetch(`https://profile-grmy.onrender.com/profile?id=${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data); 
        setSingleProfile(data[0]);
      });
  }, [id]);

  return (
    <div className="flex justify-center gap-5 py-10">
   
      <section className="rounded-lg bg-gray-50 dark:bg-[#1B2937] shadow-sm p-7 sm:max-w-sm sm:p-4 sm:pb-12 h-[50%]">
        <img
          src={singleProfile?.Avatar}
          alt="..."
          className="rounded-lg sm:w-full object-cover sm:h-52"
        />
        <div>
          <div className="flex justify-between my-3">
            <div className="">
              <p className="font-semibold dark:text-[#CFD8D8]">
                {singleProfile?.firstName} {singleProfile?.lastName}
              </p>
              <p className="italic text-gray-500 dark:text-gray-400">{singleProfile?.email}</p>
            </div>
            <div className="">
              <p className="font-bold text-gray-50 bg-purple-700 dark:bg-[#6A7082] px-2 py-1 rounded-full">
                {singleProfile?.companyName}
              </p>
            </div>
          </div>
          <div className="md:hidden dark:text-[#CFD8D8]">
            <p className="">
              <span className="font-semibold ">Position:</span>{" "}
              {singleProfile?.position}
            </p>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {singleProfile?.address}{" "}
            </p>
          </div>
          <br />
          <p className="text-gray-600 font-semibold dark:text-[#CFD8D8]">{singleProfile?.intro}</p>
          <div className="flex gap-5 justify-center mt-5  sm:block md:hidden lg:hidden">
            <SocialLink />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-[#1B2937] hidden md:block relative max-w-2xl rounded-lg lg:justify-self-end">
        <div className=" items-center p-4">
          <img
            src={singleProfile?.banner}
            alt="..."
            className="rounded-t-lg w-full h-44 object-cover justify-self-center rounded-lg  "
          />
        </div>
        <div className="pb-7 px-10">
          <div className="flex justify-between my-3">
            <div className="">
              <p className="font-semibold dark:text-[#CFD8D8]">
                {" "}
                Details of{" "}
                <span className="font-bold">{singleProfile?.firstName}</span>
              </p>
              <p className="italic text-gray-500 dark:text-gray-400">{singleProfile?.email}</p>
            </div>
            <div className="">
              <p className="font-bold text-gray-50 dark:bg-[#6A7082] bg-purple-700 px-2 py-1 rounded-full ">
                {singleProfile?.companyName}
              </p>
            </div>
          </div>
          <p className="dark:text-[#CFD8D8]">
            <span className="font-semibold">Position:</span>{" "}
            {singleProfile?.position}
          </p>
          <p className="dark:text-[#CFD8D8]">
            <span className="font-semibold">Address:</span>{" "}
            {singleProfile?.address}{" "}
          </p>
          <br />

          <p className="text-gray-600 dark:text-[#CFD8D8]">
            <span className="text-4xl">
              {singleProfile?.description?.slice(0, 1)}
            </span>
            {singleProfile?.description?.slice(1)}
          </p>

          <div className="flex gap-5 justify-center mt-5 ">
            <SocialLink />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileDetails;
