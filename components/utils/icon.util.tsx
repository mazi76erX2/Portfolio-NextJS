import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Type definitions for icon props and font-awesome imports
type IconType = 'fat' | 'fal' | 'fas' | 'fad' | 'far' | 'fab';
type IconKey = string; // You'll want to be more specific here based on the actual icon keys
interface IconProps {
  icon: [IconType, IconKey]; // Define a tuple for the icon prop
}

// Dynamic import for tree shaking (optional)
async function loadIconLibrary(iconType: IconType) {
  switch (iconType) {
    case 'fat': return import('@fortawesome/pro-thin-svg-icons').then(module => module.fat);
    case 'fal': return import('@fortawesome/pro-light-svg-icons').then(module => module.fal);
    case 'fas': return import('@fortawesome/pro-solid-svg-icons').then(module => module.fas);
    case 'fad': return import('@fortawesome/pro-duotone-svg-icons').then(module => module.fad);
    case 'far': return import('@fortawesome/pro-regular-svg-icons').then(module => module.far);
    case 'fab': return import('@fortawesome/free-brands-svg-icons').then(module => module.fab);
    default: throw new Error(`Invalid icon type: ${iconType}`);
  }
}

export default function Icon({ icon }: IconProps) {
  const [iconType, iconKey] = icon;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    loadIconLibrary(iconType).then(library => {
      if (isMounted) {
        FontAwesomeIcon.library.add(library);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, [iconType]);

  return isLoading ? (
    <FontAwesomeIcon icon={['fas', 'circle-notch']} spin />
  ) : (
    <FontAwesomeIcon icon={[iconType, iconKey]} />
  );
}
