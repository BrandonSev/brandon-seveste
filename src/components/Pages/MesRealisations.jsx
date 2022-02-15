import React, { useEffect, useRef, useState } from "react";
import Hero from "../Hero";
import Slider from "react-slick";
import Modal from "../Modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { AnimatePresence } from "framer-motion";

const MesRealisations = () => {
  const [projectData, setProjectData] = useState([]);
  const [show, setShow] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const ref = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    useTransform: false,
    arrows: false,
    easing: "ease",
    currentSlide: 0,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = (i) => {
    setShow(true);
    setModalIndex(i);
  };

  useEffect(() => {
    (async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/projects?active=true`)
        .then((res) => {
          setProjectData(res.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Hero
        title={"Mes réalisations"}
        text={
          "Vous trouverez ci-dessous tous les projets auxquels j'ai participé sur le plan professionel, scolaire ou personnel."
        }
        linkText={"Me contacter"}
        linkUrl={"/contact"}
      />
      <div className="project">
        <div className="container">
          <div className="project_wrapper">
            <h2 className="active">Projets</h2>
            <Slider {...settings}>
              {projectData ? (
                projectData.map((project, i) => (
                  <div className="project_card" key={project.id}>
                    <div className="project_card__header">
                      <img
                        src={`${process.env.REACT_APP_API_URL}/images/${project.images[0].src}`}
                        alt={project.images.alt}
                      />
                    </div>
                    <div className="project_card__body">
                      <p className="technology">{project.tags}</p>
                      <h3>{project.title}</h3>
                      <p>
                        {project.description.slice(0, 140)}
                        {project.description.length > 140 ? "..." : ""}
                      </p>
                      <div className="project_card__button">
                        <button
                          className="button button_small pulse"
                          onClick={() => handleClick(i)}
                        >
                          En savoir plus
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ height: 500 }}></div>
              )}
            </Slider>
          </div>
        </div>
        <AnimatePresence>
          {show && (
            <Modal
              title={projectData[modalIndex].title}
              description={projectData[modalIndex].description}
              technology={projectData[modalIndex].tags}
              images={projectData[modalIndex].images}
              open={show}
              handleOpen={setShow}
              ref={ref}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MesRealisations;
