import React from 'react';
import contactImg from '../images/contact.jpg'; 

const ContactUs = () => {
  return (
    <div className="h-[600px] flex">
      {/* Left Section */}
      <div className="w-2/3 bg-orange-100">
        <div className="flex flex-col justify-center items-center pt-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
          <p className="text-lg text-center mb-8 px-12 text-gray-700">
            We would love to hear from you! Whether you have questions, feedback, or want to collaborate, feel free to reach out to us.
          </p>

          <div className="w-3/4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Write your message"
                  rows="4"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 text-lg font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/3 bg-orange-100">
        <img
          className="ml-auto h-[600px] rounded-l-full object-cover"
          src={contactImg}
          alt="Contact Us"
        />
      </div>
    </div>
  );
};

export default ContactUs;
