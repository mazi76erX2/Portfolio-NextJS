// Utility packages
import Spacing from '../utils/spacing.util'; // Assuming this returns class names based on an array
import css from '../../styles/structure/container.module.scss';

// Define types for clarity and type safety
interface ContainerProps {
  classProp?: string;
  spacing?: string[];
  children: React.ReactNode;
}

// Structural Component: Container
export default function Container({ classProp = '', spacing = [], children }: ContainerProps) {
  return (
    <div className={`${css.readingWidth} ${classProp} ${Spacing(spacing)}`}>
      {children}
    </div>
  );
}
