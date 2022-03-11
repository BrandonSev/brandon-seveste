import React, {useEffect, useRef, useState} from "react";
import Hero from "../Hero";
import Modal from "../Modal";
import axios from "axios";
import {AnimatePresence} from "framer-motion";
import {Navigation, Autoplay} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const MesRealisations = () => {
    const [projectData, setProjectData] = useState([]);
    const [show, setShow] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
    const ref = useRef();
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

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
      <>
      <Hero
          title={"Mes réalisations"}
          text={
            "Vous trouverez ci-dessous tous les projets auxquels j'ai participé sur le plan professionel, scolaire ou personnel."
          }
          linkText={"Me contacter"}
          linkUrl={"/contact"}
      />
      <div className={`project`}>
        <div className="container">
            <div className="project_wrapper">
                <h2 className="active">Projets</h2>
                <Swiper
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    initialSlide={1}
                    spaceBetween={32}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            initialSlide: 2
                        },
                        1024: {
                            slidesPerView: 3,
                            initialSlide: 3
                        }
                    }}
                    rtl={false}
                    loop={true}
                    autoplay={{
                        delay: 8000
                    }}
                    swipeable={true}
                >
                    {projectData ? (
                        projectData.map((project, i) => (
                            <SwiperSlide>
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
                            </SwiperSlide>
                        ))
                    ) : (
                        <div style={{height: 500}}/>
                    )}
                    <div className="swiper_navigation__wrapper">
                        <button className={"swiper-prev"} ref={navigationPrevRef}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                            </svg>
                        </button>
                        <button className={"swiper-next"} ref={navigationNextRef}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </button>
                    </div>
                </Swiper>
          </div>
        </div>
        <AnimatePresence>
          {show && (
              <Modal
                  title={projectData[modalIndex].title}
                  description={projectData[modalIndex].description}
                  technology={projectData[modalIndex].tags}
                  images={projectData[modalIndex].images}
                  url={projectData[modalIndex].url}
                  start_date={projectData[modalIndex].start_date}
                  end_date={projectData[modalIndex].end_date}
                  open={show}
                  handleOpen={setShow}
                  ref={ref}
              />
          )}
        </AnimatePresence>
      </div>
      </>
  );
};

export default MesRealisations;
