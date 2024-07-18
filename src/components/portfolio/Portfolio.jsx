import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Expenses Tracking Dashboard",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19330110-Expenses-Tracking-Dashboard",
  },
  {
    id: 2,
    image: IMG2,
    title: "Trackem - SaaS Mobile App",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19331866-Trackem-SaaS-Mobile-App",
  },
  {
    id: 3,
    image: IMG3,
    title: "Fragments iOS Wireframe Kit",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19332924-Fragments-iOS-Wireframe-Kit",
  },
  {
    id: 4,
    image: IMG4,
    title: "Task Management SaaS Website",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19328760-Task-Management-SaaS-Website",
  },
  {
    id: 5,
    image: IMG5,
    title: "E-car rental app design",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19125453-E-car-rental-app-design",
  },
  {
    id: 6,
    image: IMG6,
    title: "Memo - Redesign for Educational Platform Dashboard",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19329827-Memo-Redesign-for-Educational-Platform-Dashboard",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My React Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image, title, github, demo}) => {
            return(
              <article key={id }className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
