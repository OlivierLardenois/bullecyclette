import React from "react";

type videoProps = {
  videoSrcURL: string;
  videoTitle: string;
};

const Video: React.FC<videoProps> = ({ videoSrcURL, videoTitle }) => (
  <iframe
    className="w-full h-full aspect-video "
    src={videoSrcURL}
    title={videoTitle}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
    allowFullScreen
  />
);
export default Video;
