import React from "react";
import HomeFeatured from "../components/HomeFeatured";
import Video from "../assets/videos/render.mp4";
import { SRLWrapper } from "simple-react-lightbox";

import img01 from "../assets/images/gallery/Logos, Carteles, Renders/img1.png";
import img02 from "../assets/images/gallery/Logos, Carteles, Renders/img2.png";
import img03 from "../assets/images/gallery/Logos, Carteles, Renders/img3.jpg";
import img04 from "../assets/images/gallery/Logos, Carteles, Renders/img4.jpg";
import img05 from "../assets/images/gallery/Logos, Carteles, Renders/img5.jpg";
import img06 from "../assets/images/gallery/Logos, Carteles, Renders/img6.jpg";
import img07 from "../assets/images/gallery/Logos, Carteles, Renders/img7.jpg";
import img08 from "../assets/images/gallery/Logos, Carteles, Renders/img8.png";
import img09 from "../assets/images/gallery/Logos, Carteles, Renders/img9.png";

const captionOne = (
  <div class="myCustomCaptionOne">
    Soluciones inovadoras <span>Originalidad...</span>
  </div>
);
const captionTwo = (
  <div class="myCustomCaptionTwo">
    ...lost and wandering she had to <span>make a choice...</span>
  </div>
);
const captionThree = (
  <a
    href="http://www.simple-react-lightbox.dev"
    target="__blank"
    class="SRLCustomCaption myCustomButton"
  >
    Help her make a choice
  </a>
);

const customCaptions = [
  { id: 0, caption: captionOne },
  { id: 1, caption: captionOne },
  { id: 2, caption: captionOne },
  { id: 3, caption: captionOne },
  { id: 4, caption: captionOne },
  { id: 5, caption: captionOne },
  { id: 6, caption: captionOne },
  { id: 7, caption: captionOne },
  { id: 8, caption: captionOne },
  { id: 9, caption: captionOne },
];

const options = {
  buttons: {
    iconPadding: "7px",
    iconColor: "#FFF",
  },
  settings: {
    overlayColor: "rgba(0, 0, 0, 0.9)",
    transitionTimingFunction: "ease-in-out",
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: [0.25, 0.75, 0.5, 1],
    slideAnimationType: "slide",
    disablePanzoom: true,
    disableWheelControls: true,
    autoplaySpeed: 5000,
    hideControlsAfter: false,
  },
  progressBar: {
    height: "3px",
    fillColor: "#FFF",
    backgroundColor: "#33673B",
  },
};

const Renders = ({ dimensions }) => {
  return (
    <div className="page">
      <div className="container">
        <SRLWrapper customCaptions={customCaptions} options={options}>
          <div className="row">
            <div className="row-gallery">
              <div className="col-4">
                <img src={img01} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img02} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img03} className="img-gallery" alt="" />
              </div>
              <div className="col-6">
                <img src={img06} className="img-gallery" alt="" />
              </div>
              <div className="col-6">
                <img src={img07} className="img-gallery" alt="" />
              </div>
              <div className="col-3">
                <img src={img08} className="img-gallery" alt="" />
              </div>
              <div className="col-3">
                <img src={img04} className="img-gallery" alt="" />
              </div>
              <div className="col-3">
                <img src={img09} className="img-gallery" alt="" />
              </div>
              <div className="col-3">
                <img src={img05} className="img-gallery" alt="" />
              </div>
            </div>
          </div>
        </SRLWrapper>

        <div className="row">
          <HomeFeatured
            dimensions={dimensions}
            video={Video}
            title="Logos, Carteles, Renders"
            subtitle="Digital Ignition"
          />
        </div>
      </div>
    </div>
  );
};

export default Renders;
