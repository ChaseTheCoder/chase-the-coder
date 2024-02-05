'use client'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './nav.module.css';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const breakpoint = 620;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if(width > breakpoint) setIsOpen(false);
  }, [width]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  const closeMobileNav = () => {
    setIsOpen(false);
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
            href="/#projects"
            onClick={closeMobileNav}
          >
            Projects
          </a>
        </div>
        <div>
          <a
            className="text-gray-500 hover:text-black"
            href="/#about-me"
            onClick={closeMobileNav}
          >
            About
          </a>
        </div>
        <div>
          <a
            className="text-gray-500
            hover:text-black"
            href="/blog"
            onClick={closeMobileNav}
          >
            Blog
          </a>
        </div>
        <div>
          <a
            className="text-gray-500 hover:text-black"
            href="https://docs.google.com/document/d/1N-j-czmPYUi-sKHWNAb2uSJtC544tkLTqcIO_Dfsz1M/edit?usp=sharing"
            target='blank' onClick={closeMobileNav}
          >
            Resume↗︎
          </a>
        </div>
        <div>
          <a
            className="text-gray-500 hover:text-black"
            href="https://www.linkedin.com/in/chasethecoder/"
            target='blank'
            onClick={closeMobileNav}
          >
            LinkedIn↗︎
          </a>
        </div>
        <div>
          <a
            className="text-gray-500 hover:text-black"
            href="https://github.com/ChaseTheCoder"
            target='blank'
            onClick={closeMobileNav}
          >
            GitHub↗︎
          </a>
        </div>
      </div>
    </nav>
  )
};