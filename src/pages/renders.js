import React from "react";
import HomeFeatured from "../components/HomeFeatured"
import Video from "../assets/videos/render.mp4";

const Renders = ({ dimensions }) => {
  return (
    <div className='page'>
      <div className='container'>
        <div className='row'>
          <h3>Logos, Carteles, Renders</h3>
        </div>
        <div className="row">
          <HomeFeatured dimensions={dimensions} video={Video} title="Logos, Carteles, Renders" subtitle="Digital Ignition" />
        </div>
      </div>
    </div>
  );
};

export default Renders;
