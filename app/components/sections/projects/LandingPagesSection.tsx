// components/sections/projects/LandingPagesSection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import SectionHeading from '../../shared/SectionHeading'
import { projects } from '@/lib/data'

export default function LandingPagesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Landing Pages" 
          subtitle="High-converting, beautiful landing pages"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.landingPages.map((project) => (
            <ScrollReveal key={project.id}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}