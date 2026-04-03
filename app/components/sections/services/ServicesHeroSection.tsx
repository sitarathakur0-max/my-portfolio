// components/sections/services/ServicesHeroSection.tsx
import ScrollReveal from '../../shared/ScrollReveal'

export default function ServicesHeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}