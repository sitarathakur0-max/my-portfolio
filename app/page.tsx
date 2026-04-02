
// Home Page - Imports all home sections
import HomeHeroSection from './components/sections/home/HeroSection'
import HomeSkillsSection from './components/sections/home/SkillsSection'
import HomeFeaturedProjectsSection from './components/sections/home/FeaturedProjectsSection'
import HomeServicesSection from './components/sections/home/ServicesSection'
import HomeTestimonialsSection from './components/sections/home/TestimonialsSection'

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <HomeSkillsSection />
      <HomeFeaturedProjectsSection />
      <HomeServicesSection />
      <HomeTestimonialsSection />
    </>
  )
}