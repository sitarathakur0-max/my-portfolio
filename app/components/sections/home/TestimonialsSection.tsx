// components/sections/home/TestimonialsSection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import SectionHeading from '../../shared/SectionHeading'
import { testimonials } from '@/lib/data'

export default function HomeTestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Client Testimonials" 
          subtitle="What clients say about working with me"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <ScrollReveal key={testimonial.id}>
              <div className="glass rounded-xl p-8 hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}