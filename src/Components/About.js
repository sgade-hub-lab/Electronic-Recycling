// src/About.js
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-400 flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6 tracking-wide">
          About Us
        </h1>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          Welcome to our website! We are a team of passionate individuals who strive to bring the best experience to our users. Our mission is to provide valuable services with a focus on quality and innovation.
        </p>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          Our vision is to become a leader in our industry by constantly evolving and improving our offerings. We believe in collaboration, transparency, and a commitment to excellence.
        </p>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          Thank you for visiting! Feel free to reach out to us if you have any questions or feedback.
        </p>

        <div className="flex justify-center mt-8">
          <a
            href="/contact"
            className="py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl transform transition-all hover:scale-105 hover:from-purple-600 hover:to-indigo-600 duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
