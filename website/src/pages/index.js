import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from './styles.module.css';


function Home() {
  const context = useDocusaurusContext();
  const {
    siteConfig = {}
  } = context;
  return ( <
    Layout title = {
      siteConfig.title
    }
    description = {
      siteConfig.tagline
    } >
    <
    header className = {
      classnames('hero', styles.heroBanner)
    } >
    <
    div className = "container" >
    <
    img className = {
      classnames(styles.heroBannerLogo, 'margin-vert--md')
    }
    src = {
      withBaseUrl('img/logo.svg')
    }
    /> <
    h1 className = "hero__title" > {
      siteConfig.title
    } < /h1> <
    p className = "hero__subtitle" > {
      siteConfig.tagline
    } < /p> <
    div className = {
      styles.buttons
    } >
    <
    Link className = {
      classnames(
        'button button--primary button--lg',
        styles.getStarted,
      )
    }
    to = {
      withBaseUrl('deals')
    } >
    Veja as ofertas→ < /Link> < /
    div > <
    /div> < /
    header > <
    main >
    <
    p className = "padding-vert--xl" >
    <
    p className = "container" >
    <
    p className = "row" >
    <
    p className = "col col--10 col--offset-1" >
    <
    h2 className = "text--center" >
    Encontre as melhores ofertas para sua viagem ideal! <
    /h2> <h3 className = "text--center  margin-bottom--xl" >[ <
    a href = "deals#destinos-com-a-letra-a" > A < /a> - <
    a href = "deals#destinos-com-a-letra-b" > B < /a> - <
    a href = "deals#destinos-com-a-letra-c" > C < /a> - <
    a href = "deals#destinos-com-a-letra-d" > D < /a> - <
    a href = "deals#destinos-com-a-letra-e" > E < /a> - <
    a href = "deals#destinos-com-a-letra-f" > F < /a> - <
    a href = "deals#destinos-com-a-letra-g" > G < /a> - <
    a href = "deals#destinos-com-a-letra-h" > H < /a> - <
    a href = "deals#destinos-com-a-letra-i" > I < /a> - <
    a href = "deals#destinos-com-a-letra-j" > J < /a> - <
    a href = "deals#destinos-com-a-letra-k" > K < /a> - <
    a href = "deals#destinos-com-a-letra-l" > L < /a> - <
    a href = "deals#destinos-com-a-letra-m" > M < /a> - <
    a href = "deals#destinos-com-a-letra-n" > N < /a> - <
    a href = "deals#destinos-com-a-letra-o" > O < /a> - <
    a href = "deals#destinos-com-a-letra-p" > P < /a> - <
    a href = "deals#destinos-com-a-letra-q" > Q < /a> - <
    a href = "deals#destinos-com-a-letra-r" > R < /a> - <
    a href = "deals#destinos-com-a-letra-s" > S < /a> - <
    a href = "deals#destinos-com-a-letra-t" > T < /a> - <
    a href = "deals#destinos-com-a-letra-u" > U < /a> - <
    a href = "deals#destinos-com-a-letra-v" > V < /a> - <
    a href = "deals#destinos-com-a-letra-w" > W < /a> - <
    a href = "deals#destinos-com-a-letra-x" > X < /a> - <
    a href = "deals#destinos-com-a-letra-y" > Y < /a> - <
    a href = "deals#destinos-com-a-letra-z" > Z < /a> - <
    a href = "deals#destinos-com-a-letra-#" > # < /a> ]</h3 >

    <
    /p > < /
    p > <
    /p > < /
    p > <
    /main > < /
    Layout >
  );
}

export default Home;
