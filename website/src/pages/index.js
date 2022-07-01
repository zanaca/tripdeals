import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <img
            className={classnames(styles.heroBannerLogo, 'margin-vert--md')}
            src={'img/logo.svg'}
          />{' '}
          <h1 className="hero__title"> {siteConfig.title} </h1>{' '}
          <p className="hero__subtitle"> {siteConfig.tagline} </p>{' '}
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--primary button--lg',
                styles.getStarted,
              )}
              to={'deals'}>
              Get the deals→{' '}
            </Link>{' '}
          </div>{' '}
        </div>{' '}
      </header>{' '}
      <main>
        <p className="padding-vert--xl">
          <p className="container">
            <p className="row">
              <p className="col col--10 col--offset-1">
                <h2 className="text--center">
                  Find the best deals for your trip!{' '}
                </h2>{' '}
                <h3 className="text--center  margin-bottom--xl">
                  [ <a href="deals#destinations-beginning-with-letter-a"> A </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-b"> B </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-c"> C </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-d"> D </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-e"> E </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-f"> F </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-g"> G </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-h"> H </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-i"> I </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-j"> J </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-k"> K </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-l"> L </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-m"> M </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-n"> N </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-o"> O </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-p"> P </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-q"> Q </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-r"> R </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-s"> S </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-t"> T </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-u"> U </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-v"> V </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-w"> W </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-x"> X </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-y"> Y </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-z"> Z </a>{' '}
                  - <a href="deals#destinations-beginning-with-letter-#"> # </a>{' '}
                  ]
                </h3>
              </p>{' '}
            </p>{' '}
          </p>{' '}
        </p>{' '}
      </main>{' '}
    </Layout>
  );
}

export default Home;
