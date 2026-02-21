import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import AppFeatures from "@/components/sections/AppFeatures";
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
      <MyTransformation />
      <Testimonials />
      <Faq />
    </div>
  );
}
