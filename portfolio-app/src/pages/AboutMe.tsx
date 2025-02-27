import React from "react";
import styles from '../styles.module.css';

function AboutMe() {
    return (
        <div className={styles.Background}>
            <section>
                <h1>About Me</h1>
                <p>
                    I am a data scientist with a passion for machine learning and AI. I have a background in computer science and mathematics, and I am always looking for new ways to apply my skills to solve real-world problems.
                </p>
                <p>
                    I have experience working with a variety of data types, including structured and unstructured data, and I am comfortable working with both small and large datasets. I am proficient in Python, R, and SQL, and I have experience working with a variety of machine learning libraries, including scikit-learn, TensorFlow, and Keras.
                </p>
            </section>
        </div>
    );
}

export default AboutMe;