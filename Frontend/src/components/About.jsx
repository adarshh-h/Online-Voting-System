import React from "react";
import Navbar from "./Navbar";

const AboutUs = () => (
  <>
    <Navbar />
    <div className="aboutUs text-gray-800 p-6">
      <header className="text-center py-10 text-white border-b border-gray-100">
        <h1 className="text-4xl font-bold ">About Us</h1>
        <p className="mt-2 text-lg">Learn more about our mission and works</p>
      </header>

      <section className=" missions text-white text-center py-10 border-b border-gray-100">
        <h2 className="text-3xl font-semibold font-mono">Our Mission</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Our mission is to provide a transparent, secure, and user-friendly
          platform for online voting, ensuring that every vote counts.
        </p>
      </section>

      <section className="desc text-center text-white py-10 border-b border-gray-100">
        <h2 className="text-3xl font-semibold font-mono">User and Admin Sections</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Our platform includes separate sections for users and administrators.
          Users can participate in voting, while administrators manage the polls
          and ensure the integrity of the voting process. Note that
          administrators cannot vote to maintain impartiality.
        </p>
      </section>

      <section className="tech text-center text-white py-10 border-b border-gray-100">
        <h2 className="text-3xl font-semibold font-mono">Technology Stack</h2>
        <ul className="mt-4 max-w-2xl mx-auto list-disc list-inside">
          <li className="font-medium tracking-wide text-gray-200">
            React.js for the frontend
          </li>
          <li className="font-medium tracking-wide text-gray-200">
            Node.js and Express for the backend
          </li>
          <li className="font-medium tracking-wide text-gray-200">
            MongoDB for the database
          </li>
          <li className="font-medium tracking-wide text-gray-200">
            JWT for authentication
          </li>
          <li className="font-medium tracking-wide text-gray-200">
            Bcrypt for Hashing user's passwords
          </li>
        </ul>
      </section>

      <section className="works text-center text-white py-10">
        <h2 className="text-3xl font-semibold font-mono">How It Works</h2>
        <ol className="mt-4 max-w-2xl mx-auto list-decimal list-inside">
          <li>Sign up or log in to your account</li>
          <li>get all the Candidates available for votes</li>
          <li>Cast your vote</li>
          <li>users also update their passwords </li>
          <li>
            congrats , your safe and smooth experience with voting is done
          </li>
        </ol>
      </section>
    </div>
  </>
);

export default AboutUs;
