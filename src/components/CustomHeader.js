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
    display: block;
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
  
  .mobile-nav-item {
    position: relative;
  }
  
  .mobile-nav-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .mobile-nav-link .arrow {
    transition: transform 0.3s ease;
    font-size: 1.2rem;
  }
  
  .mobile-nav-link .arrow.expanded {
    transform: rotate(90deg);
  }
  
  .mobile-submenu {
    display: none;
    background-color: rgba(0,0,0,0.2);
    padding-left: 1rem;
  }
  
  .mobile-submenu.open {
    display: block;
  }
  
  .mobile-submenu a {
    font-size: 0.9rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  
  .mobile-submenu a:hover {
    background-color: rgba(255,255,255,0.05);
    padding-left: 1rem;
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
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);
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
    setExpandedSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setExpandedSubmenu(expandedSubmenu === index ? null : index);
  };

  const handleMobileNavClick = (link, index, e) => {
    if (link.submenu) {
      e.preventDefault();
      toggleSubmenu(index);
    } else {
      closeMobileMenu();
    }
  };

  const navigationLinks = [
    { 
      to: "/docs/about-us/background", 
      label: "About Us",
      submenu: [
        { to: "/docs/about-us/Background", label: "Background" },
        { to: "/docs/about-us/Purpose", label: "Purpose" },
        { to: "/docs/about-us/Rationale", label: "Rationale" },
        { to: "/docs/about-us/Structure", label: "Structure" },
        { to: "/docs/about-us/Target%20Audience", label: "Target Audience" }
      ]
    },
    { 
      to: "/docs/experiences-lessons-2020/Chapter-01/introduction", 
      label: "Experiences and Lessons",
      submenu: [
        { to: "/docs/experiences-lessons-2020/Chapter-01/Introduction", label: "1. Project Planning and Management" },
        { to: "/docs/experiences-lessons-2020/Chapter-02/Introduction", label: "2. Geospatial Mapping and EA Database" },
        { to: "/docs/experiences-lessons-2020/Chapter-03/Introduction", label: "3. Enumeration Instruments and Tools" },
        { to: "/docs/experiences-lessons-2020/Chapter-04/Introduction", label: "4. Data Capture and Management" },
        { to: "/docs/experiences-lessons-2020/Chapter-05/Introduction", label: "5. Census Testing and Pilots" },
        { to: "/docs/experiences-lessons-2020/Chapter-06/Introduction", label: "6. Recruitment and Training" },
        { to: "/docs/experiences-lessons-2020/Chapter-07/Introduction", label: "7. Deployment and Supervision" },
        { to: "/docs/experiences-lessons-2020/Chapter-08/Introduction", label: "8. Enumeration and Logistics" },
        { to: "/docs/experiences-lessons-2020/Chapter-09/Introduction", label: "9. Quality Assurance and Risk Management" },
        { to: "/docs/experiences-lessons-2020/Chapter-10/Introduction", label: "10. Census Analysis and Products" },
        { to: "/docs/experiences-lessons-2020/Chapter-11/Introduction", label: "11. Partnerships and Collaboration" },
        { to: "/docs/experiences-lessons-2020/Chapter-12/Introduction", label: "12. Advocacy and Publicity" },
        { to: "/docs/experiences-lessons-2020/Chapter-13/Introduction", label: "13. Procurement and Financial Management" },
        { to: "/docs/experiences-lessons-2020/Chapter-14/Introduction", label: "14. Post-Enumeration Survey" },
        { to: "/docs/experiences-lessons-2020/Chapter-15/Introduction", label: "15. Alternative Approaches" },
        { to: "/docs/experiences-lessons-2020/Chapter-16/Introduction", label: "16. Planning Checklist" }
      ]
    },
    { 
      to: "/docs/case-studies/Chapter-01/Case%20Studies", 
      label: "Case Studies",
      submenu: [
        { to: "/docs/case-studies/Chapter-01/Case%20Studies", label: "1. Project Planning and Management" },
        { to: "/docs/case-studies/Chapter-02/Case%20Studies", label: "2. Geospatial Mapping" },
        { to: "/docs/case-studies/Chapter-03/Case%20Studies", label: "3. Enumeration Instruments" },
        { to: "/docs/case-studies/Chapter-04/Case%20Studies", label: "4. Data Capture" },
        { to: "/docs/case-studies/Chapter-05/Case%20Studies", label: "5. Census Testing" },
        { to: "/docs/case-studies/Chapter-06/Case%20Studies", label: "6. Recruitment and Training" },
        { to: "/docs/case-studies/Chapter-07/Case%20Studies", label: "7. Deployment and Supervision" },
        { to: "/docs/case-studies/Chapter-08/Case%20Studies", label: "8. Enumeration and Logistics" },
        { to: "/docs/case-studies/Chapter-09/Case%20Studies", label: "9. Quality Assurance" },
        { to: "/docs/case-studies/Chapter-10/Case%20Studies", label: "10. Census Analysis" },
        { to: "/docs/case-studies/Chapter-11/Case%20Studies", label: "11. Partnerships" },
        { to: "/docs/case-studies/Chapter-12/Case%20Studies", label: "12. Advocacy" },
        { to: "/docs/case-studies/Chapter-13/Case%20Studies", label: "13. Procurement" },
        { to: "/docs/case-studies/Chapter-14/Case%20Studies", label: "14. Post-Enumeration Survey" },
        { to: "/docs/case-studies/Chapter-15/Case%20Studies", label: "15. Alternative Approaches" },
        { to: "/docs/case-studies/Chapter-16/Case%20Studies", label: "16. Planning Checklist" }
      ]
    },
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
            <div key={index} className="mobile-nav-item">
              {link.submenu ? (
                <>
                  <div
                    className="mobile-nav-link"
                    onClick={(e) => handleMobileNavClick(link, index, e)}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.2)',
                      fontSize: '1.0rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{link.label}</span>
                    <span className={`arrow ${expandedSubmenu === index ? 'expanded' : ''}`}>
                      ▶
                    </span>
                  </div>
                  <div className={`mobile-submenu ${expandedSubmenu === index ? 'open' : ''}`}>
                    {link.submenu.map((sublink, subIndex) => (
                      <Link key={subIndex} to={sublink.to} onClick={closeMobileMenu}>
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={link.to} onClick={closeMobileMenu}>
                  {link.label}
                </Link>
              )}
            </div>
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
