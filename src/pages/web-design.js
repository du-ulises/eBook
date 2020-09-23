import React from "react";
import HomeFeatured from "../components/HomeFeatured";
import Video from "../assets/videos/store.mp4";
import { SRLWrapper } from "simple-react-lightbox";

import img01 from "../assets/images/gallery/Diseño Web/img1.png";
import img02 from "../assets/images/gallery/Diseño Web/img2.png";
import img03 from "../assets/images/gallery/Diseño Web/img3.png";
import img04 from "../assets/images/gallery/Diseño Web/img4.png";
import img05 from "../assets/images/gallery/Diseño Web/img5.png";
import img06 from "../assets/images/gallery/Diseño Web/img6.png";
import img10 from "../assets/images/gallery/Diseño Web/img10.png";
import img11 from "../assets/images/gallery/Diseño Web/img11.png";
import img12 from "../assets/images/gallery/Diseño Web/img12.png";
import img13 from "../assets/images/gallery/Diseño Web/img13.png";
import img14 from "../assets/images/gallery/Diseño Web/img14.png";
import img15 from "../assets/images/gallery/Diseño Web/img15.png";
import img16 from "../assets/images/gallery/Diseño Web/img16.png";
import img17 from "../assets/images/gallery/Diseño Web/img17.png";
import img18 from "../assets/images/gallery/Diseño Web/img18.png";
import img19 from "../assets/images/gallery/Diseño Web/img19.png";

const captionOne = (
  <div class="myCustomCaptionOne">
    Diseño web & móvil <span>Vanguardia...</span>
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
  { id: 10, caption: captionOne },
  { id: 11, caption: captionOne },
  { id: 12, caption: captionOne },
  { id: 13, caption: captionOne },
  { id: 14, caption: captionOne },
  { id: 15, caption: captionOne },
  { id: 16, caption: captionOne },
  { id: 17, caption: captionOne },
  { id: 18, caption: captionOne },
  { id: 19, caption: captionOne },
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

const CaseStudies = ({ dimensions }) => {
  return (
    <div className="page">
      <div className="container">
      <SRLWrapper customCaptions={customCaptions} options={options}>
          <div className="row">
            <div className="row-gallery">
              <div className="col-4">
                <img src={img10} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img11} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img12} className="img-gallery" alt="" />
              </div>
              <div className="col-6">
                <img src={img14} className="img-gallery" alt="" />
              </div>
              <div className="col-6">
                <img src={img13} className="img-gallery" alt="" />
              </div>
              <div className="col-5">
                <img src={img17} className="img-gallery" alt="" />
              </div>
              <div className="col-5">
                <img src={img15} className="img-gallery" alt="" />
              </div>
              <div className="col-5">
                <img src={img18} className="img-gallery" alt="" />
              </div>
              <div className="col-5">
                <img src={img16} className="img-gallery" alt="" />
              </div>
              <div className="col-5">
                <img src={img19} className="img-gallery" alt="" />
              </div>

              <div className="col-4">
                <img src={img01} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img02} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img03} className="img-gallery" alt="" />
              </div>

              
              <div className="col-4">
                <img src={img06} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img05} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img04} className="img-gallery" alt="" />
              </div>
            </div>
          </div>
        </SRLWrapper>
        
        <div className="row">
          <HomeFeatured
            dimensions={dimensions}
            video={Video}
            title="Diseño Web"
            subtitle="E-commerce"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
