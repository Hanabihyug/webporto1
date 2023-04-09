import React from 'react';
import Link from 'next/link';

type HeaderProps = {
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`bg-gradient-to-r from-blue-500 to-green-500 p-4 ${className}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <a className="text-2xl font-bold text-white">Portofolio</a>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">
                  <a className="text-white header-nav-link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-white header-nav-link">About</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="text-white header-nav-link">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <a className="text-white header-nav-link">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
