import Slider from "react-slick";
import { NavLink } from "react-router-dom";

const Modal = ({
  images,
  technology,
  title,
  description,
  open,
  handleOpen,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div
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
      onClick={() => handleOpen(false)}
    >
      <div
        className={`modal ${open ? "open" : "hidden"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal_header">
          <Slider {...settings}>
            {images.map((image) => (
              <div>
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
            <NavLink to="/" className="button button_small">
              Visiter le site web
            </NavLink>
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
      </div>
    </div>
  );
};

export default Modal;
