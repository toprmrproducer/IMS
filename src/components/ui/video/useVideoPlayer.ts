import { useState } from 'react';

export function useVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlay = () => {
    const video = document.querySelector('video');
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleHover = (hover: boolean) => {
    setIsHovered(hover);
  };

  return {
    isPlaying,
    isHovered,
    handlePlay,
    handleHover
  };
}