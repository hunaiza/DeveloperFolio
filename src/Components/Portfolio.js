import React from "react";
import "./../index.css";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading" >My Projects:</h1>
      <div className="projects-container">

        {/* 1st */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://memories-manager.netlify.app/"
          >
            <div className="project-images" id="ShoeApp"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Shoe Store</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://memories-manager.netlify.app/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 2nd */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://to-do-app-df6bf.firebaseapp.com/"
          >
            <div className="project-images" id="TodoApp"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Todo App</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://to-do-app-df6bf.firebaseapp.com/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3rd */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://nike-shoe-store.netlify.app/"
          >
            <div className="project-images" id="LeaderBoard"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Leader Board</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://nike-shoe-store.netlify.app/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
       
       {/* 4th */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://quizzapp-96a1f.firebaseapp.com/"
          >
            <div className="project-images" id="QuizzApp"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Quizz App</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://quizzapp-96a1f.firebaseapp.com/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
       
       {/* 5th */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://beautygroupofcompanies-58b41.web.app/"
          >
            <div className="project-images" id="BGOC"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Beauty Group of Companies</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://beautygroupofcompanies-58b41.web.app/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 6th */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://beautygroupofcompanies-58b41.web.app/"
          >
            <div className="project-images" id="Tour"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>California City's Tour Expense</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://beautygroupofcompanies-58b41.web.app/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
