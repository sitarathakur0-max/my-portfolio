// components/sections/projects/FeaturedProjectsGridSection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import SectionHeading from '../../shared/SectionHeading'
import Button from '../../shared/Button'
import { projects } from '@/lib/data'

export default function FeaturedProjectsGridSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="My most recent and impressive work"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.featured.map((project, index) => (
            <ScrollReveal key={project.id}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
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