import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";


const ClubPage = () => {
  const { id } = useParams();
  const [club, setClub] = useState(null);

  useEffect(() => {
    fetch(`/clubs/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setClub(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  if (!club) {
    return 
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-orange-500 animate-ping"></div>
      </div>
    
  }

  return (
    <div className="p-8 w-full h-full bg-white-100  mt-8">
      <div className="flex items-center mb-8">
        <img className="w-20 h-20 mr-4 rounded-full" src={club.logo_url} alt={club.title} />
        <div>
          <h2 className="text-3xl font-semibold">{club.title}</h2>
          <div className="flex items-center mt-1">
            <FontAwesomeIcon icon={faUser} className="mr-1 text-gray-600" />
            <span className="text-gray-600">{club.members} Members</span>
          </div>
        </div>
      </div>
      <p className="text-lg mb-4">{club.description}</p>
      <div className="flex items-center space-x-2">
        {club.category.map((category, index) => (
          <span key={index} className="bg-orange-200 rounded-lg p-2 text-sm">{category}</span>
        ))}
      </div>

      {/* announcments */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold">Announcements</h3>
        <div className="flex items-center mt-4">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2 text-gray-600" />
          <span className="text-lg">We have Added our MyConnect Platform</span>
        </div>
      </div>

      {/* Questions */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold">Questions</h3>
        <div className="flex items-center mt-4">
          <FontAwesomeIcon icon={faQuestionCircle} className="mr-2 text-gray-600" />
          <span className="text-lg">Ask a question</span>
        </div>
        <div className="flex items-center mt-10">
          <input type="text" placeholder="Type your question here" className="w-1/2 h-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-300" />
          <button className="h-10 px-3 py-1 bg-orange-500 text-white rounded-md ml-2 transition-colors duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">Submit</button>
        </div>

      </div>
      <div className="overflow-x-auto mt-4">
        <div className="flex items-center space-x-4 mt-20">


          {/* Sample Question Card */}
          <div className="flex-shrink-0 bg-orange-200 rounded-lg shadow-md p-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-600" />
              <span className="text-gray-80000 text-lg">John Doe</span>
            </div>
            <p className="text-lg mt-2">What is the club about?</p>
          </div>
          
          <div className="flex-shrink-0 bg-orange-200 rounded-lg shadow-md p-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-600" />
              <span className="text-gray-80000 text-lg">Simon Fraser</span>
            </div>
            <p className="text-lg mt-2">What is the membership fee?</p>
          </div>

          <div className="flex-shrink-0 bg-orange-200 rounded-lg shadow-md p-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-600" />
              <span className="text-gray-80000 text-lg">John Smith</span>
            </div>
            <p className="text-lg mt-2">free food anytime?</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ClubPage;
