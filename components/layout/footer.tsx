import React, { useState, useEffect } from 'react';
import Container from '../structure/container';
import Icon from '../utils/icon.util';
import css from '../../styles/structure/footer.module.scss';
import content from '../../content/footer.json';
import settings from '../../content/_settings.json';

interface GithubInfo {
  stars: number | null;
  forks: number | null;
}

interface AcknowledgmentLink {
  person: string;
  link: string;
  note?: string; // Note is optional
}

interface SocialLink {
  url: string;
  icon: string;
}

interface PortfolioSettings {
    repo_api: string;
    repo_html: string;
    forkthis: string;
};


const Footer: React.FC = () => {
  const [gitHubInfo, setGitHubInfo] = useState<GithubInfo>({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch(settings.portfolio.repo_api)
      .then(response => response.json())
      .then((json: { stargazers_count: number; forks_count: number }) => {
        setGitHubInfo({
          stars: json.stargazers_count,
          forks: json.forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <footer className={css.container}>
      <Container classProp="" spacing={['verticalXXLrg', 'bottomLrg']}>
        <section className={css.sections}>
          {/* Acknowledgments */}
          <ul className={css.thanks}>
            <li><h4>Acknowledgments</h4></li>
            {content.acknowledgments.map((item: AcknowledgmentLink, index) => (
              <li key={index}>
                <a href={item.link} rel="noreferrer" target="_blank">
                  {item.person} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                </a>
                {item.note && <p>{item.note}</p>}
              </li>
            ))}
          </ul>

          {/* Links (Similar structure to Acknowledgments) */}
          <ul className={css.links}>
            {/* ... map over content.links ... */}
          </ul>

          {/* Social */}
          <ul className={css.social}>
            <li><h4>Social</h4></li>
            <li className={css.socialList}>
              {content.social.map((item: SocialLink, index) => (
                <a key={index} href={item.url} rel="noreferrer" target="_blank">
                  <Icon icon={['fab', item.icon]} />
                </a>
              ))}
            </li>
          </ul>
        </section>

        {/* GitHub Section */}
        <section className={css.github}>
          <a href={settings.portfolio.repo_html} rel="noreferrer" target="_blank">
            <h5>{settings.portfolio.forkthis}</h5>
            <ul>
              <li>
                <p>
                  <Icon icon={['fad', 'code-branch']} /> Forks: {gitHubInfo.forks ?? 'N/A'}
                </p>
              </li>
              <li>
                <p>
                  <Icon icon={['fad', 'star']} /> Stars: {gitHubInfo.stars ?? 'N/A'}
                </p>
              </li>
            </ul>
          </a>
        </section>
      </Container>

      <canvas id="gradient-canvas" data-transition-in />
    </footer>
  );
};

export default Footer;
