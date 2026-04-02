// components/sections/contact/AvailabilitySection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import SectionHeading from '../../shared/SectionHeading'
import { contactInfo } from '@/lib/data'

export default function AvailabilitySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Availability" 
          subtitle="I'm currently available for freelance work"
        />
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-envelope text-blue-600"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">{contactInfo.email}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-phone text-blue-600"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold">{contactInfo.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-map-marker-alt text-blue-600"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold">{contactInfo.location}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-clock text-blue-600"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500">Response Time</p>
                <p className="font-semibold">{contactInfo.responseTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}