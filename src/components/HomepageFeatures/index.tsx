import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  page: string;
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    page: '/docs/rdfjs/',
    title: 'RDF/JS',
    image: '/img/rdfjs.png',
    description: (
      <>
        Be most productive by using modern, modular JavaScript libraries for creating and manipulating RDF graphs
      </>
    ),
  },
  {
    page: '/docs/workflows/',
    title: 'Workflows',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Barnard_59%2C_part_of_a_vast_dark_cloud.jpg/257px-Barnard_59%2C_part_of_a_vast_dark_cloud.jpg',
    description: (
      <>
        Automate ETL (extract, transform, load) tasks focused on Linked Data.
      </>
    ),
  },
  {
    page: '/docs/apis/',
    title: 'APIs',
    image: '/img/kopflos.png',
    description: (
      <>
        Simply create APIs for your data-centric applications
      </>
    ),
  },
  {
    page: '/docs/cubes/',
    title: 'Cubes',
    image: '/img/cube.png',
    description: (
      <>
        Use cube.link Cube Schema to create and manage RDF data cubes
      </>
    ),
  },
  {
    page: '',
    title: 'More',
    image: 'https://cygri.github.io/rdf-logos/png/rdf-128.png',
    description: (
      <>
        Use a variety of Semantic Web technologies such as SHACL or n3 to build data-centric applications
      </>
    ),
  },
];

function Feature({page, title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={page}>
          <img alt="feature image" src={image} style={{height: "128px"}} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <a href={page}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--2"></div>
          <div className="col col--8">
            <div className="text--center">
              <p>The digital world has evolved significantly since the advent of graphical user interfaces in the 1980s. Today, we interact with countless applications across multiple systems, creating an abundance of data that holds untapped potential. To realize the full value of this information, a paradigm shift is needed—one that places data at the center, rather than applications.</p>
              <p>Zazuko is dedicated to becoming the leading provider of <a href="http://datacentricmanifesto.org/">data-centric</a> tools and applications, fostering an open, data-centric ecosystem where both developers and end-users can thrive. We aim to break down barriers between domain specialists and the insights they seek, enabling them to derive valuable information from raw data and use it to solve real-world problems.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
