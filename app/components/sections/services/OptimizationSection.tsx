// components/sections/services/OptimizationSection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import SectionHeading from '../../shared/SectionHeading'
import { services } from '@/lib/data'

export default function OptimizationSection() {
  const optimizationService = services[3]
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title={optimizationService.title} 
          subtitle={optimizationService.description}
        />
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <i className={`fas ${optimizationService.icon} text-2xl text-white`}></i>
            </div>
            <div className="ml-4">
              <p className="text-lg font-semibold text-blue-600">{optimizationService.price}</p>
              <p className="text-gray-500">Timeline: {optimizationService.timeline}</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">{optimizationService.longDescription}</p>
          
          <h4 className="font-semibold mb-4">What's included:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {optimizationService.features.map((feature) => (
              <div key={feature} className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}