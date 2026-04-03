// components/sections/about/AboutCTASection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import Button from '../../shared/Button'

export default function AboutCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">Let's work together to bring your ideas to life</p>
          <Button href="/contact" variant="secondary" className="bg-white text-white hover:bg-gray-100">
            Hire Me Now
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}