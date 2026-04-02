// components/sections/contact/SocialLinksSection.tsx
import ScrollReveal from '../../shared/ScrollReveal'
import SectionHeading from '../../shared/SectionHeading'
import { socialLinks } from '@/lib/data'

export default function SocialLinksSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Connect With Me" 
          subtitle="Find me on social media"
        />
        
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl hover:scale-110 transition"
            >
              <i className={`fab ${link.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}