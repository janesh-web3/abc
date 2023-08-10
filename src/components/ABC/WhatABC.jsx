import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatabc.css';

const WhatABC = () => (
  <div className="gpt3__whatgpt3 m-6 mb-20" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is ABC" text="ABC is a dynamic and innovative company from Nepal that provide in website development, comprehensive marketing solutions, and cutting-edge graphic design services to the local and global market." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Web Developments" text="We provide web developent and maintainance services to the local and global market." />
      <Feature title="Graphics Designing" text="We provide cutting-edge graphic design services to the local and global market." />
      <Feature title="Digital Marketing" text="We provide comprehensive digital marketing solutions services to the local and global market." />
    </div>
  </div>
);

export default WhatABC;
