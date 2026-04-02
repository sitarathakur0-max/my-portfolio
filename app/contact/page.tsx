// app/contact/page.tsx
import ContactHeroSection from '../components/sections/contact/ContactHeroSection'
import ContactFormSection from '../components/sections/contact/ContactFormSection'
import SocialLinksSection from '../components/sections/contact/SocialLinksSection'
import AvailabilitySection from '../components/sections/contact/AvailabilitySection'
import ContactCTASection from '../components/sections/contact/ContactCTASection'

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
      <SocialLinksSection />
      <AvailabilitySection />
      <ContactCTASection />
    </>
  )
}