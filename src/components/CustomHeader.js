import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import SearchBar from '@theme/SearchBar'; // Import the SearchBar for docs pages
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Styles extracted from the original HomePage header
// Global 'body' styles were removed as they should be handled by Docusaurus global styles (e.g., src/css/custom.css)
// The '.header' class was renamed to '.custom-page-header' to avoid potential conflicts and ensure styles are scoped.
const headerStyles = `
  .custom-page-header {
    background: linear-gradient(90deg, #206095, #206095);
    color: white;
    padding: 1rem 0.5rem 1rem 0.5rem;
    position: sticky;
    top: 10px;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(32, 96, 149, 1);
    min-height: 60px;
  }
  

  

  
  .nav-links-and-search {
    display: flex;
    align-items: center;
    gap: 0;
    justify-content: flex-start;
    padding-right: 2rem;
    padding-left: 1rem;
    width: 100%;
    min-height: 60px;
  }
  
  /* Ensure proper navigation alignment on docs pages */
  .nav-links-and-search.with-search {
    margin-left: 0;
    justify-content: flex-start;
  }
  
  /* No margin adjustment needed - filler takes exact search bar position */
  
  .homepage-filler {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    font-weight: 500;
  }
  
  .homepage-filler.search-position {
    margin-left: auto;
    margin-right: 1rem;
    flex-shrink: 0;
  }
  
  .africa-icon {
    font-size: 1.2rem;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
  }
  
  .homepage-tagline {
    white-space: nowrap;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    letter-spacing: 0.3px;
  }
  
  .homepage-filler.mobile {
    margin: 1rem 0 0 0;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    justify-content: center;
    text-align: center;
  }
  
  .nav-links {
    display: flex;
    align-items: center;
    gap: 0;
    flex-shrink: 0;
    min-width: fit-content;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    margin-left: 0;
    margin-right: 0.2rem;
    font-size: 1.0rem;
    transition: all 0.3s ease;
    white-space: nowrap;
    padding: 0.5rem 0.6rem;
    border-radius: 4px;
    position: relative;
  }
  
  .nav-links a:first-child {
    margin-left: 0;
  }
  
  .nav-links a:last-child {
    margin-right: 1rem;
  }
  
  .nav-links a:hover {
    color: #28a745;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .nav-links a.active {
    background-color: rgba(40, 167, 69, 0.2);
    color: #28a745;
    font-weight: 600;
    border-bottom: 2px solid #28a745;
  }
  
  .nav-links a.active:hover {
    background-color: rgba(40, 167, 69, 0.3);
  }
  
  .search-bar-container {
    margin-left: auto;
    margin-right: 0.5rem;
  }
  
  .theme-toggle-container {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin-left: 0.3rem;
  }
  
  .dark-mode-toggle {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    color: white;
    padding: 8px 12px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    flex-shrink: 0;
    white-space: nowrap;
    min-width: fit-content;
  }
  
  .dark-mode-toggle:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  .dark-mode-toggle.mobile {
    width: 100%;
    justify-content: center;
    margin-top: 0.5rem;
    padding: 10px 16px;
    display: flex;
    align-items: center;
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
    transition: all 0.3s ease;
  }
  
  .mobile-nav a:hover {
    color: #28a745;
    background-color: rgba(255,255,255,0.1);
    padding-left: 1rem;
  }
  
  .mobile-nav a.active {
    color: #28a745;
    background-color: rgba(40, 167, 69, 0.2);
    font-weight: 600;
    border-left: 4px solid #28a745;
    padding-left: 1rem;
  }
  
  .mobile-nav a.active:hover {
    background-color: rgba(40, 167, 69, 0.3);
  }
  
  .mobile-nav .search-bar-container {
    margin: 1rem 0 0 0;
    padding-top: 1rem;
    border-top: 1px solid rgba(255,255,255,0.2);
  }
  
  /* Dark mode support for theme toggle */
  [data-theme='dark'] .dark-mode-toggle {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  [data-theme='dark'] .dark-mode-toggle:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
  }
  
  /* Fix Algolia DocSearch modal positioning and visibility */
  .DocSearch-Modal {
    z-index: 9999 !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
  }
  
  .DocSearch-Container {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    z-index: 9999 !important;
  }
  
  .DocSearch-SearchBar {
    background: white !important;
  }
  
  .DocSearch-Input {
    color: #1a1a1a !important;
    background: transparent !important;
  }
  
  .DocSearch-Input::placeholder {
    color: #666 !important;
  }
  
  .DocSearch-Search-Icon {
    color: #666 !important;
  }
  
  .DocSearch-Hit-title {
    color: #1a1a1a !important;
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
  
  .mobile-nav-link.active {
    color: #28a745 !important;
    background-color: rgba(40, 167, 69, 0.2) !important;
    font-weight: 600 !important;
    border-left: 4px solid #28a745 !important;
    padding-left: 1rem !important;
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
    
    .nav-links-and-search {
      display: none;
    }
    
    .theme-toggle-container .dark-mode-toggle:not(.mobile) {
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
  }
`;

const CustomHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);
  const [colorMode, setColorMode] = useState('light');
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();
  
  // Show search only on docs pages to avoid context errors
  const showSearchBar = location.pathname.startsWith('/docs');
  // Show theme toggle only on docs pages 
  const showThemeToggle = location.pathname.startsWith('/docs');
  
  // Function to determine if a navigation link is active
  const isActiveLink = (linkTo) => {
    const currentPath = location.pathname;
    
    // Handle exact home match
    if (linkTo === "/" && currentPath === "/") {
      return true;
    }
    
    // Handle docs sections - check if current path starts with the link path
    if (linkTo !== "/" && currentPath.startsWith(linkTo.replace(/\/$/, ''))) {
      return true;
    }
    
    return false;
  };
  
  // Initialize theme and search functionality
  React.useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') || 
                      localStorage.getItem('docusaurus.tab.theme') || 
                      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    setColorMode(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Set up search keyboard shortcut only on docs pages
    if (showSearchBar) {
      const handleKeyDown = (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
          event.preventDefault();
          console.log('Ctrl+K pressed on docs page');
          
          // Try to use existing SearchBar functionality
          const searchButton = document.querySelector('.DocSearch-Button');
          if (searchButton) {
            searchButton.click();
          }
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [showSearchBar]);

  // Theme toggle function
  const toggleColorMode = () => {
    const newTheme = colorMode === 'dark' ? 'light' : 'dark';
    setColorMode(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    localStorage.setItem('docusaurus.tab.theme', newTheme);
    
    // Dispatch storage event for cross-tab sync
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'theme',
      newValue: newTheme
    }));
  };

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
    { to: "/", label: "Home" },
    { 
      to: "/docs/about-us/", 
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
      to: "/docs/experiences-lessons-2020/", 
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
      to: "/docs/case-studies/", 
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
    { to: "/docs/recommendations/", label: "Recommendations" },
    { to: "/docs/resources/", label: "Resources" },
    { to: "/docs/checklist/", label: "Checklist" }
  ];

  return (
    <>
      <style>{headerStyles}</style>
      <div className="custom-page-header">
        {/* Desktop Navigation */}
        <div className={`nav-links-and-search ${showSearchBar ? 'with-search' : ''}`}>
          <div className="nav-links">
            {navigationLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.to} 
                className={isActiveLink(link.to) ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
                    </div>
          {showSearchBar ? (
            <div className="search-bar-container">
              <SearchBar />
            </div>
          ) : (
            <div className="homepage-filler search-position">
              <span className="africa-icon">🌍</span>
              <span className="homepage-tagline">Digital Census Guide for Africa</span>
            </div>
          )}
          {showThemeToggle && (
            <div className="theme-toggle-container">
              <button 
                className="dark-mode-toggle"
                onClick={toggleColorMode}
                title={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
              >
                {colorMode === 'dark' ? '☀️' : '🌙'}
              </button>
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
                    className={`mobile-nav-link ${isActiveLink(link.to) ? 'active' : ''}`}
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
                <Link 
                  to={link.to} 
                  onClick={closeMobileMenu}
                  className={isActiveLink(link.to) ? 'active' : ''}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          {showSearchBar ? (
            <div className="search-bar-container">
              <SearchBar />
            </div>
          ) : (
            <div className="homepage-filler mobile">
              <span className="africa-icon">🌍</span>
              <span className="homepage-tagline">Digital Census Guide for Africa</span>
            </div>
          )}
          {showThemeToggle && (
            <div className="theme-toggle-container">
              <button 
                className="dark-mode-toggle mobile"
                onClick={toggleColorMode}
                title={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
              >
                {colorMode === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomHeader;
