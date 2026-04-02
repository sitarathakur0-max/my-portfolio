// app/projects/page.tsx
import ProjectsHeroSection from '../components/sections/projects/ProjectsHeroSection'
import FeaturedProjectsGridSection from '../components/sections/projects/FeaturedProjectsGridSection'
import WebAppsSection from '../components/sections/projects/WebAppsSection'
import LandingPagesSection from '../components/sections/projects/LandingPagesSection'
import CaseStudySection from '../components/sections/projects/CaseStudySection'

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHeroSection />
      <FeaturedProjectsGridSection />
      <WebAppsSection />
      <LandingPagesSection />
      <CaseStudySection />
    </>
  )
}