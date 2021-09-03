import React, {useState, useEffect} from 'react';
import styles from './randomadvice.module.css';

function RandomAdvice() {
  let [advice, setAdvice] = useState(null);
  

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => data.slip)
    .then(data => setAdvice(data.advice))

    // fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,explicit&type=single")
    // .then(response => response.json())
    // .then(data => setJoke(data.joke))

  },[]);

  return (
    <>
    <div className={styles.advice}> 
      {advice ? <div>{advice}</div> : 'loading...'}
    </div><br/>

    {/* <div className={styles.advice}> 
      {joke ? <div>{joke}</div> : 'loading...'}
    </div> */}
    </>
  );
}

export default RandomAdvice;
