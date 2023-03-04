import React, { useState, useEffect } from "react";
import "./Slide.css";
import dedeman from "../assets/dedeman.png";
import bosch from "../assets/bosch.png";
import bioclinica from "../assets/bioclinica.png";

function SlidePortfolio(props) {
  const currentPortfolio = [
    {
      id: 0,
      image: bosch,
      url: "https://jobs.smartrecruiters.com/BoschGroup/743999827028321-your-start-bosch?trid=5ca12582-477f-422c-9efb-2f752450cb38",
    },
    {
      id: 1,
      image: dedeman,
      url: "https://recrutare.dedeman.ro/detalii-post.php?id=82da4960-aadb-4b39-ac28-be14a1fee6a3",
    },
    {
      id: 2,
      image: bioclinica,
      url: "https://bioclinica.ro/compania/cariere/registrator-medical-bucuresti",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(currentPortfolio.length - 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <section>
      <div className="container">
        <a
          href={currentPortfolio[currentIndex].url}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={currentPortfolio[currentIndex].image}
            className="slide-image"
            alt="portfolio img"
          />
        </a>
      </div>
    </section>
  );
}

export default SlidePortfolio;
