import React from 'react'; // Import React
import Head from '@docusaurus/Head'; // Import Head
import clsx from 'clsx'; // Import clsx
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import CustomHeader from '@site/src/components/CustomHeader'; // Import your CustomHeader
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import {useLocation} from '@docusaurus/router'; // Import useLocation

import styles from './styles.module.css';

function LayoutWrapper(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    noIndex, // Ensure noIndex is destructured if passed as a prop
    title,
    description,
    // Add this here
    ...layoutProps
  } = props;
  const {pathname} = useLocation(); // Use useLocation to get pathname

  // Determine if it's the homepage based on the baseUrl from docusaurus.config.js
  const isHomepage = pathname === '/eca-census-handbook/';

  return (
    <LayoutProvider>
      <Head>
        {/* Your CustomHeader will handle the title display, so we don't strictly need Docusaurus's title here if it causes duplication */}
        {title && <title>{title}</title>}
        {noIndex && (
          <meta
            name="robots"
            content="noindex, nofollow, noarchive" />
        )}

        {description && <meta name="description" content={description} />}

        {description && (
          <meta property="og:description" content={description} />
        )}
        {title && <meta property="og:title" content={title} />}
        {title && <meta property="twitter:title" content={title} />}
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <img
        src="/eca-census-handbook/img/un8.png" // Use absolute path from site root
        alt="UN Banner"
        style={{width: "100%", height: "10px", display: "block", margin: "0 auto" }} // Adjusted width to 100%
      />

      <CustomHeader /> {/* Add your CustomHeader here, above the default Navbar slot */}
      <SkipToContent />

      <AnnouncementBar />
      <Navbar {...layoutProps} />

      <div
        className={clsx(
          'main-wrapper',
          wrapperClassName,
          isHomepage ? styles.homePageWrapper : styles.docPageWrapper // Apply conditional class
        )}
        // Docusaurus's LayoutProvider or other mechanisms typically handle error boundaries.
        // Directly using errorBoundary.wrap is not standard unless errorBoundary is a passed prop or specific import.
        >
        {children}
      </div>

      {!noFooter && <Footer />}
    </LayoutProvider>
  );
}

export default LayoutWrapper;
