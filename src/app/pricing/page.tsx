import type { Metadata } from "next"
import { DeepHero, CTABand, CrossLinkFooter } from "@/components/DeepShell"
import { PricingPlans } from "@/components/PricingPlans"

export const metadata: Metadata = {
  title: "Pricing · Sigilix",
  description:
    "Sigilix pricing — Free, Pro at $20 per seat per month, and Max at $40 per seat per month. Generous free tier so you can prove it on your repos first.",
}

export default function PricingPage() {
  return (
    <>
      <DeepHero
        kicker="Pricing"
        title={
          <>
            Per-seat pricing. <span className="text-accent">Predictable.</span> Per-engineer.
          </>
        }
        lead={
          <>
            Sigilix charges by reviewer seat — $20 per seat per month on Pro, $40 per seat per month
            on Max. Free for one seat, forever. Add seats as the team grows; remove them when it
            doesn&apos;t.
          </>
        }
      />

      <PricingPlans />

      <CTABand
        title={
          <>
            Ready to seal your first review? <span className="text-accent">Sign in.</span>
          </>
        }
        body="One click sends you to app.sigilix.ai. The GitHub App installs in seconds."
        primary={{ label: "Continue to app.sigilix.ai", href: "https://app.sigilix.ai" }}
        secondary={{ label: "Read the architecture", href: "/how-it-works" }}
      />

      <CrossLinkFooter
        prev={{ label: "Examples", href: "/examples" }}
        next={{ label: "How it Works", href: "/how-it-works" }}
        lastUpdated="2026-05-04"
      />
    </>
  )
}
