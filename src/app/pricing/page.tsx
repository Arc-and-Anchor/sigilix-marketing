import type { Metadata } from "next"
import { DeepHero, CTABand, CrossLinkFooter } from "@/components/DeepShell"
import { PricingPlans } from "@/components/PricingPlans"

export const metadata: Metadata = {
  title: "Pricing · Sigilix",
  description:
    "Sigilix pricing — Free, Pro, and Max. Transparent rate windows, no per-seat surprises, unlimited reviewers.",
}

export default function PricingPage() {
  return (
    <>
      <DeepHero
        kicker="Pricing"
        title={
          <>
            Pricing that <span className="text-accent">scales with throughput,</span> not seat count.
          </>
        }
        lead={
          <>
            Sigilix charges by review density inside a rolling 5-hour window — no per-seat fees, no
            reviewer caps, and a generous free tier so you can prove it on your repos before paying
            a dollar.
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
