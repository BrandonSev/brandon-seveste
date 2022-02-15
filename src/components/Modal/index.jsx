import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import useOnClickOutside from "../../hooks";
import {useRef} from "react";

const Modal = ({
  images,
  technology,
  title,
  description,
  open,
  handleOpen,
  url
}) => {
  const ref = useRef();
  useOnClickOutside(ref, () => handleOpen(false));
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const modalVariant = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      left: "-100px",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: "#00000080",
        backdropFilter: "blur 14px",
        zIndex: 2,
      }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`modal`}
        variants={modalVariant}
        initial={"hidden"}
        animate={"visible"}
        key={"modal"}
        exit={"exit"}
        ref={ref}
      >
        <div className="modal_header">
          <Slider {...settings}>
            {images.map((image) => (
              <div key={image.id}>
                <img
                  src={`${process.env.REACT_APP_API_URL}/images/${image.src}`}
                  alt={image.alt}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="modal_body">
          <p className="technology">{technology}</p>
          <h2>{title}</h2>
          <p className="description">{description}</p>
          <div className="modal_button">
            <a href={`${url}`} className="button button_small pulse">
              Visiter le site web
            </a>
          </div>
        </div>
        <div className="modal_close pulse" onClick={() => handleOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="var(--background-light)"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
