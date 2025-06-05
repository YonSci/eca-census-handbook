import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Population and Housing Censuses (PHC)',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       PHC provide countries with fundamental demographic and socio-economic information. This information is key for planning, programming, and monitoring international, regional, and national commitments.
      </>
    ),
  },
  {
    title: 'Census E-Handbook',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Census e-handbook has been developed to serve as a reference document for African countries in undertaking digital censuses.
      </>
    ),
  },
  {
    title: 'Lessons Learned and Good Practices',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The e-handbook provides a repository of experiences, key lessons learned and good practices in planning and implementation of digital censuses in Africa during the 2020 Round of Population and Housing Censuses.
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
