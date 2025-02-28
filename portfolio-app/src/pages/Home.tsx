import { useEffect, useRef, useState } from 'react';
import { useLocation } from "react-router-dom";
import {motion, useInView, useAnimation} from 'framer-motion';
import './Home.css';

import styles from '../styles.module.css';
import art1 from '../images/web-art-cactus.png';
import art2 from '../images/web-art-flinders.png';
import me from '../images/saaiq.png';

function Home() {
  const artContainerRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState('100vh');
  const age = new Date().getFullYear() - 2003;

  useEffect(() => {
    const artContainer = artContainerRef.current;
    if (!artContainer) return;

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const {height} = entry.contentRect;
        console.log(height);
        setPageHeight(`calc(100vh - 75px - ${height}px)`);
      }
    }
    );
    observer.observe(artContainer);
    return () => observer.disconnect();
  },[]);

  return (
      <>
      <div className='artContainer' ref={artContainerRef}>
        <img src={art1} alt="cactus" className="art1"/>
        <img src={art2} alt="flinders" className="art2"/>
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
            initial={{translateY: -100}}
            whileInView={{translateY: 0}}
            transition={{duration: 1, delay: 0.1}}
            src={me}
            alt="Saaiq Ahmed"
            className="me"/>
            <motion.div
            className='aboutCard'
            initial={{translateY: -100}}
            whileInView={{ translateY: 0}}
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