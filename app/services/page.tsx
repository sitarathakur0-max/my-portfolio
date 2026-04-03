// app/services/page.tsx
import ServicesHeroSection from '../components/sections/services/ServicesHeroSection'
import WebDevServicesSection from '../components/sections/services/WebDevServicesSection'
import UIDesignServicesSection from '../components/sections/services/UIDesignServicesSection'
import OptimizationSection from '../components/sections/services/OptimizationSection'
import PricingProcessSection from '../components/sections/services/PricingProcessSection'

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <WebDevServicesSection />
      <UIDesignServicesSection />
      <OptimizationSection />
      <PricingProcessSection />
    </>
  )
}