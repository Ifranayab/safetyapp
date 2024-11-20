import React from 'react';
import pic from '../images/pic.png'; // Replace this with the correct image path.

const AboutUs = () => {
  return (
    <div className="h-[600px] flex">
      {/* Left Section */}
      <div className="w-2/3 bg-orange-100">
        <div className="flex flex-col justify-center items-center pt-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
          <p className="text-lg text-center mb-8 px-12 text-gray-700">
            Welcome to <strong>WeCare</strong>! We are dedicated to empowering women by providing tools and resources for safety, wellness, and personal growth. Our mission is to create a safer, more inclusive environment for women everywhere.
          </p>

          <div className="w-3/4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h2>
            <p className="text-lg mb-8 text-gray-700">
              At WeCare, we believe that safety is a fundamental right. We envision a world where every woman feels secure 
              and confident, free from fear, and empowered to live her life to the fullest.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-lg mb-8 text-gray-700">
              Our mission is to provide innovative digital solutions that promote women's safety and well-being. 
              Through our app, we aim to offer real-time emergency support, wellness resources, and informative content 
              that fosters empowerment and community support.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">What We Offer</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li>Emergency SOS alerts with real-time location sharing.</li>
              <li>Wellness sessions, both online and offline, to promote physical and mental health.</li>
              <li>Educational articles and podcasts on safety and empowerment.</li>
              <li>A platform for building a supportive community.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/3 bg-orange-100">
        <img
          className="ml-auto h-[600px] rounded-l-full object-cover"
          src={pic}
          alt="Empowered Women"
        />
      </div>
    </div>
  );
};

export default AboutUs;
