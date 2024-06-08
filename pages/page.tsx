import Hero from '@/components/sections/index/hero';
import FeaturedProjects from '@/components/sections/projects/featured';
import About from '@/components/sections/index/about';
import Technical from '@/components/sections/index/technical';
import Color from '@/components/utils/page.colors.util';

interface ColorData {
  [key: string]: string;
}

export default async function Home() {
  const colorsData: ColorData = await fetch('/content/index/_colors.json').then(res => res.json());

  return (
    <>
      <Color colors={colorsData} />
      <Hero />
      <FeaturedProjects />
      <About />
      <Technical />
    </>
  );
}
