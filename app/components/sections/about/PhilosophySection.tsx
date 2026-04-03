// components/sections/about/PhilosophySection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import SectionHeading from '../../shared/SectionHeading'
import { philosophy } from '@/lib/data'

export default function PhilosophySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="My Work Philosophy" 
          subtitle="What drives me as a developer"
        />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {philosophy.slice(0, 3).map((item) => (
            <ScrollReveal key={item.title}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${item.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}