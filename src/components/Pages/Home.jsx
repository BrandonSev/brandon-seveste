import React, { useEffect, useState } from "react";
import Hero from "../Hero";
import axios from "axios";

const Home = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    (async () => {
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/api/categories?underCategories=true&technologies=true`
        )
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);
  return (
    <>
      <section id="hero">
        <Hero
          title={"Je suis <br> <span> Brandon Seveste</span>"}
          text={
            "Passionné de développement, je me suis formé sur différents types de languages de manière autodidacte, j'ai décidé de rejoindre une formation à la Wild Code School en septembre 2021 en tant que développeur web et mobile afin de faire de ma passion, mon métier."
          }
          linkText={"Voir mes réalisations"}
          linkUrl={"/mes-realisations"}
        />
      </section>
      <section className="skills" id="skills">
        <div className="container">
          <h2 className={"active"}>Mes compétences</h2>
          <div className="skills_wrapper">
            {categories ? (
              categories.map((category) => {
                return (
                  <div
                    className={`skills_${category.title.toLowerCase()}`}
                    key={category.id}
                  >
                    <span className="skills_badge">{category.title}</span>
                    {category.underCategories.map((underCategory) => {
                      return (
                        <div
                          className={`skills_${category.title.toLowerCase()}__language`}
                          key={underCategory.id}
                        >
                          <p>{underCategory.title}</p>
                          {underCategory.technologies.length ? (
                            <ul>
                              {underCategory.technologies.map((technology) => {
                                return (
                                  <li key={technology.id}>
                                    <img
                                      src={`${process.env.REACT_APP_API_URL}/images/${technology.logo}`}
                                      alt={technology.name}
                                    />
                                    {technology.name}
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <ul>
                              <li>Liste à venir</li>
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })
            ) : (
              <div style={{ height: 500 }} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
