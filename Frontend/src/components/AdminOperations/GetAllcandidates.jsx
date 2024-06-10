import { React, useEffect, useState, useContext } from "react";
import voteContext from "../../Context/vote/Votecontext";

const GetAllcandidates = () => {
  const [editData, SetEditData] = useState({
    eId: "",
    eName: "",
    eAge: "",
    eParty: "",
  });

  const [isModalOpen, SetisModalOpen] = useState(false);

  const context = useContext(voteContext);
  const { getCandidates, candidates, editCandidates, deleteCandidate } =
    context;

  const handleChange = (e) => {
    SetEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Update Candidate details method
  const updateCandidate = (e) => {
    e.preventDefault();
    editCandidates(
      editData.eName,
      editData.eAge,
      editData.eParty,
      editData.eId
    );
    SetisModalOpen(false);
    SetEditData({ eName: "", eAge: "", eParty: "" });
  };

  // method for open the modal and update the candidate's details to modal's input
  const handleClick = (e, currentCandidate) => {
    e.preventDefault();
    SetisModalOpen(true);
    SetEditData({
      eId: currentCandidate._id,
      eName: currentCandidate.name,
      eAge: currentCandidate.age,
      eParty: currentCandidate.party,
    });
  };

  // method for close the modal
  const closeModal = () => {
    SetisModalOpen(false);
  };

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <>
      <section className="votecontent body-font">
        <div className="container px-5 py-8 mx-auto ">
          <div className="flex flex-wrap justify-around -m-4">
            {candidates.map((candidate, index) => {
              return (
                <div className="p-4 md:w-1/3" key={index}>
                  <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className=" custom-height lg:h-48 md:h-36 w-full object-cover object-center"
                      src={candidate.image}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        <u>{candidate.name}</u>
                      </h1>
                      <div className="p-3 border rounded-lg shadow-md bg-purple-300">
                        <p className="text-lg font-semibold mb-2">
                          Party:
                          <span className="text-blue-500">
                            {candidate.party}
                          </span>
                        </p>
                        <p className="text-lg font-semibold mb-2">
                          Age:{" "}
                          <span className="text-blue-500">{candidate.age}</span>
                        </p>

                        <div className="operations my-4 flex justify-evenly">
                          <button
                            type="button"
                            className="operations-edit-btn"
                            onClick={(e) => {
                              handleClick(e, candidate);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              style={{
                                fill: "black",
                                animation: "linearAnimation 1s linear infinite",
                              }}
                            >
                              <path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path>
                              <path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path>
                            </svg>
                          </button>
                          <button
                            className="operations-trash-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              deleteCandidate(candidate._id);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              style={{
                                fill: "black",
                                transform: "scaleX(-1)",
                                msFilter:
                                  "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)",
                                animation: "spin 2s linear infinite",
                              }}
                            >
                              <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* // <!-- Main modal --> */}
      {isModalOpen && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Update candidate's details
                </h3>
                <button
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                  onClick={closeModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-4 md:p-5">
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    updateCandidate(e);
                  }}
                >
                  <div>
                    <input
                      type="text"
                      name="eName"
                      id="eName"
                      value={editData.eName}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="eAge"
                      id="eAge"
                      placeholder="Age"
                      value={editData.eAge}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="eParty"
                      id="ePart"
                      value={editData.eParty}
                      onChange={handleChange}
                      placeholder="Party"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GetAllcandidates;
