import React from 'react';
import yogaImg from '../images/yoga.jpg'; // Replace this with the correct yoga image path.

const Yoga = () => {
  const yogaSessions = [
    {
      id: 1,
      title: "Morning Yoga for Stress Relief",
      description: "Join us for a calming yoga session designed to alleviate stress and improve flexibility.",
      time: "6:00 AM - 7:00 AM",
      type: "Offline",
      location: "Community Center, Hall A",
    },
    {
      id: 2,
      title: "Online Beginner Yoga Class",
      description: "Perfect for those new to yoga, this class introduces the basics in a friendly environment.",
      time: "8:00 AM - 9:00 AM",
      type: "Online",
      location: "Zoom (link will be sent upon registration)",
    },
    {
      id: 3,
      title: "Evening Yoga for Relaxation",
      description: "Unwind after a long day with our relaxing evening yoga session.",
      time: "5:00 PM - 6:00 PM",
      type: "Offline",
      location: "Community Center, Hall B",
    },
  ];

  return (
    <div className="h-auto bg-orange-100">
      <div className="flex flex-col justify-center items-center pt-16 pb-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Yoga Sessions</h1>
        <p className="text-lg text-center mb-12 px-12 text-gray-700">
          Discover our yoga sessions designed for relaxation, flexibility, and mental well-being. Whether you're a beginner or an experienced practitioner, we have something for everyone.
        </p>
      </div>

      {/* Yoga Image */}
      <div className="flex justify-center mb-8">
        <img
          src={yogaImg}
          alt="Yoga"
          className="h-48 w-48 object-cover rounded-full"
        />
      </div>

      {/* Yoga Sessions */}
      <div className="flex flex-wrap justify-center gap-8 px-8">
        {yogaSessions.map((session) => (
          <div
            key={session.id}
            className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-md shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{session.title}</h3>
            <p className="text-lg mb-4 text-gray-600">{session.description}</p>
            <p className="text-md mb-2 text-gray-700">
              <strong>Time:</strong> {session.time}
            </p>
            <p className="text-md mb-2 text-gray-700">
              <strong>Type:</strong> {session.type}
            </p>
            <p className="text-md text-gray-700">
              <strong>Location:</strong> {session.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yoga;
