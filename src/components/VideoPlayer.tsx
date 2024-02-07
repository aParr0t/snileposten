"use client";

import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoPlayer({
  src,
  className,
  style,
}: {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={className} style={{ ...style }}>
      <ReactPlayer
        width="500px"
        height="281px"
        style={{ maxWidth: "100%" }}
        url={src}
        controls={true}
        light={false} // light is usefull incase of dark mode
        pip={true} // picture in picture
      />
      <source src={src} type="video/mp4" />
    </div>
  );
}
