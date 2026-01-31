import Hero from '@/components/sections/Hero';
import ParallaxGallery from '@/components/sections/ParallaxGallery';
import NavigationHub from '@/components/sections/NavigationHub';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <NavigationHub />
      <div id="gallery">
        <ParallaxGallery />
      </div>
      <Projects />
      <Contact />
    </div>
  );
}
