// components/sections/contact/ContactHeroSection.tsx
import ScrollReveal from '../../shared/ScrollReveal'

export default function ContactHeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}