import { React, useContext, useEffect } from "react";
import voteContext from "../../Context/vote/Votecontext";

const GetCount = () => {
  const context = useContext(voteContext);
  const { getCount, votes } = context;

  useEffect(() => {
    getCount();
  }, []);

  return (
    <>
      <section className="count my-28 bg-gray-700">
        <div className=" my-8 grid rounded-lg shadow-sm md:mb-12 md:grid-cols-2">
          {votes.map((vote, index) => {
            return (
              <figure
                className="flex flex-col items-center justify-center rounded-t-lg border-gray-100  p-8 text-center md:rounded-t-none md:rounded-ss-lg md:border-e dark:gray-100"
                key={index}
              >
                <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Poll Exit
                  </h3>
                  <p className="my-4 font-medium">
                    Party : <span className="text-white">{vote.party}</span>
                  </p>
                  <p className="my-4 font-medium">
                    votes : <span className="text-white">{vote.voteCount}</span>
                  </p>
                </blockquote>
              </figure>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default GetCount;
