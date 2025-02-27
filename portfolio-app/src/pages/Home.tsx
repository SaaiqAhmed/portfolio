import { useEffect, useRef, useState } from 'react';
import { useLocation } from "react-router-dom";
import {motion, useInView, useAnimation} from 'framer-motion';
import './Home.css';

import styles from '../styles.module.css';
import art1 from '../images/web-art-cactus.png';
import art2 from '../images/web-art-flinders.png';
import me from '../images/saaiq.png';

function Home() {
  // const ref = useRef(null);
  // const isInView = useInView(ref, {once: true});
  // const mainControls = useAnimation();

  const artContainerRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState(0);
  const [pageHeight, setPageHeight] = useState("100vh");
  const totalImages = 2;
  const location = useLocation();
  const handleImageLoad = () => {setLoadedImages(loadedImages + 1);};
  const updateHeight = () => {
    if (artContainerRef.current) {
      const artHeight = artContainerRef.current.clientHeight;
      setPageHeight(`calc(100vh - 75px - ${artHeight}px)`);
    }
  };

  const age = new Date().getFullYear() - 2003;

  // useEffect(() => {
  //   if (isInView) {
  //     mainControls.start("visible");
  //   }
  // }, [isInView]);

  useEffect(() => {
    if (loadedImages === totalImages) {
      updateHeight();

      const handleResize = () => {
        updateHeight();
      };

      window.addEventListener("resize", updateHeight); // Update on resize

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [loadedImages]);

  // Recalculate height when the route (page) changes.
  useEffect(() => {
    console.log("Loaded images: ", loadedImages);
    if (location.pathname === "/home" && loadedImages === totalImages) {
      updateHeight();
    }
  }, [location.pathname, loadedImages]);

  return (
      <>
      <div className='artContainer' ref={artContainerRef}>
        <img src={art1} alt="cactus" className="art1" onLoad={handleImageLoad} />
        <img src={art2} alt="flinders" className="art2" onLoad={handleImageLoad} />
      </div>
      <div className={styles.Background}>
        <section>
          <div className="page" style={{ height: pageHeight }}>
            <motion.header 
              className="title"
              initial={{opacity: 0, translateY: -100}}
              whileInView={{opacity: 1, translateY: 0}}
              transition={{duration: 1, delay: 0.1}}>
                Saaiq Ahmed
            </motion.header>
            <motion.p
              className="subtitle"
              initial={{opacity: 0, translateY: -100}}
              whileInView={{opacity: 1, translateY: 0}}
              transition={{duration: 1, delay: 0.1}}>
                Data Science • Machine Learning • AI
            </motion.p>
          </div>
        </section>
        <section>
          <div className="page about" style={{ height: pageHeight }}>
            <motion.img
            initial={{opacity: 0, translateY: -10}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1, delay: 0.1}}
            src={me}
            alt="Saaiq Ahmed"
            className="me"/>
            <motion.div
            className='aboutCard'
            initial={{opacity: 0, translateY: -10}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1, delay: 0.1}}>
              <p className='aboutText'>Test {age}</p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;