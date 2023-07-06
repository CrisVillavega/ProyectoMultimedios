import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import backgroundMusic from './pieza.mp3';

const ComponenteConMusica = () => {
  const [isPlaying, setIsPlaying] = useState(false); 
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={backgroundMusic} />
      <button onClick={togglePlay}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default ComponenteConMusica;