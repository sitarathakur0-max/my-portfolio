// components/sections/about/JourneySection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import SectionHeading from '../../shared/SectionHeading'
import { journey } from '@/lib/data'

export default function JourneySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="My Journey" 
          subtitle="How I got to where I am today"
        />
        
        <div className="max-w-3xl mx-auto">
          {journey.map((item, index) => (
            <ScrollReveal key={item.year}>
              <div className="flex items-start mb-8 group">
                <div className="w-24 text-blue-600 font-bold text-lg group-hover:scale-110 transition">
                  {item.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}