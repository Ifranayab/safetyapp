import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
      <footer className="text-center text-white bg-custom-gradient">
        <div className="container bg-custom-gradient">
          <section className="p-5 text-white">
            <div className="text-center flex justify-center items-start px-5 gap-24">
              <div className="contact-section space-y-4">
                <div className="contact-title">
                  <h6 className="text-xl font-bold uppercase">Our Contacts</h6>
                </div>
                <div className="contact-info space-y-3">
                  <div className="contact-item flex items-center gap-2">
                    <div className="contact-text">
                      <p>ABCDEF, Rohini, ND-India</p>
                    </div>
                  </div>
                  <div className="contact-item flex items-center gap-2">
                    <div className="contact-text">
                      <p>+012 345 67890</p>
                    </div>
                  </div>
                  <div className="contact-item flex items-center gap-2">
                    <div className="contact-text">
                      <p>abcdef@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="quick-links-section space-y-4">
                <h6 className="text-xl font-bold uppercase">Quick Links</h6>
                <div className="quick-links-list space-y-3">
                  <div className="quick-link-item">
                    <button className="text-white hover:text-gray-400">
                      About
                    </button>
                  </div>
                  <div className="quick-link-item">
                    <a
                      href="/contact"
                      className="text-white hover:text-gray-400"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="quick-link-item">
                    <button className="text-white hover:text-gray-400">
                      Services
                    </button>
                  </div>
                </div>
              </div>

              <div className="business-hours-section space-y-4">
                <div className="business-hours-title">
                  <h6 className="text-xl font-bold uppercase">
                    Business Hours
                  </h6>
                </div>
                <div className="business-hours-list space-y-2">
                  <div className="business-hours-item">
                    <p>Monday - Friday</p>
                  </div>
                  <div className="business-hours-item">
                    <p>Saturday</p>
                  </div>
                  <div className="business-hours-item">
                    <p>Sunday</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center mb-5">
            <a href="#" className="text-white me-8">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-white me-8">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white me-8">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-white me-8">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="text-white me-8">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </section>

          <section className="mb-2">
            <div className="flex  justify-center items-center">
              <div className="flex gap-4">
                <span>
                  <img className="h-20 cursor-pointer" src={logo} alt="logo" />
                </span>
                <span className="flex items-center">
                  WeCare © 2024 All rights reserved.
                </span>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
