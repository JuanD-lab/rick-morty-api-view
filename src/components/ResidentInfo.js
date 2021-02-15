import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';

function ResidentInfo({arrayCharactersUrl}) {
  const [characterInfo, setCharacterInfo] = useState([])
  
  useEffect(() => {
    const promise = axios(arrayCharactersUrl)
    promise.then((response) => {
      console.log(response);
      setCharacterInfo([response.data.name, response.data.image, response.data.status, response.data.origin.name, response.data.episode.length])
  })
  }, [arrayCharactersUrl])

  return (
    <div className="ResidentInfo">
      <h2>{characterInfo[0]}</h2>
      <img src={characterInfo[1]}/>
      <h3>{characterInfo[2]}</h3>
      <h3>{characterInfo[3]}</h3>
      <h3>Episodes: {characterInfo[4]}</h3>
    </div>
  );
}

export default ResidentInfo;