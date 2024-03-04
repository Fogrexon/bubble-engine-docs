import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ゲームを作るのが簡単',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ゲームに必要な当たり判定、データロード、ゲームルール設定等のロジックはすべて事前に用意されています。
        後は、ゲームのデザインに集中するだけです。
      </>
    ),
  },
  {
    title: '型安全性',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        完全にTypeScriptで書かれており、データ構造やキーバインド等は強力に型付けされています。
        TypeScriptを用いた強力な型チェックにより、コードの品質を保つことができます。
      </>
    ),
  },
  {
    title: '拡張性',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        デフォルトで用意されている機能に満足できなかったら、自分やコミュニティが作った拡張機能を導入することができます。
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
