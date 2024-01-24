import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Фича 1',
    imgSrc: require('@site/static/img/giphy1.gif').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias vero adipisci.
      </>
    ),
  },
  {
    title: 'Фича 2',
    imgSrc: require('@site/static/img/giphy2.gif').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias vero adipisci.
      </>
    ),
  },
  {
    title: 'Фича 3',
    imgSrc: require('@site/static/img/giphy3.gif').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias vero adipisci.
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
