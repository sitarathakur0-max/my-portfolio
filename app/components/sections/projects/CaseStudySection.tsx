// components/sections/projects/CaseStudySection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import SectionHeading from '../../shared/SectionHeading'

export default function CaseStudySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Case Study" 
          subtitle="E-commerce Platform Redesign"
        />
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
              <p className="text-gray-600 mb-6">
                An established e-commerce brand needed a complete redesign to improve user experience and increase conversions.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">The Solution</h3>
              <p className="text-gray-600 mb-6">
                Created a modern, responsive design with improved navigation and streamlined checkout process.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Results</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>150% increase in conversions</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>73% faster load time</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>51% more mobile traffic</span>
                </li>
              </ul>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=600" 
                alt="Case Study"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}