import React, { useState } from 'react';
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
    padding: 1rem 2rem;
    position: sticky;
    top: 10px;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(32, 96, 149, 1);
    min-height: 60px;
  }
  
  .custom-page-header h1 {
    margin: 0;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    flex-shrink: 0;
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
  
  .nav-links-and-search {
    display: flex;
    align-items: center;
  }
  
  .nav-links {
    display: flex;
    align-items: center;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    margin-left: 1.5rem;
    font-size: 1.0rem;
    transition: color 0.3s ease;
    white-space: nowrap;
  }
  
  .nav-links a:hover {
    color: #ff5733;
  }
  
  .search-bar-container {
    margin-left: 1.5rem;
  }
  
  .hamburger-menu {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 5px;
  }
  
  .hamburger-menu span {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 3px 0;
    transition: 0.3s;
  }
  
  .mobile-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #206095;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  
  .mobile-nav.open {
    display: flex;
  }
  
  .mobile-nav a {
    color: white;
    text-decoration: none;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    font-size: 1.0rem;
  }
  
  .mobile-nav a:hover {
    color: #ff5733;
    background-color: rgba(255,255,255,0.1);
    padding-left: 1rem;
  }
  
  .mobile-nav .search-bar-container {
    margin: 1rem 0 0 0;
    padding-top: 1rem;
    border-top: 1px solid rgba(255,255,255,0.2);
  }
  
  @media (max-width: 768px) {
    .custom-page-header {
      position: relative;
      padding: 1rem;
    }
    
    .custom-page-header h1 {
      font-size: 1.4rem;
    }
    
    .nav-links-and-search {
      display: none;
    }
    
    .hamburger-menu {
      display: flex;
    }
  }
  
  @media (max-width: 480px) {
    .custom-page-header {
      padding: 0.75rem;
    }
    
    .custom-page-header h1 {
      font-size: 1.2rem;
    }
  }
`;

const CustomHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navigationLinks = [
    { to: "/docs/about-us/background", label: "About Us" },
    { to: "/docs/experiences-lessons-2020/Chapter-01/introduction", label: "Experiences and Lessons" },
    { to: "/docs/case-studies/Chapter-01/Case%20Studies", label: "Case Studies" },
    { to: "/docs/recommendations/ch1", label: "Recommendations" },
    { to: "/docs/resources/ch1", label: "Resources" },
    { to: "/docs/checklist/ch1", label: "Checklist" }
  ];

  return (
    <>
      <style>{headerStyles}</style>
      <div className="custom-page-header">
        <h1>E-Census Handbook</h1>
        
        {/* Desktop Navigation */}
        <div className="nav-links-and-search">
          <div className="nav-links">
            {navigationLinks.map((link, index) => (
              <Link key={index} to={link.to}>{link.label}</Link>
            ))}
          </div>
          {showSearchBar && (
            <div className="search-bar-container">
              <SearchBar />
            </div>
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {navigationLinks.map((link, index) => (
            <Link key={index} to={link.to} onClick={closeMobileMenu}>
              {link.label}
            </Link>
          ))}
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
