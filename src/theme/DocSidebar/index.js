import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import { useLocation } from '@docusaurus/router';

export default function DocSidebarWrapper(props) {
  const location = useLocation();
  
  // Add custom class to sidebar container based on current section
  React.useEffect(() => {
    const sidebarContainer = document.querySelector('.theme-doc-sidebar-container');
    if (sidebarContainer) {
      // Remove any existing section classes
      sidebarContainer.classList.remove('case-studies-section', 'recommendations-section', 'experiences-section');
      
      // Add appropriate section class
      if (location.pathname.includes('/case-studies/')) {
        sidebarContainer.classList.add('case-studies-section');
      } else if (location.pathname.includes('/recommendations/')) {
        sidebarContainer.classList.add('recommendations-section');
      } else if (location.pathname.includes('/experiences-lessons-2020/')) {
        sidebarContainer.classList.add('experiences-section');
      }
    }
  }, [location.pathname]);

  return (
    <>
      <DocSidebar {...props} />
    </>
  );
} 