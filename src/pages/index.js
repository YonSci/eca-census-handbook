import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ImageGallery from "@site/src/components/ImageGallery";

import Heading from '@theme/Heading';
import styles from './index.module.css';


const subtitle = `This handbook aims to provide a repository of experiences, key lessons and good practices learned from the planning and implementation of digital census in Africa during the years 2015 – 2024.

The handbook has been put together by the UN Economic Commission for Africa (ECA) in collaboration with UNPFA and ONS-UK, and is based on inputs from member states. The recommendations included in the handbook were agreed at the expert group meeting held in South Africa in September 2024, to which all member states were invited to send delegates. 

The handbook is split into chapters which broadly follow the process of running a census from planning a digital census through to digital census archiving. Each chapter contains an overview of the topic, case studies of innovative practices and lessons learnt and recommendations for the 2030 round of censuses in Africa.

Users can either work their way through the handbook using the next tabs, or select the sections of interest using the menu on the left-hand-side.

The handbook will be regularly updated with new lessons and recommendations as these unfold. If you have a case study that you would like to be included in the handbook please contact [rachel.shipsey@un.org].`;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>

        <p className={styles.subtitle}>
            {subtitle}
        </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Digital Population and Housing Census Handbook for Africa Based on Experiences and Lessons from the 2020 Round<head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ImageGallery />
      </main>
    </Layout>
  );
}
