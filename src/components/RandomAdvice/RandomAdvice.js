import React, {useState, useEffect} from 'react';
import styles from './randomadvice.module.css';

function RandomAdvice() {
  let [advice, setAdvice] = useState(null);
  

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => data.slip)
    .then(data => setAdvice(data.advice))

  },[]);

  return (
    <>
    <div className={styles.advice}> 
      {advice ? <div>{advice}</div> : 'loading...'}
    </div><br/>
    </>
  );
}

export default RandomAdvice;
