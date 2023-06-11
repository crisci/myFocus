import React, { useRef } from 'react';

function AudioPlayer() {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <div>
      <audio ref={audioRef} src="../audio/level_up.mp3" />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default AudioPlayer;
