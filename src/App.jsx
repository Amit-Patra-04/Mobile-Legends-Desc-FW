import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import GlowCursor from './components/GlowCursor';
import IntroSequence from './components/IntroSequence';
import Navbar from './components/Navbar';
import HeroLanding from './components/HeroLanding';
import HeroArchive from './components/HeroArchive';
import HeroDetailModal from './components/HeroDetailModal';
import SkillsLab from './components/SkillsLab';
import HeroModelChamber from './components/HeroModelChamber';
import LoreUniverse from './components/LoreUniverse';
import SkinGallery from './components/SkinGallery';
import EsportsArena from './components/EsportsArena';
import HeroCompareModal from './components/HeroCompareModal';
import SearchModal from './components/SearchModal';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { HEROES } from './data/heroesData';
import { audioManager } from './utils/audio';

export default function App() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [selectedHeroForDetail, setSelectedHeroForDetail] = useState(null);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [compareInitialHero, setCompareInitialHero] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [skillHeroId, setSkillHeroId] = useState(HEROES[0].id);
  const [chamberHeroId, setChamberHeroId] = useState(HEROES[0].id);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    let lenis;
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      let frameId;
      function raf(time) {
        lenis.raf(time);
        frameId = requestAnimationFrame(raf);
      }
      frameId = requestAnimationFrame(raf);

      return () => {
        if (frameId) cancelAnimationFrame(frameId);
        if (lenis) lenis.destroy();
      };
    } catch {
      // Graceful fallback if smooth scroll is unsupported
    }
  }, []);

  // Global keyboard shortcuts (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenDetail = (hero) => {
    setSelectedHeroForDetail(hero);
  };

  const handleOpenChamber = (hero) => {
    setChamberHeroId(hero.id);
    const chamberEl = document.querySelector('#chamber');
    if (chamberEl) {
      chamberEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSkillHero = (hero) => {
    setSkillHeroId(hero.id);
    const skillsEl = document.querySelector('#skills-lab');
    if (skillsEl) {
      skillsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCompare = (hero) => {
    setCompareInitialHero(hero);
    setCompareModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#030509] text-white selection:bg-amber-500/30 selection:text-amber-200">
      {/* Cinematic Film Grain Overlay */}
      <div className="film-grain" />

      {/* WebGL2 Fluid Glow Cursor Animation (MLBB Signature Theme) */}
      <div className="fixed inset-0 pointer-events-none z-[9990] overflow-hidden">
        <GlowCursor
          color="#ffb800"
          secondaryColor="#f97316"
          intensity={1.6}
          trailWidth={3.8}
          linger={1.5}
          glow={1.4}
          hotspot={0.9}
          clickBurst
          theme="dark"
          className="w-full h-full pointer-events-none"
        />
      </div>

      {/* Reticle Focus Indicator (Hidden on loading screen, active on main experience) */}
      <CustomCursor enabled={introCompleted} />

      {/* Section A: Cinematic Intro Preloader */}
      {!introCompleted && (
        <IntroSequence onComplete={() => setIntroCompleted(true)} />
      )}

      {/* Main Experience Layout */}
      <div className={`transition-opacity duration-1000 ${introCompleted ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Navigation Bar */}
        <Navbar
          onOpenSearch={() => setSearchModalOpen(true)}
          onOpenCompare={() => {
            setCompareInitialHero(HEROES[0]);
            setCompareModalOpen(true);
          }}
        />

        <main>
          {/* Section B: Hero Landing Experience */}
          <HeroLanding
            onSelectHeroForDetail={handleOpenDetail}
            onSelectHeroForChamber={handleOpenChamber}
          />

          {/* Section C: The Hero Archive */}
          <HeroArchive
            onOpenDetail={handleOpenDetail}
            onOpenChamber={handleOpenChamber}
            onSelectSkillHero={handleSelectSkillHero}
            onAddToCompare={handleAddToCompare}
          />

          {/* Section E: Tactical Skills Lab & Combo Arena */}
          <SkillsLab selectedHeroId={skillHeroId} />

          {/* Section F: Interactive 3D Hero Chamber */}
          <HeroModelChamber initialHeroId={chamberHeroId} />

          {/* Section G: Lore / World of MLBB */}
          <LoreUniverse
            onSelectHeroByName={(name) => {
              const found = HEROES.find((h) => h.name.toLowerCase() === name.toLowerCase());
              if (found) handleOpenDetail(found);
            }}
          />

          {/* Section H: Skins & Visual Evolution Vault */}
          <SkinGallery />

          {/* Section: Competitive Esports & M-Series Circuit */}
          <div id="esports">
            <EsportsArena />
          </div>

          {/* Section I: Final Cinematic Call to Action */}
          <FinalCTA />
        </main>

        {/* Section J: Footer */}
        <Footer />
      </div>

      {/* Modals & Overlays */}
      {selectedHeroForDetail && (
        <HeroDetailModal
          hero={selectedHeroForDetail}
          onClose={() => setSelectedHeroForDetail(null)}
          onSelectHero={(h) => setSelectedHeroForDetail(h)}
          onOpenChamber={handleOpenChamber}
        />
      )}

      {compareModalOpen && (
        <HeroCompareModal
          initialHero={compareInitialHero}
          onClose={() => setCompareModalOpen(false)}
        />
      )}

      {searchModalOpen && (
        <SearchModal
          onClose={() => setSearchModalOpen(false)}
          onSelectHero={handleOpenDetail}
        />
      )}
    </div>
  );
}
