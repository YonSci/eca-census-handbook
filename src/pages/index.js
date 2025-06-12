import React from "react";
import Link from '@docusaurus/Link';

const styles = `
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    line-height: 1.6;
  }
  .header {
    background: linear-gradient(90deg, #1b3a5e, #2a5d8f);
    color: white;
    padding: 1.5rem 2rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .header h1 {
    margin: 0;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
  }
  .header h1::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>');
    margin-right: 0.5rem;
    vertical-align: middle;
  }
  .nav-links a {
    color: white;
    text-decoration: none;
    margin-left: 1.5rem;
    font-size: 1.2rem;
    transition: color 0.3s ease;
  }
  .nav-links a:hover {
    color: #ff5733;
  }
  .hero {
    background: linear-gradient(135deg, #f4e1e1 0%, #ffffff 100%);
    padding: 5rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .hero-content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hero h2 {
    font-size: 2.8rem;
    color: #1b3a5e;
    margin-bottom: 1rem;
  }
  .hero h2 span {
    font-weight: bolder;
    color: #28a745;
  }
  .hero p {
    font-size: 1.2rem;
    color: #333 ;
    max-width: 800px;
    margin: 0 auto 2rem;
  }
  .hero button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 5px;
    transition: transform 0.2s ease, background-color 0.3s ease;
  }
  .hero button:hover {
    background-color: #218838;
    transform: scale(1.05);
  }
  .hero::after {
    content: '';
    display: block;
    position: absolute;
    right: 10%;
    top: 20%;
    width: 200px;
    height: 200px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><path fill="rgba(27,58,94,0.1)" d="M150 100c0-50-50-90-100-50 50 40 100 0 100 50z"/></svg>');
    background-repeat: no-repeat;
    transform: rotate(45deg);
    pointer-events: none;
    z-index: 0;
  }
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
    color: #218838;
  }
  .footer {
    background-color:rgb(123, 192, 245);
    color: black;
    padding: 2rem;
    text-align: center;
  }
  .footer p {
    margin: 0.5rem 0;
  }
  .footer a {
    color:rgb(19, 20, 21);
    text-decoration: none;
    transition: color 0.3s ease;
  }
  .footer a:hover {
    color:rgb(0, 21, 251);
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
  .logo-item img {
    width: 160px;
    height: auto;
    margin-bottom: 0.5rem;
  }
  .logo-item span {
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      padding: 1rem;
    }
    .nav-links {
      margin-top: 1rem;
    }
    .nav-links a {
      margin: 0 0.5rem;
    }
    .hero {
      padding: 3rem 1rem;
    }
    .hero h2 {
      font-size: 2rem;
    }
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
    <style>{styles}</style>
    <div className="header">
      <h1>
        E-Census Handbook
      </h1>
      <div className="nav-links">
       <Link to="/">Home</Link>
       <Link to="/docs/experiences-lessons-2020/ch1">Experiences and Lessons</Link>
       <Link to="/docs/case-studies/ch1">Case Studies</Link>
       <Link to="/docs/recommendations/ch1">Recommendations</Link>
       <Link to="/docs/resources/ch1">Resources</Link>
       <Link to="/docs/checklist/ch1">Checklist</Link> 
      </div>
    </div>

    <img
      src="img/un8.png"
      alt="UN Banner"
      style={{width: "1600px", height: "10px", display: "block", margin: "0 auto" }}
      />
  

    <div className="hero">
      <div className="hero-content">
        <h2>
            e-Census Handbook for <span>Africa</span>
        </h2>
        <p>
          Based on Experiences and Lessons from the 2020 Round of Population and Housing Censuses
        </p>
        <button onClick={() => (window.location.href = "#feature-blocks")}>
          Explore Features
        </button>
      </div>
      <div
        style={{
          content: "",
          position: "absolute",
          right: "10%",
          top: "20%",
          width: 200,
          height: 200,
          backgroundImage:
            "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" viewBox=\"0 0 200 200\"><path fill=\"rgba(27,58,94,0.1)\" d=\"M150 100c0-50-50-90-100-50 50 40 100 0 100 50z\"/></svg>')",
          backgroundRepeat: "no-repeat",
          transform: "rotate(45deg)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      />
    </div>

    <div className="feature-blocks" id="feature-blocks">
      {/* Existing feature cards ... */}
      <div className="feature-card">
        {/* Lightbulb SVG (Experiences and Lessons card) */}
        <svg width="48" height="48" fill="none" stroke="#d4a000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3.5 5.5V17a1 1 0 0 1-2 0v-2.5C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7z" />
        </svg>
        <h3>Experiences and Lessons</h3>
        <p>
          Discover key takeaways and lessons learned from digital census implementations across Africa.
        </p>
        <a href="docs/experiences-lessons-2020/ch1">Learn More</a>
      </div>
      <div className="feature-card">
        {/* Document SVG (Case Studies card) */}
        <svg width="48" height="48" fill="none" stroke="#3b5bdb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 6h8M8 10h8M8 14h4" />
        </svg>
        <h3>Case Studies</h3>
        <p>
          Explore detailed case studies showcasing innovative practices and solutions in digital censuses.
        </p>
        <a href="docs/case-studies/ch1">View Case Studies</a>
      </div>
      <div className="feature-card">
        {/* Checkmark SVG (Recommendations card) */}
        <svg width="48" height="48" fill="none" stroke="#28a745" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8l-5.5 7L8 13" />
        </svg>
        <h3>Recommendations</h3>
        <p>
          Access expert recommendations for planning and executing digital censuses in the 2030 round.
        </p>
        <a href="docs/recommendations/ch1">See Recommendations</a>
      </div>
      <div className="feature-card">
        {/* Folder SVG (Resources card) */}
        <svg width="48" height="48" fill="none" stroke="#8f32ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
        <h3>Resources</h3>
        <p>
          Find useful tools, documents, and links to support your digital census projects.
        </p>
        <a href="docs/resources/ch1">Explore Resources</a>
      </div>

      {/* New Enquiries card */}
      <div className="feature-card">
        {/* Envelope SVG for Enquiries */}
        <svg width="48" height="48" fill="none" stroke="#ff5733" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
          <polyline points="2,4 12,13 22,4" />
        </svg>
        <h3>Enquiries</h3>
        <p>
          The handbook will be regularly updated with new lessons and recommendations as these unfold.
          If you have a case study that you would like to be included in the handbook please contact us via email.
        </p>
        <a href="mailto:rachel.shipsey@ons.gov.uk">Contact Us</a>
      </div>

      {/* New Checklist card */}
      <div className="feature-card">
        {/* Checklist SVG */}
        <svg width="48" height="48" fill="none" stroke="#3b5bdb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <h3>Checklist</h3>
        <p>
          Use our checklist to ensure that all necessary steps and best practices are met during your census process.
        </p>
        <a href="docs/checklist/ch1">View Checklist</a>
      </div>
    </div>




































    <div className="footer">
      <div className="logos">
        <div className="logo-item">
          <img src="img/uneca111.png" alt="UNECA Logo" />
          <span></span>
        </div>
        <div className="logo-item">
          <img src="img/unfpa11.png" alt="UNFPA Logo" />
          <span></span>
        </div>
        <div className="logo-item">
          <img src="img/ons22.png" alt="ONS-UK Logo" />
          <span></span>
        </div>
      </div>
      <p>© 2024 UN Economic Commission for Africa (ECA)</p>
      <p>
        Contact us at <a href="mailto:info@example.com">rachel.shipsey@ons.gov.uk</a>
      </p>
    </div>
  </>
);

export default HomePage;