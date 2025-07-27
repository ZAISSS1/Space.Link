import { useEffect } from "react";
import Header from "@/components/header.tsx";
import HeroSection from "@/components/hero-section.tsx";
import AboutSection from "@/components/about-section.tsx";
import ServicesSection from "@/components/services-section.tsx";
import FutureSection from "@/components/future-section.tsx";

import Footer from "@/components/footer.tsx";
import LineButton from "@/components/line-button.tsx";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      contentSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FutureSection />
      </main>
      <Footer />
      <LineButton />
    </div>
  );
}
