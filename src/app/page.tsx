import { SiteNav } from "@/components/SiteNav"
import { Hero } from "@/components/Hero"
import { HowItWorks } from "@/components/HowItWorks"
import { Comparison } from "@/components/Comparison"
import { ReviewPreview } from "@/components/ReviewPreview"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="relative flex-1 z-0">
        <Hero />
        <HowItWorks />
        <Comparison />
        <ReviewPreview />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
