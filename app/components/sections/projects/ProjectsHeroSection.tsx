// components/sections/projects/ProjectsHeroSection.tsx
import ScrollReveal from '../../shared/ScrollReveal'

export default function ProjectsHeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my best work showcasing my skills in web development
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}