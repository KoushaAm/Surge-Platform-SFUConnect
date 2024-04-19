import React from "react";
import { Link } from "react-router-dom";


const MyClubs = () => {
  return (
    <div className="p-20">
      <h1 className = "text-2xl font-rubik font-bold mb-10"> My Clubs </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link
          key="ddd"
          to={`/`}
          className="border rounded-md p-4 hover:shadow-lg transition duration-300 ease-in-out"
        >
          <h2 className="text-lg font-semibold mb-2">SFU Aerospace</h2>
          <p className="text-gray-600 mb-2">aims to create a bridge between different disciplines and fill in the gaps between entrepreneurship, educational outreach, and technological developments in the field of Aerospace. We are a group of space enthusiasts who believe in creating multidisciplinary space where everyone can get involved regardless of their major at school.</p>
          <p className="text-orange-500">Science & Technology, Community Service</p>
        </Link>
      </div>
    </div>
  );
};

export default MyClubs;
