'use client'
import React, { ReactElement, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './nav.module.css';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if(width > breakpoint) setIsOpen(false);
  }, [width]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="flex items-center justify-between flex-wrap py-2 px-8 sticky top-0 bg-white">
      <div className="mr-6">
        <a className="text-xl text-black tracking-wide" href="/">
          chase<span className={styles.navLeftTitle}>TheCoder</span>
        </a>
      </div>
      <button onClick={handleClick} className='md:hidden'>
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size='lg' />
      </button>
      <div 
        className={`md:flex md:flex-row md:relative md:flex gap-8 
          ${isOpen  ? 'absolute top-10 right-0 w-100 gap-4 grid grid-cols-1 gap-6 bg-white py-10 px-20 shadow-2xl rounded-lg border border-slate-100' 
          : 'hidden'}`}
      >
        <div>
          <a 
            className="text-gray-500 hover:text-black"
            href="#projects"
            onClick={handleClick}
          >
            Projects
          </a>
        </div>
        <div>
          <a
            className="text-gray-500 hover:text-black"
            href="/"
            onClick={handleClick}
          >
            About
          </a>
        </div>
        <div>
          <a
            className="text-gray-500
            hover:text-black"
            href="/blog"
            onClick={handleClick}
          >
            Blog
          </a>
        </div>
        <div>
          <a
            className="text-gray-500 hover:text-black"
            href="https://docs.google.com/document/d/1N-j-czmPYUi-sKHWNAb2uSJtC544tkLTqcIO_Dfsz1M/edit?usp=sharing"
            target='blank' onClick={handleClick}
          >
            Resume
          </a>
        </div>
        <div>
          <a
            className="text-gray-500 hover:text-black"
            href="https://www.linkedin.com/in/chasethecoder/"
            target='blank'
            onClick={handleClick}
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            className="text-gray-500 hover:text-black"
            href="https://github.com/ChaseTheCoder"
            target='blank'
            onClick={handleClick}
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
};