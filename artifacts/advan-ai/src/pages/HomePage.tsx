import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { NewStandardSection } from "@/components/NewStandardSection"
import { LifecycleSection } from "@/components/LifecycleSection"
import { SuccessStories } from "@/components/SuccessStories"
import { ComplianceSection } from "@/components/ComplianceSection"
import { FinalCTA } from "@/components/FinalCTA"
import { FAQSection } from "@/components/FAQSection"
import { ContactSection } from "@/components/ContactSection"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <NewStandardSection />
        <LifecycleSection />
        <SuccessStories />
        <ComplianceSection />
        <FinalCTA />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
