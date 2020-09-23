import styled from "styled-components";
import { motion } from "framer-motion";

//Banner
export const Banner = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`;
export const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
  }
`;
export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -154px;
  left: -18px;
  color: ${(props) => props.theme.text};
  pointer-events: none;
`;

export const Headline = styled(motion.span)`
  display: block;
  font-size: 12rem;
  font-weight: 900;
  line-height: 0.76;
`;

//Content Section
export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
`;
export const Content = styled(motion.h2)`
  width: 53%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${(props) => props.theme.text};
`;

//Featured Section
export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;
  width: 100%;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`;

export const FeaturedContent = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding: 20px 32px;
  @media (max-width: 768px) {
    padding: 0px 8px;
  }
  box-sizing: border-box;
  color: ${(props) => props.theme.text};
  font-family: "Lemon/Milk Regular";
  h3 {
    font-size: 1.4rem;
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
  .meta {
    font-size: 1.4rem;
    display: flex;
    @media (max-width: 768px) {
      margin-top: -5px;
    }
    h4 {
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
`;

export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: auto;
  top: 0;
  display: block;
  overflow: hidden;
  video {
    width: 100%;
  }
  color: ${(props) => props.theme.text};
  font-family: "Lemon/Milk Regular";
  .Loading {
    height: 100%;
    width: 100%;
    text-align: center;
    font-family: "Lemon/Milk light italic";
  }
  .featured-title {
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin-top: 24px;
    @media (max-width: 768px) {
      font-size: 3rem;
    }
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: #000;
        }
      }
    }
  }
`;

// export const FeaturedProjects = styled.div`
//   margin-top: 200px;
//   button {
//     background: #C42036;
//     color: #fff;
//     position: relative;
//     padding: 20px;
//     display: block;
//     text-align: left;
//     font-size: 1.4rem;
//     line-height: 1;
//     font-weight: 600;
//     border: none;
//     span {
//       margin-right: 108px;
//       display: block;
//     }

//     &:before,
//     &:after {
//       content: "";
//       position: absolute;
//       top: 50%;
//       right: 20px;
//       width: 35px;
//       height: 7px;
//       display: block;
//       background: #fff;
//       transform: translateY(-50%);
//     }
//     &:before {
//       margin-top: -8px;
//     }
//     &:after {
//       margin-top: 8px;
//     }
//   }
// `

// //ABOUT SECTION

// export const HomeAboutSection = styled(motion.div)`
//   /* margin-bottom: 200px; */
// `
// export const About = styled.div`
//   width: 100%;
//   h2 {
//     width: 60%;
//     font-size: 2.3rem;
//     font-weight: 400;
//     margin-left: 124px;
//     color: ${props => props.theme.text};
//   }
//   p {
//     max-width: 440px;
//     font-size: 1rem;
//     line-height: 1.6rem;
//     margin-left: 124px;
//     color: ${props => props.theme.text};
//   }
// `
// export const Services = styled.div``

// //Accordion

// export const AccordionHeader = styled(motion.div)`
//   width: 100%;
//   color: #C42036;
//   height: 32px;
//   display: flex;
//   align-items: center;
//   font-weight: 600;
//   font-size: 1.15rem;
//   margin: 8px 0;
//   }
// `
// export const AccordionIcon = styled.div`
//   display: flex;
//   align-items: center;
//   height: 100%;
//   margin-right: 8px;
//   span {
//     width: 16px;
//     height: 4px;
//     background: #C42036;
//     transition: all 0.1s ease-in-out;
//   }
// `

// export const AccordionContent = styled(motion.div)`
//   overflow: hidden;
//   padding-left: 40px;
//   span {
//     width: 100%;
//     margin: 8px 0;
//     font-size: 0.875rem;
//     color: #C42036;
//     display: block;
//     font-weight: 300;
//   }
// `
