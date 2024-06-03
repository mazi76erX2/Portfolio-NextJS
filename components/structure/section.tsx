// Import section styles
import sections from '../../styles/structure/section.module.scss';

// Interface for Section props
interface SectionProps {
  classProp?: string;
  children: React.ReactNode;
}

// Structural Component: Section
export default function Section({ classProp = '', children }: SectionProps) {
  return (
    <div className={`${sections.default} ${classProp}`}>
      {children}
    </div>
  );
}
