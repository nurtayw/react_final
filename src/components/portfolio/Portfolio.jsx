import React from "react";
import IMG1 from "../../assets/mainPage.PNG";
import IMG2 from "../../assets/nextPrev.PNG";
import IMG3 from "../../assets/searchPage.jpg";
import IMG4 from "../../assets/clonenetflix.png";
import IMG5 from "../../assets/workPort.jpg";
import IMG6 from "../../assets/workPort2.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Laravel E-Shop",
      img: IMG1,
      description:
        "A comprehensive e-commerce application developed with Laravel, PostgreSQL, JavaScript, and Bootstrap. Features include product management, user authentication, and a shopping cart system.",
      technologies: "Laravel | PostgreSQL | Bootstrap",
      github: "https://github.com/nurtayw/LaravelShopProject",
    },
    {
      id: 2,
      title: "Website for Finding a Job in Laravel",
      img: IMG4,
      description:
        "A full-stack application built with Laravel, PostgreSQL, and PHP, designed to help users find job opportunities. Includes job listings, search functionality, and user profiles.",
      technologies: "Laravel | PostgreSQL | PHP",
      github: "https://github.com/nurtayw/AnyworkEmployment",
    },
    {
      id: 3,
      title: "Django E-Shop",
      img: IMG2,
      description:
        "An online store application created using Django, MySQL, JavaScript, and Bootstrap. Features include product listings, a shopping cart, and order management.",
      technologies: "Django | MySQL | JavaScript | Bootstrap",
      github: "https://github.com/nurtayw/Store",
    },
    {
      id: 4,
      title: "Django LMS",
      img: IMG3,
      description:
        "A Learning Management System (LMS) built with Django and PostgreSQL, providing features for course management, student enrollment, and progress tracking.",
      technologies: "Django | PostgreSQL",
      github: "https://github.com/nurtayw/DjangoPR",
    },
    {
      id: 5,
      title: "React Fake News",
      img: IMG5,
      description:
        "A web application developed with React, HTML, CSS, and Webpack to simulate a fake news website. Features include dynamic content rendering and user interactions.",
      technologies: "React | HTML&CSS | Webpack",
      github: "https://github.com/nurtayw/webpack_fake_news",
    },
    {
      id: 6,
      title: "Java E-Shop with SpringBoot",
      img: IMG6,
      description:
        "An e-commerce platform developed using Java and SpringBoot, with MySQL for data storage. Includes product management, user authentication, and a shopping cart system.",
      technologies: "Java | SpringBoot | MySQL",
      github: "https://github.com/nurtayw/eShop",
    },
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
