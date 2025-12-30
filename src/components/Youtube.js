import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function YouTube({ id, title }) {
  return (
    <BrowserOnly fallback={<div>Loading video…</div>}>
      {() => {
        require("lite-youtube-embed");
        require("lite-youtube-embed/src/lite-yt-embed.css");

        return (
          <div className="Youtube" style={{ aspectRatio: "16 / 9" }}>
            <lite-youtube videoid={id} playlabel={title || "Play video"} />
          </div>
        );
      }}
    </BrowserOnly>
  );
}
