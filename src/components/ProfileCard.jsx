import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ profile }) => {
  const {
    id,
    Avatar,
    banner,
    firstName,
    lastName,
    email,
    address,
    companyName,
  } = profile;
  return (
    <>
      <div className="max-w-sm rounded-lg bg-gray-100 dark:bg-[#1B2937]">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src={banner}
            alt="..."
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-32"
            src={Avatar}
            alt="..."
          />
        </div>
        <div className="text-center mt-2 ">
          <h2 className="text-xl dark:text-gray-300">
            <span className="font-semibold ">{firstName}</span> {lastName}
          </h2>
          <p className="text-gray-600 italic dark:text-[#6A7082]">{email}</p>
          <p className="font-bold text-gray-50 dark:text-gray-300 dark:bg-[#6A7082] bg-purple-700 px-2 py-1 rounded-full w-[50%] mx-auto">
                {companyName}
              </p>
        </div>

        <div className="p-4 border-t mx-8 mt-2">
          <Link
            to={`profileDetails/${id}`}
            className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
          >
            Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
