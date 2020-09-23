import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { gsap } from "gsap";
import SimpleReactLightbox from "simple-react-lightbox";
import "./styles/App.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";

import WebDesign from "./pages/web-design";
import SocialMediaDesign from "./pages/social-media-design";
import Renders from "./pages/renders";
import Illustrations from "./pages/illustrations";
import Home from "./pages/home";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/web-design", name: "web-design", Component: WebDesign },
  {
    path: "/social-media-design",
    name: "social-media-design",
    Component: SocialMediaDesign,
  },
  { path: "/renders", name: "renders", Component: Renders },
  { path: "/illustrations", name: "illustrations", Component: Illustrations },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <SimpleReactLightbox>
      <Header dimensions={dimensions} />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component dimensions={dimensions} />
          </Route>
        ))}
      </div>
      <Navigation />
    </SimpleReactLightbox>
  );
}

export default App;
