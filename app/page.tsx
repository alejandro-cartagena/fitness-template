import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import AppFeatures from "@/components/sections/AppFeatures";
import Programs from "@/components/sections/Programs";
import Faq from "@/components/sections/Faq";
import MyTransformation from "@/components/sections/MyTransformation";
import Testimonials from "@/components/sections/Testimonials";
import WhyMe from "@/components/sections/WhyMe";

// Different Versions of the Hero Section
import HeroV2 from "@/components/sections/Hero/HeroV2";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <HeroV2 />
      <WhyMe />
      <Features />
      <AppFeatures />
      <About />
      <MyTransformation />
      <Testimonials />
      <Programs />
      <Faq />
    </div>
  );
}
