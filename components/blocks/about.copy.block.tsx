import React from 'react';
import Icon from '../utils/icon.util'; // Assuming this component is also in TypeScript
import space from '../utils/spacing.util';

// Define the interface for CopyBlockProps
interface CopyBlockProps {
  containerClass: string;
  iconClass: string;
  icon: [string, string]; // Array with icon type and key
  title: string;
  copy: string;
}

const CopyBlock: React.FC<CopyBlockProps> = ({
  containerClass,
  iconClass,
  icon,
  title,
  copy
}) => {
  return (
    <div className={containerClass}>
      <span className={iconClass}>
        <Icon icon={icon} />
      </span>
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  );
};

export default CopyBlock;
