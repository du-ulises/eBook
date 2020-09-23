import React from "react";
import HomeFeatured from "../components/HomeFeatured"
import Video from "../assets/videos/store.mp4";

const CaseStudies = ({ dimensions }) => {
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <h3>Diseño Web</h3>
        </div>
        <div className="row">
          <HomeFeatured dimensions={dimensions} video={Video} title="Diseño Web" subtitle="E-commerce" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
