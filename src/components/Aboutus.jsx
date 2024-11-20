import React from 'react';
import pic from '../images/aboutttus.jpg'

function Aboutus() {
    return (
        <div className="h-[600px] flex bg-orange-100">
            {/* Left Section with Image */}
            <div className="w-1/3 bg-orange-100 flex justify-center items-center">
                <img 
                    src={pic} 
                    alt="About Us" 
                    className="h-[600px] rounded-r-full object-cover"
                />
            </div>
            
            {/* Right Section with Content */}
            <div className="w-2/3 flex flex-col justify-center items-center p-10">
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-black text-5xl font-bold mb-8">
                        About Us
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Welcome to We Care! We are committed to creating a comprehensive platform that prioritizes women's safety, empowerment, and well-being. At We Care, we aim to provide a space where women can access resources, connect with support systems, and feel confident in their everyday lives.Our platform offers innovative features such as a Yoga section for mindfulness and strength, an Emergency SOS for immediate assistance, and a collection of Podcasts and Articles to inform and inspire. Whether you're seeking tools for safety, mental peace, or community connections, We Care is here to support you.</p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Join us as we build a safer, stronger, and more empowered world for women. Together, we can make every step forward a step with confidence!<p /> 

                    </p>
                    <button 
                        type="button" 
                        className="bg-black text-white font-bold py-3 px-6 rounded-full border-2 border-transparent hover:bg-transparent hover:border-black hover:text-black transition">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
