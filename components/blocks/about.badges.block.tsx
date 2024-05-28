import Icon from '../utils/icon.util.jsx';
import Badges from '../utils/badge.list.util.jsx';
import badges from '../../styles/blocks/badges.module.scss';


interface BadgeObjects {
	key: string;
	name: string;
	type: string;
}

interface BadgesBlockProps {
  title: string;
  copy?: string; // Make copy optional
  list: BadgeObjects[];
  fullContainer?: boolean; // Make fullContainer optional
  block?: string;
  icon?: string; // Make icon optional
  invertedColor?: boolean; // Make invertedColor optional
  headerIcon?: boolean; // Make headerIcon optional
  containerClass?: string; // Make containerClass optional
}

interface CopyProps {
	copy: string | React.ReactNode | undefined; // Allow for undefined copy
}

const BadgesBlock: React.FC<BadgesBlockProps> = ({
  title, copy, list, fullContainer, block, icon, invertedColor, headerIcon, containerClass
}) => {
  return (
    <div className={`${badges.badgeBlockContainer} ${containerClass ?? ""}`}>
      {headerIcon && (
        <span className={headerIcon ? badges.headerIcon : ''}>
          <Icon icon={['fat', icon ?? '']} />
        </span>
      )}
      <h3>{title}</h3>
      {copy && <p>{copy}</p>}
      <Badges
		list={list}
		block={block || ''}
		color=""
		// invertedColor={invertedColor !== undefined ? invertedColor : false}
		fullContainer={fullContainer !== undefined ? fullContainer : false}
		/>
    </div>
  );
};

function Copy({ copy }: CopyProps): React.ReactElement | null {
	if (copy !== undefined) {
	  return (
		typeof copy === 'string' ? (
		  <p>{copy}</p>
		) : (
		  <>{copy}</> // Render ReactNode directly if it's not a string
		)
	  );
	} else {
	  return null; // Return null if copy is undefined
	}
}

export default BadgesBlock;
