import React from 'react';
import Link from '@docusaurus/Link';
import SearchBar from '@theme/SearchBar'; // Import the SearchBar
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Styles extracted from the original HomePage header
// Global 'body' styles were removed as they should be handled by Docusaurus global styles (e.g., src/css/custom.css)
// The '.header' class was renamed to '.custom-page-header' to avoid potential conflicts and ensure styles are scoped.
const headerStyles = `
  .custom-page-header {
    background: linear-gradient(90deg, #206095, #206095);
    color: white;
    padding: 1.5rem 2rem;
    position: sticky;
    top: 10px; /* Adjusted to make space for the 10px banner */
    z-index: 1000; /* Ensures it stays on top of other content */
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(32, 96, 149, 1);
    height: 90px; /* Adjusted height to accommodate the header content */
  }
  .custom-page-header h1 {
    margin: 0;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
  }
  .custom-page-header h1::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>');
    margin-right: 0.5rem;
    vertical-align: middle;
  }
  .custom-page-header .nav-links-and-search { /* New wrapper for nav links and search */
    display: flex;
    align-items: center;
  }
  .custom-page-header .nav-links a {
    color: white;
    text-decoration: none;
    margin-left: 1.5rem;
    font-size: 1.0rem;
    transition: color 0.3s ease;
  }
  .custom-page-header .nav-links a:hover {
    color: #ff5733; /* You might want to use a CSS variable for this color for easier theming */
  }
  .custom-page-header .search-bar-container { /* Style for the search bar container */
    margin-left: 1.5rem; /* Adjust as needed for spacing */
  }
  
  @media (max-width: 768px) {
    .custom-page-header {
      flex-direction: column;
      padding: 1rem;
    }
    .custom-page-header .nav-links {
      display: flex; /* Ensure links are still manageable */
      flex-direction: column; /* Stack links vertically */
      align-items: center; /* Center links */
      margin-top: 1rem;
    }
    .custom-page-header .nav-links a {
      margin: 0.5rem 0; /* Adjust vertical margin for stacked links */
    }
    .custom-page-header .search-bar-container {
      margin-left: 0; /* Remove left margin */
      margin-top: 1rem; /* Add top margin for spacing */
      width: 100%; /* Allow search bar to take full width if desired */
    }
  }
`;

const CustomHeader = () => {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();
  
  // Determine the base path for your documentation for SearchBar logic
  let docsRouteBasePath = 'docs';
  if (siteConfig.presets && siteConfig.presets.length > 0) {
    const classicPreset = siteConfig.presets.find(p => p[0] === 'classic');
    if (classicPreset && classicPreset[1] && classicPreset[1].docs && classicPreset[1].docs.routeBasePath) {
      docsRouteBasePath = classicPreset[1].docs.routeBasePath;
    }
  }
  // Show SearchBar only on documentation pages
  const showSearchBar = location.pathname.startsWith(`${siteConfig.baseUrl}${docsRouteBasePath}/`);

  return (
    <>
      <style>{headerStyles}</style>
      <div className="custom-page-header">
        <h1>E-Census Handbook</h1>
        <div className="nav-links-and-search"> {/* Wrapper for nav links and search */}
          <div className="nav-links">
           <Link to="/">Home</Link>
           <Link to="/docs/experiences-lessons-2020/Chapter-01/Background">Experiences and Lessons</Link>
           <Link to="/docs/case-studies/ch1">Case Studies</Link>
           <Link to="/docs/recommendations/ch1">Recommendations</Link>
           <Link to="/docs/resources/ch1">Resources</Link>
           <Link to="/docs/checklist/ch1">Checklist</Link> 
          </div>
          {showSearchBar && (
            <div className="search-bar-container">
              <SearchBar />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomHeader;
