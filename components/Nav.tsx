import React from 'react';

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">chaseTheCoder</a>
      </div>
      <div className='flex flex-row'>
        <div className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">Projects</a>
        </div>
        <div className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">About</a>
        </div>
        <div className="mr-6">
          <a className="text-gray-400 cursor-not-allowed" href="#">Blog</a>
        </div>
        <div className="mr-6">
          <a className="text-gray-400 cursor-not-allowed" href="#">Resume</a>
        </div>
        <div className="mr-6">
          <a className="text-gray-400 cursor-not-allowed" href="#">LinkedIn</a>
        </div>
        <div className="mr-6">
          <a className="text-gray-400 cursor-not-allowed" href="#">GitHub</a>
        </div>
      </div>
    </nav>
  )
};