import React from 'react';

type Theme = 'bg-color-1' | 'bg-other-theme';

interface HeroBgProps {
  theme: Theme;
}

const HeroBg: React.FC<HeroBgProps> = ({ theme }) => {
  const BackgroundComponent = bgSelector(theme);

  return (
    <div className={`${theme}`}>
      {BackgroundComponent}
    </div>
  );
};

const bgColor1 = { backgroundColor: 'lightblue' };

function bgSelector(theme: Theme): JSX.Element | null {
	switch (theme) {
	  case 'bg-color-1':
		return <div style={bgColor1} />;
	  default:
		return null;
	}
  }

export default HeroBg;
