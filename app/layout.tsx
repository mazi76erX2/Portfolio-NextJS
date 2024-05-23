import { Analytics } from '@vercel/analytics/react';
import { LazyMotion, domAnimation } from "framer-motion";
import SetGridGap from '../components/utils/set.grid.util';
import '../node_modules/the-new-css-reset/css/reset.css';
import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import '../node_modules/devicon/devicon.min.css';
import '../styles/css/variables.css';
import '../styles/css/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LazyMotion features={domAnimation}>
          <div className="container">{children}</div> {/* Added container for styling */}
          <SetGridGap />
          <Analytics />
        </LazyMotion>
      </body>
    </html>
  );
}
