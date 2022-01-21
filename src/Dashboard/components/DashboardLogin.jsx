import React from "react";

const DashboardLogin = () => {
  return (
    <>
      <button
        onClick={() =>
          (window.location.href = `http://${
            window.location.href.split(".")[1]
          }`)
        }
        className="back_home"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-arrow-bar-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </span>
        Retour à la page accueil
      </button>
      <>
        <div className="admin_left">
          <div className="admin_form__wrapper">
            <h1>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-speedometer"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                  <path
                    fillRule="evenodd"
                    d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
                  />
                </svg>
              </span>
              Dashboard
            </h1>
            <form action="">
              <div className="form__group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form__group">
                <label htmlFor="password">Mot de passe:</label>
                <input type="password" name="password" id="password" />
              </div>
              <div className="form__group">
                <button className="button pulse">Valider</button>
              </div>
            </form>
          </div>
        </div>
      </>
      <div className="admin_right" />
    </>
  );
};

export default DashboardLogin;
