// components/sections/services/UIDesignServicesSection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import SectionHeading from '../../shared/SectionHeading'
import Button from '../../shared/Button'
import { services } from '@/lib/data'

export default function UIDesignServicesSection() {
  const designServices = services.slice(3, 5)
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="UI/UX Design" 
          subtitle="Beautiful and intuitive user interfaces"
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {designServices.map((service) => (
            <ScrollReveal key={service.id}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <i className={`fas ${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2 text-sm"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="outline" className="w-full text-center">
                  Get Started
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}