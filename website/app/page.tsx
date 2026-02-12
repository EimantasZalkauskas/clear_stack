import { TextAnimate } from "@/components/ui/text-animate";

import { HeroSection } from "@/components/hero/heroSection";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">  
      {/* Navigation */}
      <section className="background-primary flex justify-center items-center">
      <Navbar /> 
      </section>
      <section className="background-primary min-h-screen min-w-screen flex justify-center items-center">
      {/* Hero */}
        <HeroSection />
      </section>

      <section className="background-secondary min-h-screen min-w-screen flex justify-center items-center">
        {/* Services */}
        <TextAnimate animation="blurInUp" by="word">
          We build robust
          </TextAnimate>
      </section>

      <section className="background-primary min-h-screen min-w-screen flex justify-center items-center">
        {/* Stats */}
      </section>

      <section className="background-secondary min-h-screen min-w-screen flex justify-center items-center">
        {/* Get In Touch */}
        <TextAnimate animation="blurInUp" by="word">
          We build robust
          </TextAnimate>
      </section>
    </div>
  );
}
