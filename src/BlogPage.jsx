// src/BlogPage.jsx
import React from 'react';
import globeImage from './assets/globe.png'; // Example image for the blog page
import camelImage from './assets/camel.png'; // Example image for the blog page

const BlogPage = () => {
  return (
    <div className="blog-page-container">
      <nav className="flex bg-black items-center p-4">
        <div className="text-white flex mx-2 my-2 space-x-4">
          <img src={globeImage} alt="globe" className="w-5 h-5 rounded-lg" />
          <span className="ml-2">The World Travel Guy</span>
        </div>

        <div className="flex justify-center mx-2 my-2 space-x-4">
          <a href="#HOME" className="text-white hover:text-orange-600">
            HOME
          </a>
          {/* Add more links if needed */}
        </div>
      </nav>

      <div className="blog-header text-center my-10">
        <h1 className="text-4xl font-bold">Travel Blog</h1>
        <p className="mt-4 text-xl">Explore the world through my travel stories</p>
      </div>

      <div className="blog-content container mx-auto p-4">
        <div className="flex justify-between">
          <div className="blog-image w-1/2 p-2">
            <img src={camelImage} alt="Camel ride" className="w-full h-80 object-cover rounded-lg" />
          </div>
          <div className="blog-text w-1/2 p-2">
            <h2 className="text-2xl font-semibold">Camel Ride in the Desert</h2>
            <p className="mt-4 text-lg">
              Embark on an unforgettable journey through the vast desert dunes, experiencing the magic of camel
              rides under the golden sun. This trip will make you feel like you’re traveling back in time!
            </p>
            <p className="mt-4 text-lg">
              The desert, with its endless sand, creates a serene and unique atmosphere where you can enjoy the
              quiet beauty of nature. If you're an adventure lover, a camel ride is a must-try experience.
            </p>
          </div>
        </div>

        <div className="comments-section mt-10">
          <h3 className="text-2xl font-semibold">Comments</h3>
          <textarea
            className="w-full mt-4 p-2 border rounded-md"
            rows="4"
            placeholder="Leave a comment..."
          ></textarea>
          <button className="mt-4 bg-blue-500 text-white p-2 rounded-md">Submit Comment</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
