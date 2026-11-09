import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { StoriesBar } from "./components/Stories/StoriesBar";
import { BentoStats } from "./components/BentoStats/BentoStats";
import { About } from "./components/About/About";
import { Director } from "./components/Director/Director";
import { Values } from "./components/Values/Values";
import { SchoolLife } from "./components/SchoolLife/SchoolLife";
import { InstagramShowcase } from "./components/InstagramShowcase/InstagramShowcase";
import { Achievements } from "./components/Achievements/Achievements";
import { Gallery } from "./components/Gallery/Gallery";
import { Manifesto } from "./components/Manifesto/Manifesto";
import { Contacts } from "./components/Contacts/Contacts";
import { Footer } from "./components/Footer/Footer";
import { BottomNav } from "./components/BottomNav/BottomNav";
import { StoryModal } from "./components/StoryModal/StoryModal";
import { Lightbox } from "./components/Lightbox/Lightbox";
import { useLanguage } from "./context/LanguageContext";

export const App = () => {
  const { t } = useLanguage();
  const [activeStory, setActiveStory] = useState(null);
  const [activeLightbox, setActiveLightbox] = useState(null);

  // Initialize IntersectionObserver for scroll animations
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openLightbox = (src, caption, instaUrl) => {
    setActiveLightbox({ src, caption, instaUrl });
  };

  return (
    <div className="app-root">
      <Header />

      <main>
        <Hero />
        <StoriesBar onOpenStory={setActiveStory} />
        <BentoStats />
        <About />
        <Director />
        <Values />
        <SchoolLife onOpenLightbox={openLightbox} />
        <InstagramShowcase onOpenLightbox={openLightbox} />
        <Achievements />
        <Gallery onOpenLightbox={openLightbox} />
        <Manifesto />
        <Contacts />
      </main>

      <Footer />

      {/* Floating Instagram Action Pill */}
      <a
        href="https://www.instagram.com/gym.asadullo.gulomov/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-insta"
        title="Открыть Instagram гимназии"
        aria-label="Instagram гимназии"
      >
        <div className="floating-insta-glow"></div>
        <i className="fa-brands fa-instagram"></i>
        <span className="floating-insta-tooltip">{t("floating_insta")}</span>
      </a>

      {/* iOS Style Mobile Bottom Navigation Dock */}
      <BottomNav />

      {/* Fullscreen Interactive Modals */}
      {activeStory && (
        <StoryModal story={activeStory} onClose={() => setActiveStory(null)} />
      )}

      {activeLightbox && (
        <Lightbox
          item={activeLightbox}
          onClose={() => setActiveLightbox(null)}
        />
      )}
    </div>
  );
};

export default App;
