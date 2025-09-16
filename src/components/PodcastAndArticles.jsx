import React from 'react';
import podcastImg from '../images/pod.jpg'; 
import articleImg from '../images/pod.jpg'; 

const PodcastAndArticles = () => {
  // 25 curated podcasts
  const podcasts = [
    { id: 1, title: "Empowering Women Through Technology", description: "A discussion on how digital tools are reshaping women's safety." },
    { id: 2, title: "The Role of Communities in Women's Safety", description: "Exploring community-based initiatives for empowerment and security." },
    { id: 3, title: "Breaking Barriers with Education", description: "Stories of women overcoming challenges through education." },
    { id: 4, title: "Voices of Change: Women Leaders Speak", description: "Interviews with women leaders inspiring societal progress." },
    { id: 5, title: "Safety in the Digital Age", description: "Online privacy, harassment, and protective measures for women." },
    { id: 6, title: "Financial Freedom for Women", description: "Steps toward financial independence and security." },
    { id: 7, title: "Mental Health Matters", description: "How women can prioritize wellness amidst daily pressures." },
    { id: 8, title: "Women in STEM", description: "Inspiring journeys of women scientists and innovators." },
    { id: 9, title: "The Power of Sisterhood", description: "Community support networks that make a difference." },
    { id: 10, title: "Balancing Work and Life", description: "Practical advice on managing careers and personal life." },
    { id: 11, title: "Safety in Public Spaces", description: "Urban design and safety strategies for women." },
    { id: 12, title: "Tech Against Harassment", description: "How AI and apps are combating harassment." },
    { id: 13, title: "Legal Rights for Women", description: "An overview of laws protecting women globally." },
    { id: 14, title: "Parenting and Protection", description: "How mothers ensure safety for their families." },
    { id: 15, title: "Cybersecurity Simplified", description: "Protecting personal data online for non-techies." },
    { id: 16, title: "Travel Safety Tips", description: "How women can explore safely and confidently." },
    { id: 17, title: "Breaking Workplace Bias", description: "Challenging gender stereotypes in careers." },
    { id: 18, title: "Self-defense Mindset", description: "Psychological strength in unsafe situations." },
    { id: 19, title: "Building Safe Communities", description: "Grassroot stories of women making areas safer." },
    { id: 20, title: "Digital Literacy for Women", description: "Helping women use tech for empowerment." },
    { id: 21, title: "Climate Change and Women", description: "How climate impacts women’s safety and health." },
    { id: 22, title: "Young Voices, Big Impact", description: "Stories of teenage girls leading change." },
    { id: 23, title: "Healthcare Access for Women", description: "Barriers and progress in global health." },
    { id: 24, title: "Stories of Survivors", description: "Inspiring journeys of resilience and courage." },
    { id: 25, title: "Future of Women Safety Tech", description: "What innovations are on the horizon?" },
  ];

  // 51 curated articles
  const articles = [
    { id: 1, title: "Top Safety Apps Every Woman Should Know", description: "A comprehensive guide to digital safety tools." },
    { id: 2, title: "Mental Health and Women’s Wellness", description: "Strategies for mental health support." },
    { id: 3, title: "How to Identify Unsafe Situations", description: "Recognizing early warning signs." },
    { id: 4, title: "Women’s Rights: A Global Perspective", description: "Comparing rights across regions." },
    { id: 5, title: "Safe Travel for Women", description: "Practical steps to travel safely." },
    { id: 6, title: "Building Confidence Through Self-defense", description: "Martial arts and mindset techniques." },
    { id: 7, title: "Cybersecurity Tips for Women", description: "Protect your online presence effectively." },
    { id: 8, title: "How to Report Harassment", description: "Legal and organizational resources." },
    { id: 9, title: "The Importance of Financial Literacy", description: "Money management for independence." },
    { id: 10, title: "Healthy Relationships", description: "Recognizing red flags early." },
    { id: 11, title: "Women in Entrepreneurship", description: "Stories and resources to start ventures." },
    { id: 12, title: "Workplace Safety Policies", description: "How organizations should protect women." },
    { id: 13, title: "Digital Detox and Mental Peace", description: "Balancing tech use and health." },
    { id: 14, title: "Civic Engagement for Women", description: "How participation builds safer societies." },
    { id: 15, title: "Safe Parenting in the Digital Age", description: "Raising kids with safety online." },
    { id: 16, title: "Breaking Silence on Abuse", description: "Why speaking up is powerful." },
    { id: 17, title: "Career Growth and Safety", description: "Navigating professional life securely." },
    { id: 18, title: "Digital Identity Protection", description: "Guarding against identity theft." },
    { id: 19, title: "Rural Women Empowerment", description: "Case studies from villages." },
    { id: 20, title: "Technology for Good", description: "Apps and tools improving safety." },
    { id: 21, title: "Nutrition and Wellness", description: "Healthy living tips for women." },
    { id: 22, title: "Self-Care in Stressful Times", description: "Practices for resilience." },
    { id: 23, title: "Women in Leadership", description: "Why representation matters." },
    { id: 24, title: "Dealing with Workplace Harassment", description: "Step-by-step response guide." },
    { id: 25, title: "Online Dating Safety", description: "How to stay secure while dating online." },
    { id: 26, title: "Laws Every Woman Should Know", description: "Legal basics for protection." },
    { id: 27, title: "Emergency Resources", description: "Helplines and apps you can rely on." },
    { id: 28, title: "Women and Climate Resilience", description: "Adapting to global change." },
    { id: 29, title: "Digital Literacy for All", description: "Tech education for rural women." },
    { id: 30, title: "Breaking Gender Stereotypes", description: "Changing narratives around women." },
    { id: 31, title: "How to Mentor Young Women", description: "Guides to supporting the next generation." },
    { id: 32, title: "Urban Design for Women Safety", description: "City planning that protects women." },
    { id: 33, title: "Resilience Stories", description: "Real stories of women rising." },
    { id: 34, title: "How Men Can Be Allies", description: "Engaging men in safety movements." },
    { id: 35, title: "The Future of Work", description: "What women should expect ahead." },
    { id: 36, title: "Building Safe Schools", description: "Protecting young girls in education." },
    { id: 37, title: "Balancing Career and Family", description: "Work-life harmony tips." },
    { id: 38, title: "Technology Against Violence", description: "AI, IoT, and more for safety." },
    { id: 39, title: "Empowering Through Microfinance", description: "Financial solutions for women." },
    { id: 40, title: "Emotional Intelligence for Women", description: "Tools for personal growth." },
    { id: 41, title: "Digital Parenting", description: "Keeping children safe online." },
    { id: 42, title: "How to Handle Street Harassment", description: "Practical survival strategies." },
    { id: 43, title: "Tech Careers for Women", description: "How to enter and thrive in IT." },
    { id: 44, title: "Confidence Building Habits", description: "Daily steps to boost confidence." },
    { id: 45, title: "Global Case Studies in Safety", description: "Lessons from across the world." },
    { id: 46, title: "Safe Solo Living", description: "Tips for women living independently." },
    { id: 47, title: "Harnessing Social Media Safely", description: "Use platforms without risks." },
    { id: 48, title: "How to Build Resilient Communities", description: "Neighborhood initiatives." },
    { id: 49, title: "Empowering Teenage Girls", description: "Confidence & safety tips for teens." },
    { id: 50, title: "Workplace Equality Practices", description: "Best HR policies for women." },
    { id: 51, title: "Global Movements for Women", description: "UN and NGOs making change." },
  ];

  // Function for "Coming Soon" alert
  const handleComingSoon = (e) => {
    e.preventDefault();
    alert("This content is coming soon!");
  };

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
          <img src={podcastImg} alt="Podcasts" className="h-48 w-48 object-cover rounded-full mb-8" />
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-8">
          {podcasts.map((podcast) => (
            <div key={podcast.id} className="w-full max-w-md p-6 bg-orange-50 border border-gray-200 rounded-md shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{podcast.title}</h3>
              <p className="text-lg mb-4 text-gray-600">{podcast.description}</p>
              <button
              onClick={handleComingSoon}
              className="text-orange-500 hover:text-orange-600 font-semibold underline"
>Listen Now
</button>

            </div>
          ))}
        </div>
      </div>

      {/* Articles Section */}
      <div className="bg-orange-50 py-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Articles</h2>
          <img src={articleImg} alt="Articles" className="h-48 w-48 object-cover rounded-full mb-8" />
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-8">
          {articles.map((article) => (
            <div key={article.id} className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-md shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{article.title}</h3>
              <p className="text-lg mb-4 text-gray-600">{article.description}</p>
              <button
              onClick={handleComingSoon}
              className="text-orange-500 hover:text-orange-600 font-semibold underline">
                Read More
                </button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastAndArticles;
