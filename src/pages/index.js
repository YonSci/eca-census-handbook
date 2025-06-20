import React from "react";
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import CustomHeader from '@site/src/components/CustomHeader'; // Import the new CustomHeader

const pageSpecificStyles = `
  body {
    /* Consider moving global body styles to src/css/custom.css */
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color:rgb(255, 255, 255);
    line-height: 1.6;
  }
  /* Header styles have been moved to CustomHeader.js */
  .feature-blocks {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 3rem 2rem;
    background-color: white;
    max-width: 1200px;
    margin: 0 auto;
  }
  .feature-card {
    background-color: #f9f9f9;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }
  .feature-card:hover {
    transform: translateY(-5px);
  }
  .feature-card h3 {
    font-size: 1.5rem;
    color: #1b3a5e;
    margin-bottom: 1rem;
  }
  .feature-card p {
    font-size: 1.1rem;
    color: #333;
  }
  .feature-card a {
    text-decoration: none;
    color: #28a745;
    font-weight: bold;
    display: inline-block;
    margin-top: 1rem;
  }
  .feature-card a:hover {
    color:rgb(34, 48, 137);
  }
  .footer {
    background-color:rgb(0, 60, 87);
    color: black;
    padding: 2rem;
    text-align: center;
  }
  .footer p {
    margin: 0.5rem 0;
    color: rgb(255, 255, 255);
    text-align: center;
  }
  .footer a {
    color:rgb(255, 255, 255);
    text-decoration: none;
    transition: color 0.3s ease;
  }
  .footer a:hover {
    color:rgb(225, 74, 74);
  }
  .logos {
    display: flex;
    justify-content: center;
    gap: 10rem;
    margin-bottom: 1rem;
  }
  .logo-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .logo-item span {
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    /* Header media queries have been moved to CustomHeader.js */
    .feature-blocks {
      grid-template-columns: 1fr;
      padding: 2rem 1rem;
    }
    .logos {
      flex-direction: column;
      align-items: center;
    }
    .logo-item {
      margin-bottom: 1rem;
    }
  }
`;

const HomePage = () => (
  <>
    {/* Manually added banner for landing page */}
    <img
      src="/eca-census-handbook/img/un8.png" // Absolute path from site root
      alt="UN Banner"
      style={{
        width: "100%",
        height: "10px",
        display: "block",
        margin: "0 auto",
        position: "sticky", // Make the banner sticky
        top: "0", // Stick to the very top
        zIndex: 1001, // Ensure it's above other content but potentially below a modal if needed
      }}
    />
    <CustomHeader /> {/* Use the new CustomHeader component */}
    <style>{pageSpecificStyles}</style>{" "}
    {/* Styles for the rest of the homepage content */}
    <div className={styles.heroSection}>
      <div className={styles.heroContentFlex}>
        <div className={styles.heroText}>
          <h2>
            <span className={styles.heroTitleBlue}>E-Census Handbook for</span>{" "}
            <span className={styles.heroTitleGreen}>Africa</span>
          </h2>
          <p className={styles.heroSubtitle}>
            Based on Experiences and Lessons from the 2020 Round of Population
            and Housing Censuses
          </p>
          <button
            className={styles.heroButton}
            onClick={() => (window.location.href = "#feature-blocks")}
          >
            Explore Features
          </button>
        </div>
        <div className={styles.heroImage}>
          <img
            src="img/africa1.png"
            alt="Africa Map"
            className={styles.africaMap}
          />
        </div>
      </div>
    </div>
    <div className="feature-blocks" id="feature-blocks">
      {/* Existing feature cards ... */}
      <div className="feature-card">
        {/* Lightbulb SVG (Experiences and Lessons card) */}
        <svg
          width="48"
          height="48"
          fill="none"
          stroke="#d4a000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3.5 5.5V17a1 1 0 0 1-2 0v-2.5C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7z" />
        </svg>
        <h3>Experiences and Lessons</h3>
        <p>
          Discover key takeaways and lessons learned from digital census
          implementations across Africa.
        </p>
        <a href="docs/experiences-lessons-2020/Chapter-01/Background">
          Learn More
        </a>
      </div>
      <div className="feature-card">
        {/* Document SVG (Case Studies card) */}
        <svg
          width="48"
          height="48"
          fill="none"
          stroke="#3b5bdb"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 6h8M8 10h8M8 14h4" />
        </svg>
        <h3>Case Studies</h3>
        <p>
          Explore detailed case studies showcasing innovative practices and
          solutions in digital censuses.
        </p>
        <a href="docs/case-studies/ch1">View Case Studies</a>
      </div>
      <div className="feature-card">
        {/* Checkmark SVG (Recommendations card) */}
        <svg
          width="48"
          height="48"
          fill="none"
          stroke="#28a745"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8l-5.5 7L8 13" />
        </svg>
        <h3>Recommendations</h3>
        <p>
          Access expert recommendations for planning and executing digital
          censuses in the 2030 round.
        </p>
        <a href="docs/recommendations/ch1">See Recommendations</a>
      </div>
      <div className="feature-card">
        {/* Folder SVG (Resources card) */}
        <svg
          width="48"
          height="48"
          fill="none"
          stroke="#8f32ff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M3 7a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
        <h3>Resources</h3>
        <p>
          Find useful tools, documents, and links to support your digital census
          projects.
        </p>
        <a href="docs/resources/ch1">Explore Resources</a>
      </div>

      {/* New Enquiries card */}
      <div className="feature-card">
        {/* Envelope SVG for Enquiries */}
        <svg
          width="48"
          height="48"
          fill="none"
          stroke="#ff5733"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
          <polyline points="2,4 12,13 22,4" />
        </svg>
        <h3>Enquiries</h3>
        <p>
          The handbook will be regularly updated with new lessons and
          recommendations as these unfold. If you have a case study that you
          would like to be included in the handbook please contact us via email.
        </p>
        <a href="mailto:muhawava@un.org">Contact Us</a>
      </div>

      {/* New Checklist card */}
      <div className="feature-card">
        {/* Checklist SVG */}
        <svg
          width="48"
          height="48"
          fill="none"
          stroke="#3b5bdb"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <h3>Checklist</h3>
        <p>
          Use our checklist to ensure that all necessary steps and best
          practices are met during your census process.
        </p>
        <a href="docs/checklist/ch1">View Checklist</a>
      </div>
    </div>
    <div className="footer">
      <div className="logos">
        <div className="logo-item">
          <img
            src="img/uneca2.png"
            alt="UNECA Logo"
            className={styles.uneccaLogo}
          />
          <span></span>
        </div>
        <div className="logo-item">
          <img
            src="img/unfpa2.png"
            alt="UNFPA Logo"
            className={styles.unfpaLogo}
          />
          <span></span>
        </div>
        <div className="logo-item">
          <img
            src="img/ons11.png"
            alt="ONS-UK Logo"
            className={styles.onsLogo}
          />
          <span></span>
        </div>
      </div>
      <p>© 2024 UN Economic Commission for Africa (ECA)</p>
      <p>
        Contact us at <a href="muhawava@un.org">muhawava@un.org</a>
      </p>
      <p>
        Last Updated:{" "}
        <span>
          {new Date().toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
      </p>

    </div>
  </>
);

export default HomePage;