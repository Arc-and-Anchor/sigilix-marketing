"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const FINDINGS = [
  {
    specialist: "Logic",
    line: "src/lib/cart.ts:84",
    headline: "off-by-one in `applyDiscount()` on the last item",
    body: "When `items.length === 1`, the loop boundary `i < items.length - 1` skips the only item entirely. Use `i < items.length`.",
  },
  {
    specialist: "Security",
    line: "src/api/checkout.ts:142",
    headline: "missing CSRF verification on POST /checkout",
    body: "The route accepts JSON without a CSRF token. Add `requireCsrf()` middleware or scope to the same-origin fetch.",
  },
  {
    specialist: "Tests",
    line: "tests/cart.test.ts",
    headline: "no test covers the empty-cart branch",
    body: "`applyDiscount([])` is a real path users hit on first checkout. Add a fixture that asserts the noop case.",
  },
] as const

export function ReviewPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="review" className="relative py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary mb-4">
          The Output
        </p>
        <h2 className="font-sans font-medium text-4xl md:text-6xl tracking-tight leading-[0.95] text-text-primary mb-6">
          Lands as a single,
          <br />
          coherent <span className="text-wax">review.</span>
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mb-16 leading-relaxed">
          Findings appear inline on the diff, anchored to the exact line. The synthesizer summary leads. No 40-comment dump.
        </p>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface border border-border rounded-sm max-w-3xl mx-auto p-6 md:p-8 font-mono text-sm"
        >
          {/* Comment header */}
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={inView ? { scale: [0.5, 1.2, 1], opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="w-12 h-12 rounded-full bg-wax flex items-center justify-center shadow-[inset_0_3px_6px_rgba(0,0,0,0.4),0_0_0_2px_var(--color-canvas),0_0_0_3px_var(--color-wax)]"
              aria-hidden
            >
              <Image
                src="/sigil-logo.jpg"
                alt=""
                width={28}
                height={28}
                className="logo-invert"
              />
            </motion.div>
            <div className="flex-1">
              <p className="text-text-primary">
                <span className="font-medium">sigilix</span>{" "}
                <span className="text-text-secondary">[bot] reviewed</span>
              </p>
              <p className="text-xs text-text-secondary">12 minutes ago</p>
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-wax px-3 py-1 border border-wax rounded-sm">
              Request changes
            </span>
          </div>

          {/* Sigilix Summary header */}
          <div className="border-l-2 border-wax pl-4 mb-6">
            <h3 className="font-sans text-base font-medium text-text-primary mb-2">
              Sigilix Summary
            </h3>
            <p className="text-text-secondary leading-relaxed font-sans">
              Three blocking findings across logic, security, and tests. The off-by-one in <code className="text-wax bg-canvas px-1.5 py-0.5 rounded-sm">applyDiscount()</code> is the highest-severity item; everything else has a clean fix in the same diff.
            </p>
            <p className="text-xs text-text-secondary mt-3 font-mono uppercase tracking-[0.15em]">
              3 findings inline below.
            </p>
          </div>

          {/* Inline findings (collapsible) */}
          <div className="space-y-2">
            {FINDINGS.map((f, i) => {
              const isOpen = open === i
              return (
                <div
                  key={i}
                  className="border border-border rounded-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-3 p-4 text-left hover:bg-canvas transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-wax px-2 py-1 bg-wax/10 rounded-sm">
                      {f.specialist}
                    </span>
                    <span className="font-sans text-text-primary flex-1">
                      {f.headline}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-text-secondary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-4 pb-4 border-t border-border bg-canvas"
                    >
                      <p className="text-xs text-text-secondary mt-3 mb-2 font-mono">
                        {f.line}
                      </p>
                      <p className="text-text-secondary font-sans leading-relaxed">
                        {f.body}
                      </p>
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
