import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Container, Flex } from "../styles/globalStyles";
import {
  HomeFeaturedSection,
  FeaturedVideo,
  FeaturedContent,
} from "../styles/web-design";
import { useInView } from "react-intersection-observer";

const HomeFeatured = ({ dimensions, video, title, subtitle }) => {
  const [hovered, setHovered] = useState(false);
  const animation = useAnimation();
  const [featured, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <HomeFeaturedSection
      ref={featured}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: dimensions.width < 768 ? 1 : 0, y: 72 },
      }}
    >
      <Container>
        <FeaturedContent
          onHoverStart={() => setHovered(!hovered)}
          onHoverEnd={() => setHovered(!hovered)}
          onMouseEnter={() => setHovered(!hovered)}
          onMouseLeave={() => setHovered(!hovered)}
        >
          <Flex spaceBetween>
            <h3>eBook</h3>
            <motion.div
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
              className="meta"
            >
              <h4>{subtitle}</h4>
              <h4>2020</h4>
            </motion.div>
          </Flex>
        </FeaturedContent>
        <FeaturedVideo>
          {!isVideoLoaded && (
            <div className="Loading">
              <h1>Cargando</h1>
            </div>
          )}
          <video controls onLoadedData={onLoadedData} src={video}></video>
          <h2 className="featured-title">
            {title}
            <span className="arrow">
              <motion.svg
                animate={{ x: hovered ? 48 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 101 57"
              >
                <path
                  d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                  fill="#FFF"
                  fillRule="evenodd"
                ></path>
              </motion.svg>
            </span>
          </h2>
        </FeaturedVideo>
      </Container>
    </HomeFeaturedSection>
  );
};

export default HomeFeatured;
