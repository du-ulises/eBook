import React from "react";
import HomeFeatured from "../components/HomeFeatured"
import Video from "../assets/videos/social.mp4";

const Social = ({ dimensions }) => {
  return (
    <div className='page'>
      <div className='container'>
        <div className='row'>
          <h3>Diseño de Redes Sociales</h3>
        </div>
        <div className="row">
          <HomeFeatured dimensions={dimensions} video={Video} title="Diseño de Redes Sociales" subtitle="Co-Worker" />
        </div>
      </div>
    </div>
  );
};

export default Social;
