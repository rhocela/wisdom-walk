import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Connected Scripture Reading',
    Svg: require('@site/static/img/bible.svg').default,
    description: (
      <>
        Experience the Bible like never before with <a href="/docs/intro">The Bible Bridge</a>—a reading plan 
        that reveals the intricate connections between passages, themes, and God's 
        redemptive story from Genesis to Revelation.
      </>
    ),
  },
  {
    title: 'Biblical Insights & Revelations',
    Svg: require('@site/static/img/insights.svg').default,
    description: (
      <>
        Discover fresh perspectives on God's Word through careful study and 
        Spirit-led insights. Explore the deeper meanings and timeless truths 
        that illuminate our walk with Christ.
      </>
    ),
  },
  {
    title: 'Nuggets of Truth',
    Svg: require('@site/static/img/plant.svg').default,
    description: (
      <>
        Uncover precious gems hidden within Scripture—practical wisdom, 
        theological insights, and life-changing revelations that strengthen 
        faith and deepen understanding of God's heart.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
