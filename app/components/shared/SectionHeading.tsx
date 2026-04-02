// components/shared/SectionHeading.tsx
import ScrollReveal from './ScrollReveal'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({ title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div className={`mb-16 ${center ? 'text-center' : ''}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"></div>
      </div>
    </ScrollReveal>
  )
}