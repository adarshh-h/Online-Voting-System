import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import voteContext from "../Context/vote/Votecontext";
import Navbar from "./Navbar";

const AdminLogin = () => {
  const [Adetails, SetAdetails] = useState({
    aadharnumber: "",
    password: "",
  });
  const context = useContext(voteContext);
  const { adminLogin } = context;

  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    const result = await adminLogin(Adetails.aadharnumber, Adetails.password);
    if (result.success) {
      localStorage.setItem("token", result.token);
      navigate("/admin");
    } else {
      alert("you have no admin role or invalid credentials");
    }
  };

  const handleChange = (e) => {
    SetAdetails({ ...Adetails, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <section className="my-20 Adminlogin">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[70vh] lg:py-0">
          <div className="w-full rounded-lg shado md:mt-0 sm:max-w-md xl:p-0 :">
            <div className="p-6 space-y-4">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Admin's Login
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleAdminLogin}
              >
                <div>
                  <input
                    type="text"
                    name="aadharnumber"
                    id="aadharnumber"
                    value={Adetails.aadharnumber}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Aadhar-Number"
                    required={true}
                  />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={Adetails.password}
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={true}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <i
                      className="bx bx-show text-2xl cursor-pointer text-gray-600 hover:text-blue-500"
                      onClick={() => {
                        const pass = document.getElementById("password");
                        if (pass.type === "password") {
                          pass.type = "text";
                        } else {
                          pass.type = "password";
                        }
                      }}
                    ></i>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-2 bg-gray-600 hover:bg-blue-600"
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
