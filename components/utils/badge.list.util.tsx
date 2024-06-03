import { useEffect } from 'react';
import { m, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Icon from './icon.util.jsx';
import badges from '../../styles/blocks/badges.module.scss';

// Define interfaces for type safety
interface Badge {
  key: string;
  name: string;
  type: 'far' | 'fad' | 'fat' | 'fas' | 'devicon';
}

interface BadgesProps {
  list: Badge[];
  block?: string;
  color?: boolean;
  fullContainer?: boolean;
}

// Framer Motion animation variants
const containerVariants: Variants = {
  hidden: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.025
    }
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.025,
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: {
    y: 20,
    opacity: -0.5
  },
  visible: {
    y: 0,
    opacity: 1
  }
};

interface IconModuleProps {
	iconKey: string;
	iconType: 'far' | 'fad' | 'fat' | 'fas' | 'devicon';
	color: boolean;
}

export default function Badges({ list, block, color = true, fullContainer = false }: BadgesProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, inView]);

  return (
    <m.ul
      className={`${badges.list} ${block ? badges[block] : ''} ${fullContainer ? badges.fullContainer : ''}`}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {list.map(({ key, name, type }) => (
        <m.li key={name} className={`${badges.item} ${key}`} variants={itemVariants}>
          <IconModule iconKey={key} iconType={type} color={color} />
          <span className={badges.title}>{name}</span>
        </m.li>
      ))}
    </m.ul>
  );
}

function IconModule({ iconKey, iconType, color }: IconModuleProps) {
  const coloredClass = color ? 'colored' : '';

  switch (iconType) {
    case 'far':
    case 'fad':
    case 'fat':
    case 'fas':
      return <Icon icon={[iconType, iconKey]} />;
    case 'devicon':
      return <i className={`devicon-${iconKey}-plain ${coloredClass}`} />;
    default:
      return null;
  }
}
