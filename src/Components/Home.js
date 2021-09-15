import React, { useState, useEffect } from "react";
import "./../index.css";
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const contentVariants = {
  initial: {
    translateY: "200vh",
    opacity: 0,
  },

  animate: {
    translateY: "0vh",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const childrenVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      delay: 0.5,
    },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: { duration: 0.2 },
  },
};

const Home = () => {
  // State
  const [showHeadingOne, setShowHeadingOne] = useState(true);
  const [showHeadingTwo, setShowHeadingTwo] = useState(false);
  const [showHeadingThree, setShowHeadingThree] = useState(false);

  // Timeout
  useEffect(() => {
    setTimeout(() => {
      if (showHeadingOne) {
        setShowHeadingOne(false);
        setShowHeadingThree(false);
        setShowHeadingTwo(true);
      } else if (showHeadingTwo) {
        setShowHeadingOne(false);
        setShowHeadingTwo(false);
        setShowHeadingThree(true);
      } else {
        setShowHeadingOne(true);
        setShowHeadingTwo(false);
        setShowHeadingThree(false);
      }
    }, 3000);
  }, [showHeadingOne, showHeadingTwo]);

  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content-container"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <br />
        <h1 className="main-content">
          I’m Hunaiza
          <motion.span
            drag={true}
            dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
            className="hand"
            animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
            transition={{ yoyo: Infinity, duration: 1.7 }}
          >
            <span role="img" aria-label="Hand waving">
            💗
            </span>
          </motion.span>{" "}
        </h1>
        <h1>
          {" "}
          from Pakistan{" "}
        </h1>
        <div className="skill-animation">
          <AnimatePresence>
            {showHeadingOne && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                Microsoft Certified in JS
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showHeadingTwo && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                ReactJs Developer
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showHeadingThree && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                ReactJS / GatsbyJs Developer
              </motion.h2>
            )}
          </AnimatePresence>
        </div>

        

        <div className="button-wrapper">
          <button
            className="button contact-btn"
            onClick={() => scroll.scrollToBottom()}
          >
            Contact Me
          </button>
          <a
            href="https://github.com/hunaiza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">GitHub</button>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="svg-container"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img className="svg" src="https://scontent.fkhi28-1.fna.fbcdn.net/v/t1.6435-9/123646585_441017340634003_2864667567964278138_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH9tio5_vHpHtJu67gQVe0ij3nU7ZfrmWKPedTtl-uZYhcHK5hKDU3YoOxSdXHQADVHzmPtXYZuuy2EZcMKSIjE&_nc_ohc=cKfFQcN1oe8AX9AXXTw&_nc_ht=scontent.fkhi28-1.fna&oh=be4f1ba6bd15768300286f6d6930437e&oe=615F5DC3" style={{  borderRadius: "50%"}} alt="" />
      </motion.div>
    </section>
  );
};

export default Home;
