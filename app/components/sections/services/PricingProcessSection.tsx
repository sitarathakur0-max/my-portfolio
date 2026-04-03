import ScrollReveal from '../../shared/ScrollReveal'
import SectionHeading from '../../shared/SectionHeading'
import Button from '../../shared/Button'
import { pricingPlans } from '@/lib/data'

export default function PricingProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Pricing Plans" 
          subtitle="Choose the plan that fits your needs"
        />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal key={plan.name}>
              <div 
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative
                  ${plan.recommended 
                    ? 'border-2 border-blue-600 transform hover:scale-105 overflow-visible' 
                    : 'hover:-translate-y-2 border border-gray-100 hover:border-blue-200'
                  }`}
              >
                {/* Background gradient effect on hover - LOWEST Z-INDEX */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
                
                {plan.recommended && (
                  <>
                    {/* Recommended badge with animation - HIGHEST Z-INDEX */}
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-sm font-semibold z-20">
                      Most Popular
                    </div>
                    {/* Decorative elements - BEHIND CONTENT */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-blue-600 opacity-5 rounded-br-3xl -z-5"></div>
                  </>
                )}
                
                {/* ALL CONTENT WITH RELATIVE Z-INDEX TO STAY ABOVE BACKGROUND */}
                <div className="relative z-10">
                  {/* Plan icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                    ${plan.recommended 
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                    }`}>
                    <i className={`fas ${plan.recommended ? 'fa-crown' : index === 0 ? 'fa-rocket' : 'fa-star'} text-2xl`}></i>
                  </div>
                  
                  {/* Plan name */}
                  <h3 className={`text-2xl font-bold mb-2 transition-colors ${
                    plan.recommended 
                      ? 'text-blue-600 group-hover:text-blue-700' 
                      : 'text-gray-800 group-hover:text-blue-600'
                  }`}>
                    {plan.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="flex items-baseline mb-4">
                    <p className={`text-4xl font-bold ${
                      plan.recommended 
                        ? 'text-blue-600 group-hover:text-blue-700' 
                        : 'text-gray-800 group-hover:text-blue-600'
                    }`}>
                      {plan.price}
                    </p>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-500 ml-2 text-sm">/project</span>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className={`mb-6 border-b pb-6 ${
                    plan.recommended 
                      ? 'text-gray-700 border-gray-200' 
                      : 'text-gray-600 border-gray-100'
                  }`}>
                    {plan.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                        <i className={`fas fa-check-circle mt-1 mr-3 flex-shrink-0 text-lg ${
                          plan.recommended 
                            ? 'text-blue-600' 
                            : 'text-green-500 group-hover:text-blue-600'
                        }`}></i>
                        <span className={`text-sm ${
                          plan.recommended 
                            ? 'text-gray-700' 
                            : 'text-gray-600 group-hover:text-gray-800'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button - YOUR ORIGINAL BUTTON STYLE PRESERVED */}
                <Button 
                  href="/contact" 
                  variant={plan.recommended ? 'primary' : 'outline'} 
                  className={`w-full text-center group-hover:shadow-lg transition-all duration-300
                    ${plan.recommended 
                      ? 'transform group-hover:scale-105' 
                      : 'group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600'
                    }`}
                >
                  <span className="flex items-center justify-center">
                    Get Started 
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </Button>
                
                {/* Popular plan extra shine effect */}
                {plan.recommended && (
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden -z-5">
                    <div className="absolute top-0 -inset-full h-full w-1/2 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine"></div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            * All plans include free consultation and 30 days of support
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Need a custom plan? <a href="/contact" className="text-blue-600 hover:underline">Contact me</a> for a tailored solution
          </p>
        </div>
      </div>
    </section>
  )
}