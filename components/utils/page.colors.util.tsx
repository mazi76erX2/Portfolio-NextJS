import React, { ReactElement } from 'react'; // Explicitly import ReactElement
import css from '../../styles/utils/page.colors.module.scss';

// Define the interface for color properties
interface ColorTheme {
  mesh__secondaryDark: string;
  mesh__secondaryLight: string;
  mesh__primaryDark: string;
  mesh__primaryLight: string;
}

// Define the interface for the component props
interface ColorOverridesProps {
  colors: {
    dark?: ColorTheme;
    unicorn?: ColorTheme;
    light?: ColorTheme;
  };
}

// Reusable component for individual theme overrides
interface ThemeOverrideProps {
	theme: string;
	colors?: ColorTheme; // Make colors optional to handle cases where it's not defined
}

export default function ColorOverrides({ colors }: ColorOverridesProps): ReactElement {
  return (
    <data id="page-specific-colors" className={css.colors}>
      <ThemeOverride theme="dark" colors={colors.dark} />
      <ThemeOverride theme="unicorn" colors={colors.unicorn} />
      <ThemeOverride theme="light" colors={colors.light} />
      <svg aria-hidden="true" focusable="false">
        <linearGradient id="fa-gradient" x1="0%" y1="0%" x2="175%" y2="175%">
          <stop offset="0%" stopColor="var(--neon-1-2)" />
          <stop offset="100%" stopColor="var(--neon-1-1)" />
        </linearGradient>
      </svg>
    </data>
  );
}

function ThemeOverride({ theme, colors }: ThemeOverrideProps): ReactElement | null {
  if (!colors) {
    return null; // Don't render anything if colors are not provided
  }

  return (
    <style>
      {`
        :root[data-theme="${theme}"] {
          --mesh-color-1: ${colors.mesh__secondaryDark};
          --mesh-color-2: ${colors.mesh__secondaryLight};
          --mesh-color-3: ${colors.mesh__primaryDark};
          --mesh-color-4: ${colors.mesh__primaryLight};
        }
      `}
    </style>
  );
}
