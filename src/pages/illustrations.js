import React from "react";
import HomeFeatured from "../components/HomeFeatured";
import Video from "../assets/videos/reel.mp4";

const Illustrations = ({ dimensions }) => {
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <h3>Ilustraciones-Bocetos</h3>
        </div>
        <div className="row">
          <HomeFeatured
            dimensions={dimensions}
            video={Video}
            title={
              dimensions.width < 768
                ? "Ilustra-ciones & Bocetos"
                : "Ilustraciones & Bocetos"
            }
            subtitle="Reels"
          />
        </div>
      </div>
    </div>
  );
};

export default Illustrations;
