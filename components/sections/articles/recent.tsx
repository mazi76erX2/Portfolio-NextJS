import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block';
import Icon from '../../utils/icon.util';
import css from '../../../styles/sections/articles/recent.module.scss';

import Image from 'next/image'

// Define interfaces for the data structures
interface MediumArticle {
  title: string;
  pubDate: string;
  link: string;
  author: string;
  thumbnail: string;
  categories: string[];
}

interface MediumArticlesData {
  feed: any; // Replace 'any' with the actual type of the feed data if known
  items: MediumArticle[];
}

interface RecentProps {
  mediumArticles: MediumArticlesData;
}

const Recent: React.FC<RecentProps> = ({ mediumArticles }) => {
  const { items: articles } = mediumArticles;

  return (
    <Section classProp="borderBottom">
      <Container classProp="" spacing={'verticalXXXXLrg'}>
        <SectionTitle
          title="Recent Articles"
          preTitle="Informative"
          subTitle="A personal quest to become a better creative writer."
        />
        <section className={css.projects}>
          {articles.map(({ title, pubDate, link, author, thumbnail, categories }, index) => {
            const date = new Date(pubDate).toDateString();
            return (
              <article key={index} className={css.project}>
                <span className={css.featuredImage}>
                  <Image src={thumbnail} alt="Article thumbnail" />
                </span>
                <span className={css.header}>
                  <a href={link} rel="noreferrer" target="_blank">
                    {title} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                  </a>
                </span>
                <span className={css.descriptionContainer}></span> {/* Empty description for now */}
                <span className={css.details}>
                  <p>By {author}</p>
                  <p className={css.pushedAt}>{date}</p>
                </span>
                <span className={css.topicsContainer}>
                  {categories.map((category, catIndex) => (
                    <span key={catIndex} className={css.topics}>
                      <Icon icon={['fab', 'medium']} /> {category}
                    </span>
                  ))}
                </span>
              </article>
            );
          })}
        </section>
      </Container>
    </Section>
  );
};

export default Recent;
