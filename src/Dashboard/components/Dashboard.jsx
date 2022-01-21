import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <div className={`dashboard_panel ${burgerOpen ? "open" : ""}`}>
        <span className="cross" onClick={() => setBurgerOpen(!burgerOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </span>
        <p className="title">Dashboard</p>
        <ul className="dashboard_list">
          <li className="dashboard_list__active">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-journal-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
              </svg>
            </span>
            Projets
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-journal-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
              </svg>
            </span>
            Projets
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-journal-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
              </svg>
            </span>
            Projets
          </li>
        </ul>
      </div>
      <div className="dashboard_content">
        <div className="dashboard_content__bar">
          <span className="cross" onClick={() => setBurgerOpen(!burgerOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </span>
          <h2>Gestion des projets</h2>
          <div className="personal_info">
            <p>Brandon Sev</p>
            <span>
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 24"
              >
                <path
                  d="m31.4 7.4-14 16c-.37.4-.83.6-1.38.6-.56 0-1.03-.2-1.43-.6l-14-16C.2 7.04 0 6.58 0 6.03c0-.56.2-1.03.6-1.43l4-4C4.98.2 5.45 0 6 0h20c.54 0 1.01.2 1.4.6l4 4c.4.37.6.84.6 1.4 0 .56-.2 1.03-.6 1.4ZM16 22l3.6-4.1c-.42.07-.83.1-1.23.1H15.5c-1.23 0-2.32-.1-3.28-.31L16 22Zm-7-8h3c0 .67.3 1.17.9 1.5.58.33 1.29.5 2.1.5h2c1.19 0 1.98-.14 2.4-.4.4-.28.6-.8.6-1.6 0-.6-.32-1.09-.97-1.45A6.4 6.4 0 0 0 16 12c-1.6 0-2.85-.01-3.75-.03-.9-.02-1.9-.1-3.02-.24a13.18 13.18 0 0 1-2.73-.57L9 14ZM6 2 2 6l2.03 2.31-.01-.12L4 8c0-.98.47-1.94 1.4-2.9.94-.94 2.08-1.7 3.41-2.26A9.81 9.81 0 0 1 12.62 2H6Zm11 0c2.88 0 4.77.73 5.69 2.19L24 2h-7Zm10.16 1.16L25 6h-4c0-.46-.24-.84-.72-1.16a4.69 4.69 0 0 0-1.6-.65A8.05 8.05 0 0 0 17 4h-3c-1.3 0-2.28.15-2.97.45-.69.3-1.03.82-1.03 1.55 0 .54.63 1.01 1.88 1.4 1.24.4 2.62.6 4.12.6 1.52 0 2.82.1 3.9.33 1.09.22 1.92.52 2.5.92.56.4.98.82 1.23 1.27A3 3 0 0 1 24 12c0 .2-.02.52-.06.94L30 6l-2.84-2.84Z"
                  fill="#FFF"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="dashboard_content__body">
          <div className="dashboard_content__header">
            <h1>Liste des projets</h1>
            <div className="button_action">
              <NavLink
                to={"/mes-projets/nouveau"}
                className="button button_small"
              >
                Ajouter
              </NavLink>
            </div>
          </div>
          <div className="dashboard__table">
            <table>
              <thead>
                <tr>
                  <th scope={"col"}>Nom du projet</th>
                  <th scope={"col"}>Description</th>
                  <th scope={"col"}>Date</th>
                  <th scope={"col"}>Gérer</th>
                  <th scope={"col"}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Titre du projet</td>
                  <td>Ma description de mon projet mis en ligne</td>
                  <td>4 Janvier 2021</td>
                  <td>fhkhfjk</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>nom du projet</td>
                  <td>ma description</td>
                  <td>2021-01-01</td>
                  <td>fhkhfjk</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>nom du projet</td>
                  <td>ma description</td>
                  <td>2021-01-01</td>
                  <td>fhkhfjk</td>
                  <td>Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
