import React from 'react';
import Container from '../structure/container'; // Ensure this import is correct if used
import section from '../../styles/blocks/section.title.module.scss';

interface SectionTitleProps {
  preTitle?: string;  // Make preTitle optional
  title: string;
  subTitle?: string;  // Make subTitle optional
}

const SectionTitle: React.FC<SectionTitleProps> = ({ preTitle, title, subTitle }) => {
  return (
    <div className={`${section.title}`}>
      {preTitle && <h4>{preTitle}</h4>}
      <h2>{title}</h2>
      {subTitle && <p className="subtitle">{subTitle}</p>}
    </div>
  );
};

export default SectionTitle;
