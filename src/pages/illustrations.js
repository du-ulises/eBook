import React from "react";
import HomeFeatured from "../components/HomeFeatured";
import Video from "../assets/videos/reel.mp4";
import { SRLWrapper } from "simple-react-lightbox";

import img01 from "../assets/images/gallery/Ilustraciones-Bocetos/img1.jpg";
import img02 from "../assets/images/gallery/Ilustraciones-Bocetos/img2.jpg";
import img03 from "../assets/images/gallery/Ilustraciones-Bocetos/img3.jpg";
import img04 from "../assets/images/gallery/Ilustraciones-Bocetos/img4.jpg";
import img05 from "../assets/images/gallery/Ilustraciones-Bocetos/img5.jpg";
import img06 from "../assets/images/gallery/Ilustraciones-Bocetos/img6.jpg";
import img07 from "../assets/images/gallery/Ilustraciones-Bocetos/img7.jpg";
import img08 from "../assets/images/gallery/Ilustraciones-Bocetos/img8.jpg";
import img09 from "../assets/images/gallery/Ilustraciones-Bocetos/img9.jpg";
import img10 from "../assets/images/gallery/Ilustraciones-Bocetos/img10.jpg";
import img11 from "../assets/images/gallery/Ilustraciones-Bocetos/img11.jpg";
import img12 from "../assets/images/gallery/Ilustraciones-Bocetos/img12.jpg";
import img13 from "../assets/images/gallery/Ilustraciones-Bocetos/img13.jpg";
import img14 from "../assets/images/gallery/Ilustraciones-Bocetos/img14.jpg";
import img15 from "../assets/images/gallery/Ilustraciones-Bocetos/img15.jpg";
import img16 from "../assets/images/gallery/Ilustraciones-Bocetos/img16.jpg";
import img17 from "../assets/images/gallery/Ilustraciones-Bocetos/img17.jpg";
import img18 from "../assets/images/gallery/Ilustraciones-Bocetos/img18.jpg";
import img19 from "../assets/images/gallery/Ilustraciones-Bocetos/img19.jpg";
import img20 from "../assets/images/gallery/Ilustraciones-Bocetos/img20.jpg";
import img21 from "../assets/images/gallery/Ilustraciones-Bocetos/img21.png";
import img22 from "../assets/images/gallery/Ilustraciones-Bocetos/img22.jpg";
import img23 from "../assets/images/gallery/Ilustraciones-Bocetos/img23.png";
import img24 from "../assets/images/gallery/Ilustraciones-Bocetos/img24.jpg";
import img25 from "../assets/images/gallery/Ilustraciones-Bocetos/img25.jpg";
import img26 from "../assets/images/gallery/Ilustraciones-Bocetos/img26.jpg";

const captionOne = (
  <div class="myCustomCaptionOne">
    Ilustraciones & Bocetos <span>Creatividad...</span>
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
  { id: 20, caption: captionOne },
  { id: 21, caption: captionOne },
  { id: 22, caption: captionOne },
  { id: 23, caption: captionOne },
  { id: 24, caption: captionOne },
  { id: 25, caption: captionOne },
  { id: 26, caption: captionOne },
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
const Illustrations = ({ dimensions }) => {
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
                <img src={img04} className="img-gallery" alt="" />
              </div>
              <div className="col-6">
                <img src={img05} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img06} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img07} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img08} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img09} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img10} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img11} className="img-gallery" alt="" />
              </div>
              <div className="col-2">
                <img src={img12} className="img-gallery" alt="" />
              </div>
              <div className="col-2">
                <img src={img13} className="img-gallery" alt="" />
              </div>
              <div className="col-2">
                <img src={img14} className="img-gallery" alt="" />
              </div>
              <div className="col-2">
                <img src={img15} className="img-gallery" alt="" />
              </div>
              <div className="col-2">
                <img src={img20} className="img-gallery" alt="" />
              </div>
              <div className="col-2">
                <img src={img16} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img17} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img18} className="img-gallery" alt="" />
              </div>
              <div className="col-4">
                <img src={img19} className="img-gallery" alt="" />
              </div>
              <div className="col-2">
                <img src={img21} className="img-gallery" alt="" />
              </div>
              <div className="col-2">
                <img src={img22} className="img-gallery" alt="" />
              </div>
              <div className="col-2">
                <img src={img23} className="img-gallery" alt="" />
              </div>
              <div className="col-2">
                <img src={img24} className="img-gallery" alt="" />
              </div>
              <div className="col-2">
                <img src={img25} className="img-gallery" alt="" />
              </div>
              <div className="col-2">
                <img src={img26} className="img-gallery" alt="" />
              </div>
            </div>
          </div>
        </SRLWrapper>

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
