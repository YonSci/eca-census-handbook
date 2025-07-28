import React from 'react';
import Link from '@docusaurus/Link';
import styles from '../pages/index.module.css';

export default function HandbookHeader() {
  return (
    <div className="header">
      <h1>
        E-Census Handbook
      </h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/docs/about-us/background">About Us</Link>
        <Link to="/docs/experiences-lessons-2020/Chapter-01/introduction">Experiences and Lessons</Link>
        <Link to="/docs/case-studies/Chapter-01/ch01-pes-case-studies">Case Studies</Link>
        <Link to="/docs/recommendations/ch1">Recommendations</Link>
        <Link to="/docs/resources/ch1">Resources</Link>
        <Link to="/docs/checklist/ch1">Checklist</Link>
      </div>
    </div>
  );
}