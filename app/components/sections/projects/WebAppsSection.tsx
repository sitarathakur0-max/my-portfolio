// components/sections/projects/WebAppsSection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import SectionHeading from '../../shared/SectionHeading'
import { projects } from '@/lib/data'

export default function WebAppsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Web Applications" 
          subtitle="Full-stack applications with complex functionality"
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.webApps.map((project) => (
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