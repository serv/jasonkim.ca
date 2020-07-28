import React from "react";

import Project from "./Project";
import odiobooksImg from "./images/odiobooks.png";
import justenoughImg from "./images/justenough.png";
import h1bImg from "./images/h1b.png";

const projects = [
  {
    name: "Odiobooks",
    description:
      "Odiobooks allows you to listen to audiobooks and read the books at the same time.",
    url: "https://odiobooks.com/",
    image: odiobooksImg
  },
  {
    name: "H1BHub",
    description:
      "H1BHub is a data pipeline tool that provides you clean H1B data from 2014 to 2018 in local Postgresql database.",
    url: "https://github.com/serv/h1bhub",
    image: h1bImg
  },

  {
    name: "Just Enough Ruby To Get By",
    description:
      "Just Enough Ruby To Get By is a free programming book on Ruby.",
    url: "http://jasonkim.ca/projects/just_enough_ruby_to_get_by/",
    image: justenoughImg
  }
];

export default function Projects() {
  const projectsList = projects.map((p, index) => {
    return (
      <Project
        name={p.name}
        description={p.description}
        url={p.url}
        image={p.image}
        key={index}
      />
    );
  });

  return (
    <React.Fragment>
      <div>Projects</div>
      <div>{projectsList}</div>
    </React.Fragment>
  );
}
