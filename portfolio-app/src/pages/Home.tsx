import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import {motion, useInView, useAnimation} from 'framer-motion';
import './Home.css';

import styles from '../styles.module.css';
import art1 from '../images/web-art-cactus.png';
import art2 from '../images/web-art-flinders.png';
import me from '../images/saaiq.png';
import SlidesSection from '../components/slides';



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

                  <b><u>Technical Skills &nbsp; (Click for more details)</u></b>
                  <div className="skills">
                    <div className="skillCard">
                      <svg className='icon' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                        <rect x="10" y="0" width="20" height="40" rx="10" ry="5" fill="white"/>
                        <rect x="0" y="10" width="40" height="20" rx="5" ry="10" fill="white"/>
                        <circle cx="14.5" cy="5" r="1.85" fill="black"/>
                        <circle cx="25.5" cy="35" r="1.85" fill="black"/>
                        <line x1="10" y1="9.5" x2="20" y2="9.5" stroke="black"/>
                        <line x1="20" y1="30.5" x2="30" y2="30.5" stroke="black"/>
                        <path d="m 9.5,30 c 0,-10 2.5,-10 10,-10 8.5,0 11,0 11,-10" stroke="black" fill="none"/>
                      </svg>
                      <p>Python ● 9 Years</p>
                    </div>
                    <div className="skillCard">
                      <svg className='icon' xmlns="http://www.w3.org/2000/svg" version="1.1" id="mdi-language-r" viewBox="0 0 24 24">
                        <path fill="white" d="M12,4.29C6.5,4.29 2,7.29 2,11C2,14.28 5.56,17 10.24,17.58V19.71H13.65V17.59C14.5,17.5 15.29,17.34 16.04,17.11L17.42,19.71H21.28L18.96,15.8C20.83,14.58 22,12.87 22,11C22,7.29 17.5,4.29 12,4.29V4.29M13.53,6.91C17.73,6.91 20.83,8.31 20.83,11.5C20.83,13.21 19.91,14.41 18.41,15.15C18.32,15.1 18.24,15.05 18.19,15C17.83,14.84 17.23,14.66 17.23,14.66C17.23,14.66 20.21,14.44 20.21,11.47C20.21,8.5 17.09,8.45 17.09,8.45H10.24V15.61C7.69,14.87 5.93,13.3 5.93,11.5C5.93,8.96 9.33,6.91 13.53,6.91M13.68,10.89H15.75C15.75,10.89 16.7,10.84 16.7,11.83C16.7,12.8 15.75,12.8 15.75,12.8H13.68V10.89M13.65,15.3H14.57C14.75,15.3 14.84,15.35 15,15.5C15.13,15.6 15.27,15.79 15.39,15.96C14.84,16.03 14.26,16.06 13.65,16.06V15.3Z"/>
                      </svg>
                      <p>R ● 4 Years</p>
                    </div>
                    <div className="skillCard">
                      <svg className='icon' viewBox="-8.78 0 70 70" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="m 852.97077,1013.9363 c -6.55238,-0.4723 -13.02857,-2.1216 -17.00034,-4.3296 -2.26232,-1.2576 -3.98589,-2.8032 -4.66223,-4.1807 l -0.4024,-0.8196 0,-25.70807 0,-25.7081 0.31843,-0.6465 c 1.42297,-2.889 5.96432,-5.4935 12.30378,-7.0562 2.15195,-0.5305 5.2586,-1.0588 7.79304,-1.3252 2.58797,-0.2721 9.44765,-0.2307 12.02919,0.073 6.86123,0.8061 12.69967,2.6108 16.29768,5.0377 1.38756,0.9359 2.81137,2.4334 3.29371,3.4642 l 0.41358,0.8838 -0.0354,25.6303 -0.0354,25.63047 -0.33195,0.6744 c -0.18257,0.3709 -0.73406,1.1007 -1.22553,1.6216 -2.99181,3.1715 -9.40919,5.5176 -17.8267,6.5172 -1.71567,0.2038 -9.16916,0.3686 -10.92937,0.2417 z m 12.07501,-22.02839 c -0.0252,-0.0657 -1.00472,-0.93831 -2.17671,-1.93922 -1.17199,-1.00091 -2.18138,-1.86687 -2.24309,-1.92436 -0.0617,-0.0575 0.15481,-0.26106 0.48117,-0.45237 0.32635,-0.19131 0.95163,-0.7235 1.3895,-1.18265 1.2805,-1.34272 1.88466,-3.00131 1.88466,-5.17388 0,-2.1388 -0.65162,-3.8645 -1.95671,-5.1818 -1.31533,-1.3278 -2.82554,-1.8983 -5.02486,-1.8983 -3.39007,0 -5.99368,1.9781 -6.82468,5.1851 -0.28586,1.1031 -0.28432,3.33211 0.003,4.31023 0.74941,2.55136 2.79044,4.40434 5.33062,4.83946 0.8596,0.14724 0.97605,0.21071 1.5621,0.85144 0.34829,0.38078 1.06301,1.14085 1.58827,1.68904 l 0.95501,0.9967 2.53878,0 c 1.39633,0 2.51816,-0.0537 2.49296,-0.11939 z m -8.70653,-7.10848 c -0.61119,-0.31868 -0.84225,-0.56599 -1.19079,-1.27453 -0.26919,-0.54724 -0.31522,-0.85851 -0.31824,-2.15197 -0.003,-1.3143 0.0388,-1.5983 0.31987,-2.169 0.45985,-0.9339 1.09355,-1.376 2.07384,-1.4469 1.36454,-0.099 2.15217,0.5707 2.56498,2.1801 0.50612,1.97321 -0.0504,4.07107 -1.26471,4.76729 -0.63707,0.36527 -1.58737,0.40659 -2.18495,0.095 z m -11.25315,3.66269 c 2.66179,-0.5048 4.1728,-2.0528 4.1728,-4.27495 0,-1.97137 -0.97548,-3.12004 -3.6716,-4.32364 -1.54338,-0.689 -2.10241,-1.1215 -2.10241,-1.6268 0,-0.4188 0.53052,-0.8777 1.14813,-0.993 0.60302,-0.1126 2.20237,0.1652 3.14683,0.5467 l 0.79167,0.3198 0,-1.7524 0,-1.7525 -0.85923,-0.1906 c -0.53103,-0.1178 -1.64689,-0.1885 -2.92137,-0.1849 -1.80528,0 -2.15881,0.044 -2.83818,0.3138 -1.98445,0.7878 -2.92613,2.1298 -2.91107,4.1485 0.0141,1.8898 1.01108,3.06864 3.49227,4.12912 1.46399,0.62572 2.05076,1.10218 2.05076,1.66522 0,1.1965 -1.99362,1.34375 -4.10437,0.30315 -0.57805,-0.28498 -1.09739,-0.54137 -1.1541,-0.56976 -0.0567,-0.0284 -0.10311,0.79023 -0.10311,1.81917 0,1.86239 0.002,1.87137 0.33919,1.99974 1.26979,0.48278 4.07626,0.69787 5.52379,0.42335 z m 30.4308,-1.72766 0,-1.58098 -2.40584,0 -2.40583,0 0,-5.43035 0,-5.4303 -2.13089,0 -2.13088,0 0,7.0113 0,7.01131 4.53672,0 4.53672,0 0,-1.58098 z m -14.84745,-27.70503 c 4.23447,-0.2937 7.4086,-0.8482 10.20178,-1.7821 2.78264,-0.9304 4.42643,-2.0562 4.79413,-3.2834 0.14166,-0.4729 0.13146,-0.6523 -0.0665,-1.1708 -0.88775,-2.3245 -5.84694,-4.1104 -13.42493,-4.8345 -3.24154,-0.3098 -9.13671,-0.2094 -12.22745,0.2081 -4.71604,0.6372 -8.54333,1.8208 -10.2451,3.1683 -3.44251,2.726 0.19793,5.7242 8.66397,7.1354 3.67084,0.6119 8.42674,0.828 12.30414,0.559 z" fill="#ffffff" transform="translate(-830.906 -943.981)"></path>
                        </g>
                      </svg>
                      <p>SQL ● 7 Years</p>
                    </div>
                    <div className="skillCard">
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="white">
                      <g>
                        <path d="M24.646,26.121c-1.302-2.014-2.242-3.68-3.548-6.817c-2.208-5.306,13.433-10.1,7.087-19.306c2.75,6.363-9.863,10.291-11.034,15.593C16.075,20.462,24.639,26.121,24.646,26.121z" fill="#bbbbbb"/>
                        <path d="M24.942,16.583c-0.251,3.148,2.903,4.828,2.993,7.119c0.073,1.871-1.885,3.428-1.885,3.428s3.552-0.667,4.662-3.524c1.231-3.167-2.386-5.331-2.019-7.867c0.351-2.426,7.858-6.928,7.858-6.928S25.505,9.511,24.942,16.583z" fill="#bbbbbb"/>
                        <path d="M35.625,26.315c2.283-0.492,4.211,0.904,4.211,2.515c0,3.624-5.236,7.049-5.236,7.049s8.108-0.927,8.108-6.881C42.708,25.065,38.725,24.084,35.625,26.315z"/>
                        <path d="M31.779,29.24c0,0,2.529-1.73,3.201-2.376c-6.202,1.264-20.36,1.432-20.36,0.337c0-1.009,4.563-2.049,4.563-2.049s-10.12-0.139-10.12,2.726C9.064,30.869,22.315,31.08,31.779,29.24z"/>
                        <path d="M30.223,31.96c-5.867,1.878-16.685,1.276-13.483-1.238c-1.554,0-3.87,1.202-3.87,2.357c0,2.325,11.693,4.115,20.349,0.719L30.223,31.96z"/>
                        <path d="M18.18,35.922c-2.128,0-3.509,1.315-3.509,2.28c0,2.985,12.708,3.286,17.744,0.251l-3.2-2.037C25.454,38.007,16.008,38.222,18.18,35.922z"/>
                        <path d="M40.89,40.924c0-1.167-1.374-1.721-1.87-1.986c2.901,6.718-29.052,6.196-29.052,2.233c0-0.904,2.347-1.787,4.525-1.365l-1.848-1.049c-4.335-0.655-7.279,1.171-7.279,2.648C5.365,48.281,40.89,47.95,40.89,40.924z"/>
                        <path d="M44.635,43.25c-5.4,5.119-19.089,6.984-32.853,3.823C25.545,52.704,44.567,49.536,44.635,43.25z"/>
                        </g>
                    </svg>
                      <p>Java ● 4 Years</p>
                    </div>
                    <div className="skillCard">
                      <svg className='icon square' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_iconCarrier">
                          <path d="M0 0h256v256H0V0z" fill="#ffffff"></path>
                          <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path>
                        </g>
                      </svg>
                      <p>JavaScript <br/> ● 9 Years</p>
                    </div>
                    <div className="skillCard">
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.000089 42.000031" version="1.1" id="svg10">
                      <path fill="#bbbbbb" fill-rule="evenodd" d="m 17.903,0.28628166 c 0.679,-0.381 1.515,-0.381 2.193,0 C 23.451,2.1692817 33.547,7.8372817 36.903,9.7202817 37.582,10.100282 38,10.804282 38,11.566282 c 0,3.766 0,15.101 0,18.867 0,0.762 -0.418,1.466 -1.097,1.847 -3.355,1.883 -13.451,7.551 -16.807,9.434 -0.679,0.381 -1.515,0.381 -2.193,0 -3.355,-1.883 -13.451,-7.551 -16.807,-9.434 -0.678,-0.381 -1.096,-1.084 -1.096,-1.846 0,-3.766 0,-15.101 0,-18.867 0,-0.762 0.418,-1.466 1.097,-1.8470003 3.354,-1.883 13.452,-7.551 16.806,-9.43400004 z" clip-rule="evenodd" id="path2"/>
                      <path fill="#ffffff" fill-rule="evenodd" d="m 0.304,31.404282 c -0.266,-0.356 -0.304,-0.694 -0.304,-1.149 0,-3.744 0,-15.014 0,-18.759 0,-0.758 0.417,-1.458 1.094,-1.8360003 3.343,-1.872 13.405,-7.507 16.748,-9.38000004 0.677,-0.379 1.594,-0.371 2.271,0.008 3.343,1.87200004 13.371,7.45900004 16.714,9.33100004 0.27,0.152 0.476,0.335 0.66,0.5760003 z" clip-rule="evenodd" id="path4"/>
                      <path fill="#000000" fill-rule="evenodd" d="m 19,7.0002817 c 7.727,0 14,6.2730003 14,14.0000003 0,7.727 -6.273,14 -14,14 -7.727,0 -14,-6.273 -14,-14 0,-7.727 6.273,-14.0000003 14,-14.0000003 z m 0,7.0000003 c 3.863,0 7,3.136 7,7 0,3.863 -3.137,7 -7,7 -3.863,0 -7,-3.137 -7,-7 0,-3.864 3.136,-7 7,-7 z" clip-rule="evenodd" id="path6"/>
                      <path fill="#eeeeee" fill-rule="evenodd" d="m 37.485,10.205282 c 0.516,0.483 0.506,1.211 0.506,1.784 0,3.795 -0.032,14.589 0.009,18.384 0.004,0.396 -0.127,0.813 -0.323,1.127 l -19.084,-10.5 z" clip-rule="evenodd" id="path8" />
                    </svg>
                      <p>C ● 5 Years</p>
                    </div>
                    <div className="skillCard">
                      <svg className='icon square' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 234">
                          <g id="Surfaces">
                            <g id="Photo_Surface">
                              <g id="Outline_no_shadow">
                                <path d="M42.5,0h155C221,0,240,19,240,42.5v149c0,23.5-19,42.5-42.5,42.5h-155C19,234,0,215,0,191.5v-149      C0,19,19,0,42.5,0z" fill="white"/>
                              </g>
                            </g>
                          </g>
                          <g id="Outlined_Mnemonics_Logos">
                            <g id="Ps">
                              <path d="M54,164.1V61.2c0-0.7,0.3-1.1,1-1.1c1.7,0,3.3,0,5.6-0.1c2.4-0.1,4.9-0.1,7.6-0.2c2.7-0.1,5.6-0.1,8.7-0.2     c3.1-0.1,6.1-0.1,9.1-0.1c8.2,0,15,1,20.6,3.1c5,1.7,9.6,4.5,13.4,8.2c3.2,3.2,5.7,7.1,7.3,11.4c1.5,4.2,2.3,8.5,2.3,13     c0,8.6-2,15.7-6,21.3c-4,5.6-9.6,9.8-16.1,12.2c-6.8,2.5-14.3,3.4-22.5,3.4c-2.4,0-4,0-5-0.1c-1-0.1-2.4-0.1-4.3-0.1v32.1     c0.1,0.7-0.4,1.3-1.1,1.4c-0.1,0-0.2,0-0.4,0H55.2C54.4,165.4,54,165,54,164.1z M75.8,79.4V113c1.4,0.1,2.7,0.2,3.9,0.2H85     c3.9,0,7.8-0.6,11.5-1.8c3.2-0.9,6-2.8,8.2-5.3c2.1-2.5,3.1-5.9,3.1-10.3c0.1-3.1-0.7-6.2-2.3-8.9c-1.7-2.6-4.1-4.6-7-5.7     c-3.7-1.5-7.7-2.1-11.8-2c-2.6,0-4.9,0-6.8,0.1C77.9,79.2,76.5,79.3,75.8,79.4L75.8,79.4z"/>
                              <path d="M192,106.9c-3-1.6-6.2-2.7-9.6-3.4c-3.7-0.8-7.4-1.3-11.2-1.3c-2-0.1-4.1,0.2-6,0.7c-1.3,0.3-2.4,1-3.1,2     c-0.5,0.8-0.8,1.8-0.8,2.7c0,0.9,0.4,1.8,1,2.6c0.9,1.1,2.1,2,3.4,2.7c2.3,1.2,4.7,2.3,7.1,3.3c5.4,1.8,10.6,4.3,15.4,7.3     c3.3,2.1,6,4.9,7.9,8.3c1.6,3.2,2.4,6.7,2.3,10.3c0.1,4.7-1.3,9.4-3.9,13.3c-2.8,4-6.7,7.1-11.2,8.9c-4.9,2.1-10.9,3.2-18.1,3.2     c-4.6,0-9.1-0.4-13.6-1.3c-3.5-0.6-7-1.7-10.2-3.2c-0.7-0.4-1.2-1.1-1.1-1.9v-17.4c0-0.3,0.1-0.7,0.4-0.9     c0.3-0.2,0.6-0.1,0.9,0.1c3.9,2.3,8,3.9,12.4,4.9c3.8,1,7.8,1.5,11.8,1.5c3.8,0,6.5-0.5,8.3-1.4c1.6-0.7,2.7-2.4,2.7-4.2     c0-1.4-0.8-2.7-2.4-4c-1.6-1.3-4.9-2.8-9.8-4.7c-5.1-1.8-9.8-4.2-14.2-7.2c-3.1-2.2-5.7-5.1-7.6-8.5c-1.6-3.2-2.4-6.7-2.3-10.2     c0-4.3,1.2-8.4,3.4-12.1c2.5-4,6.2-7.2,10.5-9.2c4.7-2.4,10.6-3.5,17.7-3.5c4.1,0,8.3,0.3,12.4,0.9c3,0.4,5.9,1.2,8.6,2.3     c0.4,0.1,0.8,0.5,1,0.9c0.1,0.4,0.2,0.8,0.2,1.2v16.3c0,0.4-0.2,0.8-0.5,1C192.9,107.1,192.4,107.1,192,106.9z"/>
                            </g>
                          </g>
                      </svg>
                      <p>Photoshop ● 12 Years</p>
                    </div>
                    <div className="skillCard">
                      <svg className='icon square' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 234">
                        <path fill="#ffffff" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z"/>
                        <path fill="#000000" d="M116 140H78.8l-7.6 23.5c-.2.9-1 1.5-1.9 1.4H50.5c-1.1 0-1.4-.6-1.1-1.8l32.2-92.7c.3-1 .6-2.1 1-3.3.4-2.1.6-4.3.6-6.5-.1-.5.3-1 .8-1.1h25.9c.8 0 1.2.3 1.3.8l36.5 103c.3 1.1 0 1.6-1 1.6h-20.9c-.7.1-1.4-.4-1.6-1.1L116 140zm-31.4-20.3H110c-.6-2.1-1.4-4.6-2.3-7.2-.9-2.7-1.8-5.6-2.7-8.6-1-3.1-1.9-6.1-2.9-9.2s-1.9-6-2.7-8.9c-.8-2.8-1.5-5.4-2.2-7.8H97c-.9 4.3-2 8.6-3.4 12.9-1.5 4.8-3 9.8-4.6 14.8-1.4 5.1-2.9 9.8-4.4 14zM170 77c-3.3.1-6.5-1.2-8.9-3.5-2.3-2.5-3.5-5.8-3.4-9.2-.1-3.4 1.2-6.6 3.6-8.9s5.6-3.5 8.9-3.5c3.9 0 6.9 1.2 9.1 3.5 2.2 2.4 3.4 5.6 3.3 8.9.1 3.4-1.1 6.7-3.5 9.2-2.3 2.4-5.7 3.7-9.1 3.5zm-11.2 86.8v-77c0-1 .4-1.4 1.3-1.4h19.8c.9 0 1.3.5 1.3 1.4v77c0 1.1-.4 1.6-1.3 1.6h-19.6c-1 0-1.5-.6-1.5-1.6z"/>
                      </svg>
                      <p>Illustrator ● 7 Years</p>
                    </div>
                  </div>
                </p>
                <p className="normalText"><br/>For More Information:</p>
                <div className="buttons">
                    <NavLink className="button normalText" to='/about'>
                      Learn More
                    </NavLink>
                    <a className="button normalText" href="https://www.linkedin.com/in/saaiq-ahmed-364b5a219/">
                      LinkedIn
                    </a>
                    <a className="button normalText" href='../files/SaaiqAhmed_resume.docx' download={true}>
                      Resume
                    </a>
                  </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section>
          <div className='page projects' style={{height: pageHeight}}>
            <motion.header 
            className='header'
            initial={{opacity: 0, translateY: -100}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1, delay: 0.5}}>
              Projects
            </motion.header>
            <SlidesSection />
            <NavLink className="button normalText" to='/about'>More Projects</NavLink>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;