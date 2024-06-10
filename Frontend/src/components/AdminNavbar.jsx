import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear("token");
    navigate("/");
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl text-white">Admin's Dashboard</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to={"/admin/getcandidates"}
              className=" mr-5 mx-6 text-white hover:text-blue-700 border-b"
              style={{ borderColor: "rgb(177, 255, 4)" }}
            >
              Candidates Management
            </Link>
            <Link
              to={"/admin/addcandidate"}
              className="mr-5 mx-6 text-white hover:text-blue-700  border-b "
              style={{ borderColor: "rgb(177, 255, 4)" }}
            >
              Enroll Candidate
            </Link>
            <Link
              to={"/admin/getresult"}
              className="mr-5 mx-6 text-white hover:text-blue-700  border-b"
              style={{ borderColor: "rgb(177, 255, 4)" }}
            >
              Poll Results
            </Link>
          </nav>
          <button
            type="button"
            onClick={(e) => {
              handleLogout(e);
            }}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Log-Out
          </button>
        </div>
      </header>
    </>
  );
};

export default AdminNavbar;
