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
      <img src={art1} alt="cactus" className="art art1" />
      <img src={art2} alt="flinders" className="art art2" />
      <div className={styles.Background}>
        <section className="Main">
          <header className="title">Saaiq Ahmed</header>
          <p className="subtitle">Data Science • Machine Learning • AI</p>
        </section>
        <section className="AboutMe">
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis, neque vel scelerisque pulvinar, ex nibh laoreet est, in commodo augue ex sed velit. Duis laoreet risus purus, ut lacinia metus euismod sed. Ut ut ligula erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nulla augue, rutrum egestas facilisis at, lobortis a quam. Suspendisse potenti. Etiam sit amet facilisis elit. Duis id leo leo. Vestibulum sed posuere metus.

  Cras cursus neque massa, non finibus dolor tincidunt eu. Quisque nec sodales felis. Ut pharetra ac nulla nec dignissim. Praesent ante justo, volutpat vitae dolor non, dapibus hendrerit sapien. Morbi porta ultricies dolor. Curabitur pharetra velit nisi, quis ultricies est vehicula sit amet. Ut mattis, erat vitae posuere aliquam, metus lectus iaculis tortor, a dignissim felis erat vel mauris. Nam placerat faucibus mi, at dictum tellus lobortis eget. Donec ac malesuada eros. Phasellus et metus vitae justo condimentum sodales id sit amet enim. Mauris nec ornare nulla, in tristique elit. Proin consectetur suscipit bibendum. Integer ornare tincidunt turpis sed porttitor.

  Pellentesque posuere elit quis tellus blandit, eu ornare leo scelerisque. Mauris luctus non ex et commodo. Aliquam eget odio scelerisque, commodo libero id, vehicula diam. Quisque convallis ipsum a orci sodales, a facilisis enim pellentesque. Nulla eget dui lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ullamcorper ligula in malesuada tempor. Mauris tortor sem, iaculis in vestibulum a, porttitor ac est. Aenean sit amet tristique ante. Maecenas est dui, tincidunt non iaculis et, sollicitudin sit amet risus. Sed vitae tortor a est suscipit venenatis a hendrerit libero. Integer hendrerit arcu eu nibh malesuada, et malesuada massa aliquet. Sed scelerisque posuere interdum. Suspendisse consequat id ipsum vel posuere. Mauris non quam eu quam ultrices efficitur. Pellentesque turpis libero, tempor viverra iaculis nec, imperdiet eget risus.

  Praesent non nisi lobortis, vestibulum tellus nec, sollicitudin tellus. Aenean placerat iaculis nisi eget ullamcorper. Vestibulum sit amet commodo libero. Cras in euismod ante. Sed in vestibulum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis eros sed nisl porttitor, laoreet placerat ante rutrum. Integer vestibulum lectus nec sem scelerisque tempus. In vel ex tempus, eleifend sapien nec, suscipit justo. Suspendisse feugiat purus ac metus pretium interdum. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sodales viverra lobortis. Maecenas auctor laoreet ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

  Cras viverra sem non metus laoreet, vitae elementum nulla ultricies. Suspendisse placerat luctus arcu, sit amet maximus diam pulvinar a. Pellentesque metus eros, condimentum id arcu facilisis, tempor sagittis erat. Cras eget elementum lacus. Nunc efficitur molestie ante sed sodales. Nullam tempus sed tellus vitae egestas. Duis euismod dolor nec vehicula facilisis.

  Nam vitae semper ipsum. Phasellus eget mi at arcu scelerisque pulvinar. Etiam condimentum arcu non nisi rhoncus posuere. Sed porta neque diam, et aliquet metus tincidunt eget. Nullam pharetra tellus ac maximus rutrum. Sed ut dignissim felis. Sed pellentesque magna nibh, quis suscipit augue luctus ut. Donec quis lectus egestas, tincidunt libero vel, tincidunt mi.

  Aliquam tincidunt porttitor ipsum, in iaculis nisl. Etiam egestas dictum elit vel ullamcorper. Sed tincidunt efficitur dui, eu dictum nulla porta id. Mauris fringilla vel massa in hendrerit. In eget odio rhoncus, sodales leo vitae, ullamcorper felis. Suspendisse potenti. Quisque blandit augue elit, quis vulputate dui blandit at. Sed nec dui venenatis libero volutpat vulputate vel et ligula. Curabitur at mauris a ipsum dignissim venenatis vel et turpis.

  Vestibulum pellentesque condimentum malesuada. Maecenas mattis at risus et interdum. In hac habitasse platea dictumst. Maecenas ut sem nunc. Integer at vestibulum justo, a viverra ligula. Pellentesque placerat dignissim aliquet. Aenean tempor egestas pretium. Nunc ut dolor tristique, porttitor ex molestie, faucibus odio. In in egestas odio, id vestibulum leo. Aliquam erat volutpat.

  Proin tristique ante et libero condimentum auctor. Nullam placerat magna et molestie placerat. Sed laoreet magna eget nibh aliquet venenatis at non turpis. Donec eget metus eu tellus pulvinar cursus quis sit amet nunc. Vivamus tempus mauris lorem, sed luctus tellus dictum in. Nulla non felis id lorem cursus finibus quis eget quam. Maecenas semper lacus at malesuada consequat.

  Suspendisse potenti. Fusce consectetur nisl posuere elit finibus malesuada. Donec nec ex pharetra, consequat turpis in, semper mi. Nullam sit amet pulvinar lorem. Nulla pulvinar vulputate nisl, eget commodo nisi suscipit et. Mauris venenatis, quam quis placerat efficitur, velit libero auctor mauris, non rutrum risus orci at massa. Vestibulum est nisi, mattis sed lobortis et, porta eget justo. Integer vehicula est in lorem cursus aliquam. Aliquam varius et ligula eu condimentum. Duis volutpat elementum dolor, ac luctus velit faucibus eu. Quisque imperdiet sem orci, in hendrerit orci sodales vel. Pellentesque quam libero, facilisis at scelerisque non, consequat ut nibh. </p>
        </section>
      </div>
    </div>
  );
}

export default App;
