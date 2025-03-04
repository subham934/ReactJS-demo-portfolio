import React from "react";
import "./Services.css";
import { CgCheck } from "react-icons/cg";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* =============END OF UI/UX====== */}

        {/* =============WEB DEVELOPMENT====== */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* =============END OF WEB DEVELOPMENT====== */}

        {/* =============CONTENT CREATION====== */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          
          </ul>
        </article>

        {/* =============END OF CONTENT CREATION====== */}
      </div>
    </section>
  );
};

export default Services;
