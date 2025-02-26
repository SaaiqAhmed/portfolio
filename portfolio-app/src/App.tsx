import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './styles.module.css';
import Cursor from './components/cursor';
import Navbar from './components/navbar';

// import planet1 from './images/planet_1.png';
import art1 from './images/web-art-cactus.png';
import art2 from './images/web-art-flinders.png';

function App() {

  return (
    <div>
      <Navbar />
      <Cursor />
      <div className='artContainer'>
        <img src={art1} alt="cactus" className="art1" />
        <img src={art2} alt="flinders" className="art2" />
      </div>
      <div className={styles.Background}>
        <section className="Main">
          <div className="page">
            <header className="title">Saaiq Ahmed</header>
            <p className="subtitle">Data Science • Machine Learning • AI</p>
          </div>
        </section>
        <section className="AboutMe">
          <div className="page">
            <header className="title">About Me</header>
            <p className="subtitle">I am a data scientist with a passion for machine learning and AI. I have a background in computer science and mathematics, and I am always looking for new ways to apply my skills to solve real-world problems.</p>
            <p className="subtitle">
              I have experience working with a variety of data types, including structured and unstructured data, and I am comfortable working with both small and large datasets. I am proficient in Python, R, and SQL, 
              and I have experience working with a variety of machine learning libraries, including scikit-learn, TensorFlow, and Keras.
              h doadhsfo baedsfkjlbsd fkjbsdkjf hsofju hweof hselejf hsdoljdhf n lk;hfl;jsdhf ljsdf lad fljsbhdfljshf lojhsgljhsglk hsadljf nb sdljkf nsdaljfhn sdljgf hsdig hsdlkj hsadljfs
              desfffffffffffffffffffffffffffffff 
              I have experience working with a variety of data types, including structured and unstructured data, and I am comfortable working with both small and large datasets. I am proficient in Python, R, and SQL, 
              and I have experience working with a variety of machine learning libraries, including scikit-learn, TensorFlow, and Keras.
              h doadhsfo baedsfkjlbsd fkjbsdkjf hsofju hweof hselejf hsdoljdhf n lk;hfl;jsdhf ljsdf lad fljsbhdfljshf lojhsgljhsglk hsadljf nb sdljkf nsdaljfhn sdljgf hsdig hsdlkj hsadljfs
              desfffffffffffffffffffffffffffffff
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
