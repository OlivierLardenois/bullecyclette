import * as React from "react";
import type { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <link
      key="retroking"
      rel="preload"
      href="/fonts/Retroking.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
    <link
      key="the-rughton-script"
      rel="preload"
      href="/fonts/The-Rughton-Script.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
    <link
      key="veteran-typewriter"
      rel="preload"
      href="/fonts/Veteran-Typewriter.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
  ]);
};
