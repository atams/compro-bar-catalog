"use client";

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ParallaxGallery from '@/components/sections/ParallaxGallery';
import NavigationHub from '@/components/sections/NavigationHub';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

import PageLayout from "@/components/layout/PageLayout";

export default function HomeView() {
   return (
      <PageLayout>
         <div className="flex flex-col">
            <Hero />
            <About />
            <NavigationHub />
            <div id="gallery">
               <ParallaxGallery />
            </div>
            <Projects />
            <Contact />
         </div>
      </PageLayout>
   );
}
