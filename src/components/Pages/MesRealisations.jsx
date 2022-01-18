import React, {useRef, useState} from 'react';
import Hero from "../Hero";
import Slider from "react-slick";
import Modal from "../Modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MesRealisations = () => {
  const [projectData, setProjectData] = useState([{
    title: 'Test',
    description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant\n" +
      "                    impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,\n" +
      "                    quand un imprimeur anonyme",
    images: [
      {src: 'https://picsum.photos/536/354'}
    ],
    technology: 'ReactJs, Javascript'

  },
    {
      title: 'Test2',
      description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant\n" +
        "                    impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,\n" +
        "                    quand un imprimeur anonyme",
      images: [
        {src: 'https://picsum.photos/536/354'}, {src: 'https://picsum.photos/536/354'}
      ],
      technology: 'ReactJs, Javascript'


    },
    {
      title: 'Test3',
      description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant\n" +
        "                    impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,\n" +
        "                    quand un imprimeur anonyme",
      images: [
        {src: 'https://picsum.photos/536/354'}, {src: 'https://picsum.photos/536/354'}, {src: 'https://picsum.photos/536/354'}
      ],
      technology: 'ReactJs, Javascript'


    }])
  const [show, setShow] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const ref = useRef()
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleClick = (i) => {
    setShow(true)
    setModalIndex(i)
  }
  return (
    <div style={{position: 'relative'}}>
      <Hero title={"Mes réalisations"}
            text={"Actuellement en formation développeur web et Mobile, je maîtrise le Html / css / Javascript , ainsi que l’utilisation de la librairie React."}
            linkText={"Me contacter"}
            linkUrl={"/contact"}/>
      <div className="project">
        <div className="container">
          <div className="project_wrapper">
            <h2 className="active">Projets</h2>
            <Slider {...settings}>
              {projectData && projectData.map((project, i) => (
                <div className="project_card">
                  <div className="project_card__header">
                    <img src="https://picsum.photos/536/354" alt=""/>
                  </div>
                  <div className="project_card__body">
                    <p className="technology">{project.technology}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project_card__button">
                      <button className="button button_small" onClick={() => handleClick(i)}>En savoir plus</button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {show &&
          <Modal title={projectData[modalIndex].title}
                 description={projectData[modalIndex].description}
                 technology={projectData[modalIndex].technology}
                 images={projectData[modalIndex].images}
                 open={show}
                 handleOpen={setShow}
                 ref={ref}
          />
        }
      </div>
    </div>
  );
};

export default MesRealisations;
