// components/sections/about/SkillsTechnologiesSection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import SectionHeading from '../../shared/SectionHeading'
import { skillsTec } from '@/lib/data'

export default function SkillsTechnologiesSection() {
  const allSkills = [
    ...skillsTec.frontend,
    ...skillsTec.backend,
    ...skillsTec.tools
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Skills & Technologies" 
          subtitle="Technologies I work with every day"
        />
        
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {allSkills.map((skill) => (
            <ScrollReveal key={skill.name}>
              <div className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-lg hover:-translate-y-1 transition">
                <i className={`fab ${skill.icon} text-3xl text-blue-600 mb-2`}></i>
                <p className="font-medium">{skill.name}</p>
                <p className="text-sm text-gray-500">{skill.years}+ years</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}