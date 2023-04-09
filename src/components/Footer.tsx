import React from 'react';

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`bg-gradient-to-r from-blue-500 to-green-500 p-4 ${className}`}>
      <div className="container mx-auto text-center">
        <p className="text-lg">
          © {new Date().getFullYear()}Adwitya Prawangsa. 3th Undergraduated Student.
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="https://www.linkedin.com/in/prawangsa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Hanabihyug"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            GitHub
          </a>
          <a
            href="mailto:wawaca.waca@gmail.com"
            className="text-white hover:text-gray-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
