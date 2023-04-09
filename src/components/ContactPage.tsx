import React from 'react';
import { Element } from 'react-scroll';

const ContactPage: React.FC = () => {
  return (
    <Element name="contact" className="min-h-screen bg-white flex items-center justify-center w-screen">
      <div className="text-center space-y-4 animate__animated animate__fadeIn">
        <h2 className="text-4xl font-bold">Contact</h2>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/prawangsa/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://wa.me/6281236075589" target="_blank" rel="noopener noreferrer">
            Phone
          </a>
          <a href="mailto:wawaca.waca@gmail.com">
            Email
          </a>
        </div>
      </div>
    </Element>
  );
};

export default ContactPage;
