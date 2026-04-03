// app/about/page.tsx
// About Page - Imports all about sections
import AboutHeroSection from '../components/sections/about/AboutHeroSection'
import PersonalIntroSection from '../components/sections/about/PersonalIntroSection'
import JourneySection from '../components/sections/about/JourneySection'
import SkillsTechnologiesSection from '../components/sections/about/SkillsTechnologiesSection'
import PhilosophySection from '../components/sections/about/PhilosophySection'
import AboutCTASection from '../components/sections/about/AboutCTASection'

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <PersonalIntroSection />
      <JourneySection />
      <SkillsTechnologiesSection />
      <PhilosophySection />
      <AboutCTASection />
    </>
  )
}