import React from "react";

const Contact = () => {
  return (
    <div className="h-[600px] flex bg-orange-100">
      <div className="flex flex-col justify-center items-center w-2/3 p-10">
        <h2 className="text-2xl font-bold text-center mb-8">CONTACT US</h2>
        <div className="flex flex-col mb-6">
          <div className="mb-4 flex items-center">
            <i className="fas fa-map-marker-alt mr-4 text-2xl"></i>
            <p>
              <strong>Our Office Address</strong>
              <br />
              Palm Court Bldg M, 501/B, 5th Floor, New Link Road, Beside Goregaon Sports Complex, Malad West, Mumbai, Maharashtra 400064
            </p>
          </div>
          <div className="mb-4 flex items-center">
            <i className="fas fa-envelope mr-4 text-2xl"></i>
            <p>
              <strong>General Enquiries</strong>
              <br />
              websupport@justdial.com
            </p>
          </div>
          <div className="mb-4 flex items-center">
            <i className="fas fa-phone mr-4 text-2xl"></i>
            <p>
              <strong>Call Us</strong>
              <br />
              +91-8888888888
            </p>
          </div>
          <div className="mb-4 flex items-center">
            <i className="fas fa-clock mr-4 text-2xl"></i>
            <p>
              <strong>Our Timing</strong>
              <br />
              Mon - Sun: 10:00 AM - 07:00 PM
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/3 p-10">
        <form className="w-full">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="mb-4 p-2 w-full border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="mb-4 p-2 w-full border border-gray-300 rounded"
          />
          <input
            type="text"
            name="contact"
            placeholder="Your Contact No."
            required
            className="mb-4 p-2 w-full border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="mb-4 p-2 w-full border border-gray-300 rounded h-28"
          ></textarea>
          <button
            type="submit"
            className="p-2 w-full bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
