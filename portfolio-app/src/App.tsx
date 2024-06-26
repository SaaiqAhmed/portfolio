import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './styles.module.css';
import Cursor from './components/cursor';

function App() {

  return (
    <div className="App">
      <div className={styles.Background}>
          <header className="title">Saaiq Ahmed</header>
          <p className="subtitle">Data Science • Machine Learning • AI</p>
      </div>
      <Cursor />
    </div>
  );
}

export default App;
