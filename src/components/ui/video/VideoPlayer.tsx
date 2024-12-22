import React from 'react';
import VideoControls from './VideoControls';
import { useVideoPlayer } from './useVideoPlayer';

export default function VideoPlayer() {
  const { isPlaying, isHovered, handlePlay, handleHover } = useVideoPlayer();

  // Using a reliable CDN-hosted video
  const videoUrl = 'https://cdn.coverr.co/videos/coverr-business-meeting-in-modern-office-5435/1080p.mp4';
  const posterUrl = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200';

  return (
    <div className="max-w-[400px] mx-auto">
      <div 
        className="hover-scale aspect-[9/16] bg-gradient-to-br from-black/80 to-[#FF0000]/20 rounded-xl relative overflow-hidden border border-[#FF0000]/20"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          src={videoUrl}
          poster={posterUrl}
          onClick={handlePlay}
          playsInline
          preload="metadata"
        />
        
        <VideoControls 
          isPlaying={isPlaying} 
          isHovered={isHovered}
          onPlayPause={handlePlay}
        />
      </div>
    </div>
  );
}