import React, { useState, useEffect } from "react";
import MusicFile from "@components/lobby/music/ByInfraction.mp3";
import { MdMusicOff, MdMusicNote } from "react-icons/md";

const LobbySound = () => {
  const [audioMuted, setAudioMuted] = useState(true);
  const [audio, setAudio] = useState(null);

  // This effect will run once after the component mounts to initialize the audio
  useEffect(() => {
    const newAudio = new Audio(MusicFile);
    newAudio.loop = true;
    setAudio(newAudio);
  }, []);

  // This effect will run every time audioMuted changes
  useEffect(() => {
    if (audio) {
      audio.muted = audioMuted;
      if (!audioMuted) {
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
          // Automatically mute if there was an issue playing
          setAudioMuted(true);
        });
      } else {
        audio.pause();
      }
    }
  }, [audio, audioMuted]);

  const toggleAudio = () => {
    setAudioMuted(!audioMuted);
  };

  return (
    <div className="p-2" onClick={toggleAudio}>
      {audioMuted ? <MdMusicOff size={24} /> : <MdMusicNote size={24} />}
    </div>
  );
};

export default LobbySound;
