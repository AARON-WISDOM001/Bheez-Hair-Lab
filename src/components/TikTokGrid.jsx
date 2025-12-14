// TikTokGrid.jsx
import React from "react";

// Your existing convert function
function convertTikTok(url) {
  // extract video ID
  const match = url.match(/video\/(\d+)/);
  if (!match) return null;
  const id = match[1];
  return `https://www.tiktok.com/embed/${id}`;
}

export default function TikTokGrid() {
  // 4 TikTok video URLs
  const videoLinks = [
    "https://www.tiktok.com/@bheezurumshairlab/video/7571542015335337224?is_from_webapp=1&sender_device=pc",
    "https://www.tiktok.com/@bheezurumshairlab/video/7573029021647195410?is_from_webapp=1&sender_device=pc",
    "https://www.tiktok.com/@bheezurumshairlab/video/7548556638731504903?is_from_webapp=1&sender_device=pc",
    "https://www.tiktok.com/@bheezurumshairlab/video/7527323764208504069?is_from_webapp=1&sender_device=pc",
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center">
      {videoLinks.map((link, index) => {
        const embedURL = convertTikTok(link);

        return (
          <div
            className="w-[325px] h-[475px] overflow-hidden rounded-xl"
            key={index}
          >
            <iframe
              src={embedURL}
              width="100%"
              height="100%"
              allowFullScreen
              className="rounded-xl"
              style={{ objectFit: "cover" }}
            ></iframe>
          </div>
        );
      })}
    </div>
  );
}
