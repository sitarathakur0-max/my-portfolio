// components/sections/contact/ContactCTASection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import Button from '../../shared/Button'

export default function ContactCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">Let's discuss how I can help bring your ideas to life</p>
          <Button href="mailto:hello@devportfolio.com" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Send an Email
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}