
import ScrollReveal from '../../shared/ScrollReveal'
import Button from '../../shared/Button'
import { personalInfo } from '@/lib/data'

export default function PersonalIntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <ScrollReveal className="md:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600">
                <img
                  src="/images/my dp.jpg"
                  alt="Developer"
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>

            </div>
          </ScrollReveal>

          <ScrollReveal className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Hi, I'm {personalInfo.name}</h2>
            <p className="text-gray-600 mb-4">
              {personalInfo.bio}
            </p>
            <p className="text-gray-600 mb-6">
              I believe in creating websites that not only look beautiful but also perform exceptionally well.
            </p>
            <Button href="/contact" variant="primary">
              Let's Work Together
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
