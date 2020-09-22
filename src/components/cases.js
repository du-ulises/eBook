import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
//import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Landing pages, e-commerces, diseño responsivo.",
    title: "Diseño Web",
    img: "Diseño Web",
    link: "/web-design"
  },
  {
    id: 2,
    subtitle: "",
    title: "Diseño de Redes Sociales",
    img: "Diseño Redes Sociales",
    link: "/social-media-design"
  },
  {
    id: 3,
    subtitle: "",
    title: "Logos, Carteles & Renders",
    img: "Logos, Carteles, Renders",
    link: "/renders"
  },
  {
    id: 4,
    subtitle: "",
    title: "Ilustraciones & Bocetos",
    img: "Ilustraciones-Bocetos",
    link: "/illustrations"
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          {/* <div className='cases-arrow prev disabled'>
            <CasesPrev />
          </div> */}
          <div></div>
          <div className="cases-arrow next disabled">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            // <NavLink style="text-decoration: none;" to={caseItem.link} exact>
              <div className="case" key={caseItem.id}>
                <div className="case-details">
                  <span>{caseItem.subtitle}</span>
                  <h2>{caseItem.title}</h2>
                </div>
                <div className="case-image">
                  <img
                    src={require(`../assets/${caseItem.img}.png`)}
                    alt={caseItem.title}
                  />
                </div>
              </div>
            // </NavLink> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
