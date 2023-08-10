import React from 'react';
import Feature from './feature/Feature';
import './services.css';

const featuresData = [
  {
    title: 'Web Development',
    text: 'From website desiging , website hostings , website maintainance and website SEO',
  },
  {
    title: 'Digital Marketing',
    text: 'Grow your business ,agency , private and public organizations within digital world',
  },
  {
    title: 'Graphics Design',
    text: 'Offer us modern design graphics design , animation design  and video editing',
  },
  {
    title: 'App Development',
    text: 'From app desiging , app hostings , app maintainance and app SEO',
  },
];

const Services = () => (
  <div className="gpt3__features mt-20" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Services;
