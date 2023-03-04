import React, { useState, useEffect } from "react";
import "./Slide.css";
import product from "../assets/career.png";
import todo from "../assets/todo.png";
import lucky from "../assets/lucky.png";
import robo from "../assets/robo.png";
import career from "../assets/career.png";

function SlidePortfolio(props) {
  const currentPortfolio = [
    {
      id: 1,
      image: career,
      url: "https://firme.peviitor.ro/",
    },
    {
      id: 2,
      image: lucky,
      url: "https://lucky-dice-ruby.vercel.app/",
    },

    {
      id: 3,
      image: todo,
      url: "https://todo-app-six-lyart.vercel.app/",
    },
    {
      id: 4,
      image: product,
      url: "https://lading-page-12.adrianedu.repl.co/",
    },
    {
      id: 5,
      image: robo,
      url: "https://robo-joke-teller.adrianedu.repl.co/",
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
        <img
          src={currentPortfolio[currentIndex].image}
          className="slide-image"
          alt="portfolio img"
        />
      </div>
    </section>
  );
}

export default SlidePortfolio;
