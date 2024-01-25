import React from "react";

type videoProps = {
  videoSrcURL: string;
  videoTitle: string;
  width: string;
  height: string;
};

const Video: React.FC<videoProps> = ({
  videoSrcURL,
  videoTitle,
  width,
  height,
}) => (
  <iframe
    src={videoSrcURL}
    title={videoTitle}
    width={width}
    height={height}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className="m-auto"
  ></iframe>
);
export default Video;
