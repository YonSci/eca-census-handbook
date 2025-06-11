import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ImageGallery from "@site/src/components/ImageGallery";

import Heading from '@theme/Heading';
import styles from './index.module.css';


 <img
      src="img/un7.png"
      alt="UN Banner"
      style={{width: "1300px", height: "auto", display: "block", margin: "0 auto" }}
      />



function FourFeatureCards() {
  return (
    <section className={styles.featureCardsSection}>
      <div className={styles.featureCardsGrid}>
        <div className={styles.featureCard}>
          {/* Inline SVG Example 1 */}
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" stroke="#FFD600" strokeWidth="4" fill="#FFFBEA"/>
            <path d="M30 15v20" stroke="#FFD600" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="30" cy="43" r="3" fill="#FFD600"/>
          </svg>
          <h3>Experiences and Lessons</h3>
          <p>
            Discover key takeaways and lessons learned from digital census implementations across Africa.
          </p>
          <Link to="/docs/experiences-lessons-2020/ch1" className={styles.cardLink}>
            Learn More
          </Link>
        </div>
        <div className={styles.featureCard}>
          {/* Inline SVG Example 2 */}
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect x="10" y="15" width="40" height="30" rx="4" fill="#E0E7FF"/>
            <rect x="18" y="23" width="24" height="6" rx="2" fill="#6366F1"/>
            <rect x="18" y="33" width="16" height="4" rx="2" fill="#6366F1"/>
          </svg>
          <h3>Case Studies</h3>
          <p>
            Explore detailed case studies showcasing innovative practices and solutions in digital censuses.
          </p>
          <Link to="/docs/case-studies/ch1" className={styles.cardLink}>
            View Case Studies
          </Link>
        </div>
        <div className={styles.featureCard}>
          {/* Inline SVG Example 3 */}
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" stroke="#22C55E" strokeWidth="4" fill="#ECFDF5"/>
            <path d="M20 32l7 7 13-13" stroke="#22C55E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3>Recommendations</h3>
          <p>
            Access expert recommendations for planning and executing digital censuses in the 2030 round.
          </p>
          <Link to="/docs/recommendations/ch1" className={styles.cardLink}>
            See Recommendations
          </Link>
        </div>
        <div className={styles.featureCard}>
          {/* Inline SVG Example 4 */}
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path
              d="M12 24a4 4 0 0 1 4-4h8l2.67 4H44a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V24Z"
              fill="#A21CAF"
              stroke="#A21CAF"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <h3>Resources</h3>
          <p>
            Find useful tools, documents, and links to support your digital census projects.
          </p>
          <Link to="/docs/resources/ch1" className={styles.cardLink}>
            Explore Resources
          </Link>
        </div>
      </div>
    </section>
  );
}




function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBannerCustom)}>
      <div className={styles.heroContainer}>
        <Heading as="h1" className={styles.heroTitle}>
          Digital Population and Housing<br />
          Census Handbook for <span className={styles.africaHighlight}>Africa</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          This handbook provides a repository of experiences, key lessons, and good practices from the planning and implementation of digital censuses in Africa during 2015–2024.
        </p>
        <Link to="/docs/experiences-lessons-2020/ch1" className={styles.heroButton}>
          Explore Features
        </Link>
        {/* Optional decorative SVG */}
        <svg className={styles.heroLeaf} width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M80 60C80 80 60 80 60 60C60 40 80 40 80 60Z" fill="#D6D9DF"/>
        </svg>
      </div>
    </header>
  );
}



function CustomFooter() {
  return (
    <footer className={styles.customFooter}>
      <div className={styles.footerLogos}>
        <img src="img/uneca111.png" alt="UN Logo" className={styles.footerLogo} />
        <img src="img/unfpa11.png" alt="UNFPA Logo" className={styles.footerLogo} />
        <img src="img/ons22.png" alt="ONS Logo" className={styles.footerLogo} />
      </div>
      <div className={styles.footerText}>
        <div>© 2024 UN Economic Commission for Africa (ECA)</div>
        <div>Contact us at <a href="mailto:rachel.shipsey@ons.gov.uk">rachel.shipsey@ons.gov.uk</a></div>
      </div>
    </footer>
  );
}




export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Digital Population and Housing Census Handbook for Africa Based on Experiences and Lessons from the 2020 Round<head />">
      
      {/* Banner Section - appears below the navbar and above the hero */}
      <div className={styles.banner}>
        <img
          src="img/un7.png"
          alt="Top Banner"
          style={{width: "1600px", height: "auto", display: "block", margin: "0 auto" }}
          className={styles.bannerImage}
        />
      </div>
      
      <HomepageHeader />
      <main>
        <FourFeatureCards />
        <ImageGallery />
      </main>
      <CustomFooter />
    </Layout>
  );
}







