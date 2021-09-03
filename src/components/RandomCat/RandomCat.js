import React, {useState, useEffect} from 'react';
import styles from './randomcat.module.css';

function RandomCat() {
  let [catImage, setCatImage] = useState(null);
  let [catFact, setCatFact] = useState(null);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?size=full")
    .then(response => response.json())
    .then(data => setCatImage(data[0].url));

    fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => setCatFact(data.fact))
  },[]);

  return (
    <div className={styles.randomcat}>
      {catImage ? <img src={catImage} alt="cat"></img> : 'loading...'}<br/><br/>
      Random Cat Fact: <br/> <br/>
      <div className={styles.cat}>
      {catFact ? <div>{catFact}</div> : 'loading...'}
      </div>
    </div>
  );
}

export default RandomCat;


