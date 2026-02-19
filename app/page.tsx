import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import MyTransformation from "@/components/sections/MyTransformation";
import WhyMe from "@/components/sections/WhyMe";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyMe />
      <Features />
      <MyTransformation />
    </div>
  );
}
