import React from 'react';
import { Route, Routes, Link } from 'react-router-dom'; // Import Router components
import './App.css';
import { useState } from 'react';

import globeImage from './assets/globe.png';
import camelImage from './assets/camel.png';
import switzImage from './assets/switz.png';
import coupleImage from './assets/couple.jpeg';
import tajImage from './assets/taj.png';
import BlogPage from './BlogPage'; // Import BlogPage component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="flex bg-black items-center">
        <div className="text-white flex mx-2 my-2 space-x-4">
          <img src={globeImage} alt="globe" className="w-5 h-5 rounded-lg" />
          <span className="ml-2">The World Travel Guy</span>
        </div>

        <div className="flex justify-center mx-2 my-2 space-x-4">
          <a href="#HOME" className="text-white hover:text-orange-600">
            HOME
          </a>
          {/* Use Link for the BLOG page navigation */}
          <Link to="/blog" className="text-white hover:text-orange-600">
            BLOG
          </Link>
          <a href="#HOME" className="text-white hover:text-orange-600">
            DESTINATIONS
          </a>
          <a href="#HOME" className="text-white hover:text-orange-600">
            CATEGORIES
          </a>
          <a href="#HOME" className="text-white hover:text-orange-600">
            GALLERY
          </a>
          <a href="#HOME" className="text-white hover:text-orange-600">
            CONTACT
          </a>
        </div>

        <div className="ml-auto flex items-center bg-gray-500 rounded-full px-4 py-1 my-2 mx-2 w-48">
          <input
            className="bg-transparent outline-none text-gray-700 w-full"
            type="text"
            placeholder="search"
          />
        </div>
      </nav>

      <div className="bg-white flex justify-between items-center m-4 gap-x-4">
        <div className="w-35 h-35 bg-white flex items-center justify-center rounded-lg">
          <img src={camelImage} alt="camel" className="w-full h-full object-cover rounded-md" />
        </div>
        <div className="w-32 h-32 bg-white flex items-center justify-center rounded-lg">
          <img
            src={switzImage}
            alt="switzerland"
            className="w-full h-full object-cover rounded-md transform transition-all duration-300 hover:scale-110"
          />
        </div>
        <div className="w-32 h-32 bg-white flex items-center justify-center rounded-lg">
          <img src={coupleImage} alt="couple" className="w-full h-full object-cover rounded-md" />
        </div>
      </div>

      <div className="justify-between flex">
        <span>
          <h1 className="text-4xl font-bold">TRAVEL BLOG</h1>
        </span>
        <span>
          <h1 className="text-4xl font-bold text-red-900">TRAVEL BLOG</h1>
        </span>
      </div>

      <div className="flex items-center justify-between mt-9">
        <div>
          <Link to="/taj">
            <img
              src={tajImage}
              alt="Taj"
              className="transform transition-all duration-300 hover:scale-110 w-15 h-15 rounded-lg"
            />
          </Link>
        </div>
        <div className="bg-gray-200 w-1/2 h-50 rounded-md mt-9">
          <h1>Thanks for Looking!</h1>
          <p>
            I am Rohit Yadav, the guy behind this website.<br /> I am Indian who has been traveling for <br />
            <span className="text-red-950 font-bold">for 8 years</span>
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe incidunt a, quidem corrupti impedit
            veritatis officia. Adipisci similique, in officia dignissimos unde, incidunt doloremque corporis quam
            fugiat, illum enim cupiditate!
          </p>
          <p2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor culpa quas facere sint perspiciatis?
            Earum quaerat ad doloremque ex explicabo molestiae placeat, laboriosam aperiam architecto nihil? Deleniti
            placeat eius hic?
          </p2>
        </div>
      </div>

      {/* Define Routes */}
      <Routes>
        <Route path="/taj" element={<TajPage />} />
        <Route path="/blog" element={<BlogPage />} /> {/* Add the route for BlogPage */}
      </Routes>
    </>
  );
}

const TajPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8">Welcome to the Taj Page</h1>
      <p className="mt-4 text-center">
        This is the page about the Taj Mahal. You can put detailed information, images, and other content related to
        this magnificent monument.
      </p>
    </div>
  );
};

export default App;
