import React from 'react';
import styles from './nav.module.css';

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="mr-6">
        <a className="text-xl text-black tracking-wide" href="/">
          chase<span className={styles.navLeftTitle}>TheCoder</span>
        </a>
      </div>
      <div className='flex flex-row'>
        <div className="mr-6">
          <a className="text-gray-500 hover:text-black" href="/">Projects</a>
        </div>
        <div className="mr-6">
          <a className="text-gray-500 hover:text-black" href="/">About</a>
        </div>
        <div className="mr-6">
          <a className="text-gray-500 hover:text-black" href="/blog">Blog</a>
        </div>
        <div className="mr-6">
          <a className="text-gray-500 hover:text-black" href="https://docs.google.com/document/d/1N-j-czmPYUi-sKHWNAb2uSJtC544tkLTqcIO_Dfsz1M/edit?usp=sharing" target='blank'>Resume</a>
        </div>
        <div className="mr-6">
          <a className="text-gray-500 hover:text-black" href="https://www.linkedin.com/in/chasethecoder/" target='blank'>LinkedIn</a>
        </div>
        <div className="mr-6">
          <a className="text-gray-500 hover:text-black" href="https://github.com/ChaseTheCoder" target='blank'>GitHub</a>
        </div>
      </div>
    </nav>
  )
};