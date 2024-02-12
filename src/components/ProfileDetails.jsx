import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SocialLink from "./SocialLink";

const ProfileDetails = () => {
  const [singleProfile, setSingleProfile] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleProfile = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSingleProfile(data);
      } catch (error) {
        console.error("Error fetching single profile:", error.message);
      }
    };

    fetchSingleProfile();
  }, [id]);

  //description and intro (only for beautify)
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit quibusdam, consequatur animi repudiandae inventore deserunt dicta! Doloribus, ipsa iusto explicabo quam vitae hic, non repellat eaque deserunt fuga ea.lorem consectetur adipisicing elit. Nesciunt odit quibusdam, consequatur animi repudiandae inventore deserunt dicta! Doloribus, ipsa iusto explicabo quam vitae hic, non repellat eaque deserunt fuga ea.lorem ";
  const intro =
    "Nesciunt odit quibusdam, consequatur animi repudiandae inventore deserunt";

  return (
    <div className="flex justify-center gap-5 py-10">
      <section className="rounded-lg bg-gray-50 dark:bg-[#1B2937] shadow-sm p-7 sm:max-w-sm sm:p-4 sm:pb-12 h-[50%]">
        <img
          src={singleProfile?.image}
          alt="..."
          className="rounded-lg sm:w-full object-cover sm:h-52"
        />
        <div>
          <div className="flex justify-between my-3">
            <div className="">
              <p className="font-semibold dark:text-[#CFD8D8]">
                {singleProfile?.firstName} {singleProfile?.lastName}
              </p>
              <p className="italic text-gray-500 dark:text-gray-400">
                {singleProfile?.email}
              </p>
            </div>
            <div className="">
              <p className="font-bold text-gray-50 bg-purple-700 dark:bg-[#6A7082] px-2 py-1 rounded-full">
                {singleProfile?.company?.name}
              </p>
            </div>
          </div>
          <div className="md:hidden dark:text-[#CFD8D8]">
            <p className="">
              <span className="font-semibold ">Position:</span>{" "}
              {singleProfile?.company?.title}
            </p>
            <p>
              <span className="font-semibold">Address:</span>
              {singleProfile?.address?.address} / {singleProfile?.address?.city}{" "}
              / {singleProfile?.address?.state}
            </p>
          </div>
          <br />
          <p className="text-gray-600 font-semibold dark:text-[#CFD8D8]">
            {intro}
          </p>
          <div className="flex gap-5 justify-center mt-5  sm:block md:hidden lg:hidden">
            <SocialLink />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-[#1B2937] hidden md:block relative max-w-2xl rounded-lg lg:justify-self-end">
        <div className=" items-center p-4">
          <img
            src="https://i.ibb.co/r3j2WTN/banner7.png"
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
              <p className="italic text-gray-500 dark:text-gray-400">
                {singleProfile?.email}
              </p>
            </div>
            <div className="">
              <p className="font-bold text-gray-50 dark:bg-[#6A7082] bg-purple-700 px-2 py-1 rounded-full ">
                {singleProfile?.company?.name}
              </p>
            </div>
          </div>
          <p className="dark:text-[#CFD8D8]">
            <span className="font-semibold">Position:</span>
            {singleProfile?.company?.title}
          </p>
          <p className="dark:text-[#CFD8D8]">
            <span className="font-semibold">Address:</span>
            {singleProfile?.address?.address} # {singleProfile?.address?.city} #
            {singleProfile?.address?.state}
          </p>
          <br />

          <p className="text-gray-600 dark:text-[#CFD8D8]">
            <span className="text-4xl">{description?.slice(0, 1)}</span>
            {description?.slice(1)}
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
