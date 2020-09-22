import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";

import WebDesign from "../assets/DW.png";
import DRS from "../assets/DRS.png";
import IB from "../assets/IB.png";
import Renders from "../assets/LCR.png";

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
          <div className="case">
            <div className="case-details">
              <span>Landing pages, e-commerces, diseño responsivo.</span>
              <h2>Diseño Web</h2>
            </div>
            <div className="case-image">
              <img src={WebDesign} alt="Diseño Web" />
            </div>
          </div>
          <div className="case">
            <div className="case-details">
              <span></span>
              <h2>Diseño de Redes Sociales</h2>
            </div>
            <div className="case-image">
              <img src={DRS} alt="Diseño de Redes Sociales" />
            </div>
          </div>
          <div className="case">
            <div className="case-details">
              <span></span>
              <h2>Logos, Carteles & Renders</h2>
            </div>
            <div className="case-image">
              <img src={Renders} alt="Logos, Carteles & Renders" />
            </div>
          </div>
          <div className="case">
            <div className="case-details">
              <span></span>
              <h2>Ilustraciones & Bocetos</h2>
            </div>
            <div className="case-image">
              <img src={IB} alt="Ilustraciones & Bocetos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
