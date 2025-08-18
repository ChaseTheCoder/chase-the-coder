'use client'
import React, { useState, useEffect } from 'react';
import styles from './nav.module.css';
import Link from 'next/link';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const breakpoint = 620;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    // Set initial width
    setWidth(window.innerWidth);
    
    window.addEventListener("resize", handleResize);
    
    if(width > breakpoint) setIsOpen(false);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  
  const closeMobileNav = () => {
    setIsOpen(false);
  }

  return (
    <nav className="flex items-center justify-between flex-wrap py-2 px-8 sticky top-0 bg-white z-10">
      <div className="mr-6">
        <Link className="text-xl text-black tracking-wide" href="/">
          chase<span className={styles.navLeftTitle}>TheCoder</span>
        </Link>
      </div>
      <button 
        onClick={handleClick}
        className='md:hidden'
        type="button"
        aria-label='Main navigation menu'
      >
        <span className="text-xl">{isOpen ? '✕' : '☰'}</span>
      </button>
      <div 
        className={`md:flex md:flex-row md:relative md:flex gap-8 
          ${isOpen  ? 'absolute top-10 right-0 w-100 gap-4 grid grid-cols-1 gap-6 bg-white py-10 px-20 shadow-2xl rounded-lg border border-slate-100' 
          : 'hidden'}`}
      >
        <div>
          <Link
            className="text-gray-500 hover:text-black z-0"
            href="/#projects"
            onClick={closeMobileNav}
          >
            Projects
          </Link>
        </div>
        <div>
          <Link
            className="text-gray-500 hover:text-black"
            href="/#about-me"
            onClick={closeMobileNav}
          >
            About
          </Link>
        </div>
        <div>
          <Link
            className="text-gray-500 hover:text-black"
            href="/blog"
            onClick={closeMobileNav}
          >
            Blog
          </Link>
        </div>
        <div>
          <a
            className="text-gray-500 hover:text-black"
            href="https://docs.google.com/document/d/1DD0O3NbqSerz2iiuM8HSJGN447RabBGlUwi0ukHvDWA/edit"
            target='_blank' 
            rel="noopener noreferrer"
            onClick={closeMobileNav}
          >
            Resume<span aria-label='Opens in new tab'>↗︎</span>
          </a>
        </div>
        <div>
          <a
            className="text-gray-500 hover:text-black"
            href="https://www.linkedin.com/in/chasethecoder/"
            target='_blank'
            rel="noopener noreferrer"
            onClick={closeMobileNav}
          >
            LinkedIn<span aria-label='Opens in new tab'>↗︎</span>
          </a>
        </div>
        <div>
          <a
            className="text-gray-500 hover:text-black"
            href="https://github.com/ChaseTheCoder"
            target='_blank'
            rel="noopener noreferrer"
            onClick={closeMobileNav}
          >
            GitHub<span aria-label='Opens in new tab'>↗︎</span>
          </a>
        </div>
      </div>
    </nav>
  )
};
