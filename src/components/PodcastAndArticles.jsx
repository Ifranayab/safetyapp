import React from 'react';
import podcastImg from '../images/pod.jpg'; // Replace this with the correct podcast image path.
import articleImg from '../images/pod.jpg'; // Replace this with the correct article image path.

const PodcastAndArticles = () => {
  const podcasts = [
    {
      id: 1,
      title: "Empowering Women Through Technology",
      description: "A discussion on how digital tools like WeCare are reshaping women's safety.",
      link: "#",
    },
    {
      id: 2,
      title: "The Role of Communities in Women's Safety",
      description: "Exploring community-based initiatives for empowerment and security.",
      link: "#",
    },
  ];

  const articles = [
    {
      id: 1,
      title: "Top Safety Apps Every Woman Should Know",
      description: "A comprehensive guide to digital safety tools available today.",
      link: "#",
    },
    {
      id: 2,
      title: "Mental Health and Women’s Wellness",
      description: "Strategies for mental health support in the modern world.",
      link: "#",
    },
  ];

  return (
    <div className="h-auto bg-orange-100">
      <div className="flex flex-col justify-center items-center pt-16 pb-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Podcasts & Articles</h1>
        <p className="text-lg text-center mb-12 px-12 text-gray-700">
          Explore our curated collection of podcasts and articles dedicated to women's safety, wellness, and empowerment.
        </p>
      </div>

      {/* Podcasts Section */}
      <div className="bg-white py-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Podcasts</h2>
          <img
            src={podcastImg}
            alt="Podcasts"
            className="h-48 w-48 object-cover rounded-full mb-8"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-8">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="w-full max-w-md p-6 bg-orange-50 border border-gray-200 rounded-md shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{podcast.title}</h3>
              <p className="text-lg mb-4 text-gray-600">{podcast.description}</p>
              <a
                href={podcast.link}
                className="text-orange-500 hover:text-orange-600 font-semibold"
              >
                Listen Now
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Articles Section */}
      <div className="bg-orange-50 py-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Articles</h2>
          <img
            src={articleImg}
            alt="Articles"
            className="h-48 w-48 object-cover rounded-full mb-8"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-md shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{article.title}</h3>
              <p className="text-lg mb-4 text-gray-600">{article.description}</p>
              <a
                href={article.link}
                className="text-orange-500 hover:text-orange-600 font-semibold"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastAndArticles;
