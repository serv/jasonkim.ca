import React from 'react';

import Project from './Project';
import odiobooksImg from './images/odiobooks.png';
import justenoughImg from './images/justenough.png';
import h1bImg from './images/h1b.png';
import mortgageCalculator from './images/mortgage-calculator.png';
import deletelikes from './images/deletelikes.png';
import tkdImag from './images/tkd.png';

const projects = [
  {
    name: 'TechKwonDo',
    description:
      'Empower tech workers and W2 employees to stretch their dollars as much as possible.',
    url: 'https://techkwondo.xyz/',
    image: tkdImag,
  },
  {
    name: 'Unlike X Tweets',
    description: 'Mass delete Likes in your Twitter profile.',
    url: 'projects/unlike-x-tweets',
    image: deletelikes,
  },
  {
    name: 'Mortgage Calculator',
    description: 'A calculator that calculates the amortization of a mortgage',
    url: 'http://jasonkim.ca/projects/mortgage-calculator/',
    image: mortgageCalculator,
  },
  {
    name: 'Odiobooks',
    description:
      'Odiobooks allows you to listen to audiobooks and read the books at the same time.',
    url: 'https://odiobooks.com/',
    image: odiobooksImg,
  },
  {
    name: 'H1BHub',
    description:
      'H1BHub is a data pipeline tool that provides you clean H1B data from 2014 to 2018 in local Postgresql database.',
    url: 'https://github.com/serv/h1bhub',
    image: h1bImg,
  },

  {
    name: 'Just Enough Ruby To Get By',
    description: 'Just Enough Ruby To Get By is a free programming book on Ruby.',
    url: 'http://jasonkim.ca/projects/just_enough_ruby_to_get_by/',
    image: justenoughImg,
  },
];

export default function Projects() {
  const projectsList = projects.map((p, index) => {
    return (
      <Project name={p.name} description={p.description} url={p.url} image={p.image} key={index} />
    );
  });

  return (
    <div className="container mx-auto pb-12">
      <div className="text-gray-900 pt-8 pb-6">
        <div className="name whitespace-no-wrap text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider">
          <a className="hover:underline" href="/">
            Jason Kim
          </a>
        </div>
        <div className="blurb text-sm">Software engineer working for Microsoft in Redmond, WA</div>
      </div>

      <div className="text-gray-900 pb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider">
        Projects
      </div>
      <div>{projectsList}</div>
    </div>
  );
}
