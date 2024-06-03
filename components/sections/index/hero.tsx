import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import Section from '../../structure/section';
import Container from '../../structure/container';

import space from '../../utils/spacing.util';

import HeroBg from '../../blocks/hero.bg/bg-color-1';

import hero from '../../../styles/sections/index/hero.module.scss';
import button from '../../../styles/blocks/button.module.scss';
import content from '../../../content/index/hero.json';

interface HeroContent {
  intro: {
    startDelay: number;
    start: string;
    deleteDelay: number;
    end: string;
    restartDelay: number;
    speed: number;
    deletionSpeed: number;
    wrapper: "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  };
  header: {
    name: string;
    usp: string;
  };
  paragraph: string;
  buttons: {
    primary: {
      title: string;
    };
    secondary: {
      title: string;
    };
  };
}

const Hero: React.FC = () => {
  const [typingStatus, setTypingStatus] = useState<'Initializing' | 'typing' | 'typed' | 'deleting' | 'deleted'>('Initializing');

  return (
    <Section classProp={hero.section}>
      <Container classProp="" spacing="VerticalXXXL">
        <TypeAnimation
          className={hero.preHeader}
          sequence={[
            content.intro.startDelay,
            () => setTypingStatus('typing'),
            content.intro.start,
            () => setTypingStatus('typed'),
            content.intro.deleteDelay,
            () => setTypingStatus('deleting'),
            content.intro.end,
            () => setTypingStatus('deleted'),
            content.intro.restartDelay,
          ]}
          speed={content.intro.speed}
          deletionSpeed={content.intro.deletionSpeed}
          wrapper={content.intro.wrapper}
          repeat={Infinity}
        />

        <section>
          <h1 className={hero.header}>{content.header.name}</h1>
          <h1 className={`${hero.header} ${hero.primaryDim}`}>{content.header.usp}</h1>
        </section>
        <section>
          <p className={`${hero.primaryBright} subtitle ${space(["verticalLrg"])}`}>
            {content.paragraph}
          </p>
        </section>
        <section>
          <button
            className={`button ${button.primary}`}
            onClick={() => window.location.href = 'mailto:mazi76erx@gmail.com'}
          >
            {content.buttons.primary.title}
          </button>
          <button
            className={`button ${button.secondary} leaveSite`}
            onClick={() => window.open("https://www.linkedin.com/in/xolani-mazibuko-baa7a4244", "_blank")}
          >
            {content.buttons.secondary.title}
          </button>
        </section>
      </Container>
      <HeroBg />
    </Section>
  );
}

export default Hero;
