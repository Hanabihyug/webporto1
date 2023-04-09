/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Element } from 'react-scroll';

const AboutMePage = () => {
  return (
    <Element name="about">
      <section className="py-20 flex justify-center items-center">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl">
          I'm a Computer Science Undergraduate at Udayana University, Bali. You can call me Adwitya. I am currently studying in Front End Web Developing use Nextjs and Cloud Computing.
          </p>
        </div>
      </section>
    </Element>
  );
};

export default AboutMePage;
