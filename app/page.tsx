import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import AppFeatures from "@/components/sections/AppFeatures";
import Programs from "@/components/sections/Programs";
import Faq from "@/components/sections/Faq";
import MyTransformation from "@/components/sections/MyTransformation";
import Testimonials from "@/components/sections/Testimonials";
import WhyMe from "@/components/sections/WhyMe";

export default function Home() {
  return (
    <div>
      <Hero />
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
