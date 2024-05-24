import React from "react";
import CV from "../../assets/Serik_Nurtay.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        My CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's connect
      </a>
    </div>
  );
};

export default CTA;
