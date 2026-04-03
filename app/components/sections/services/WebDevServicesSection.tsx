// components/sections/services/WebDevServicesSection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import SectionHeading from '../../shared/SectionHeading'
import Button from '../../shared/Button'
import { services } from '@/lib/data'

export default function WebDevServicesSection() {
  const webServices = services.slice(0, 3)
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Web Development" 
          subtitle="Custom development services for your business"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {webServices.map((service) => (
            <ScrollReveal key={service.id}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <i className={`fas ${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-blue-600 mb-4">{service.price}</p>
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