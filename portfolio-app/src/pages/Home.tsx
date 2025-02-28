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
          <div className="page Main" style={{ height: pageHeight }}>
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
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1, delay: 0.1}}
            src={me}
            alt="Saaiq Ahmed"
            className="me"/>
            <motion.div
            className='aboutCard'
            initial={{opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 1, delay: 0.1}}>
              <div className="aboutText">
                <h1 className="heading1">Who Am I?</h1>
                <p className="normalText">
                  <b>Name:</b> &nbsp; Saaiq Ahmed
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Age:</b> &nbsp; {age} years old
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Location:</b> &nbsp; Melbourne, Australia<br/><br/>

                  <p>
                    I am a graduate data scientist currently both working part-time as a data cadet as well as finishing my final year of my masters.
                    I have a passion for new technologies and art while having a keen interest in machine learning and artificial intelligence field. 
                    I am always keen for new opportunities and challenges to further develop my skills and knowledge.
                  </p><br/>

                  <b><u>Education</u></b>
                  <ul>
                    <li>(2024 - 2025)&nbsp; Masters of Data Science, University of Melbourne</li>
                    <li>(2021 - 2023)&nbsp; Bachelor of Science, Data Science Major, University of Melbourne</li>
                  </ul><br/>

                  <b><u>Relevant Experience</u></b>
                  <ul>
                    <li>(Feb 2024 - Mar 2025)&nbsp; Data Cadet, Department of Defence</li>
                    <li>(Jul 2021 - Aug 2022)&nbsp; Graphic Designer, Scane Media</li>
                    <li>(Dec 2018 - Dec 2018)&nbsp; Student Intern, CSIRO</li>
                  </ul><br/>

                  <b><u>Professional Skills</u></b>
                  <p>[ADD SKILLS WITH ICONS HERE]</p>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;