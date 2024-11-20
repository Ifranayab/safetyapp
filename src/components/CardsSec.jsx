import React from 'react';
import { Link } from 'react-router-dom'

import './index.css'; 
import contact from '../images/contact.jpg';
import yoga from '../images/yoga.jpg';
import pod from '../images/pod.jpg';

const Cards = () => {
  return (
    <div className="container">
      {/* <header className="header_container">
        <h1 className="header_title">WE CARE</h1>
      </header> */}
      <main className="main_container">
        {/* Card 1 */}
        <div className="card1">
          <a href="#" className="card1_img">
            <img
              src={contact}
              alt="Emergency SOS"
              className="card1img"
              loading="lazy"
            />
          </a>
          <div className="card_title_container">
            <a href="#" className="cardtitleanchor">
              <h2 className="cardtitle">Emergency SOS</h2>
              <p className="card1desc">
                Add Your Emergency Contacts to it. It sends your location and an emergency
                note/alert to them.
              </p>
            </a>
            <div className="footer hover:border-2 hover:border-white hover:rounded-sm">
            <Link to="/chat">
            <button>View More</button></Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card1">
          <a href="#" className="card1_img">
            <img
              src={yoga}
              alt="Yoga"
              className="card1img"
              loading="lazy"
            />
          </a>
          <div className="card_title_container">
            <a href="#" className="cardtitleanchor">
              <h2 className="cardtitle">Yoga</h2>
              <p className="card1desc">
                Practice yoga for mental peace and physical fitness.
              </p>
            </a>
            <div className="footer hover:border-2 hover:border-white hover:rounded-sm">
            <Link to="/yoga">
            <button>View More</button></Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card1">
          <a href="#" className="card1_img">
            <img
              src={pod}
              alt="Podcast Article"
              className="card1img"
              loading="lazy"
            />
          </a>
          <div className="card_title_container">
            <a href="#" className="cardtitleanchor">
              <h2 className="cardtitle">Podcast Article</h2>
              <p className="card1desc">
                Women safety informative podcasts and articles linked for empowerment.
              </p>
            </a>
            <div className="footer hover:border-2 hover:border-white hover:rounded-sm">
              <Link to="/podcast">
              <button>View More</button></Link>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cards;
