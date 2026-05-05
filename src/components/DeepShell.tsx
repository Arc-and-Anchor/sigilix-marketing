"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ReactNode } from "react"

const EASE = [0.22, 1, 0.36, 1] as const

interface DeepHeroProps {
  kicker: string
  title: ReactNode
  lead: ReactNode
}

export function DeepHero({ kicker, title, lead }: DeepHeroProps) {
  return (
    <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 px-6 md:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6"
        >
          {kicker}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          className="font-sans font-medium text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.98] text-text-primary mb-6 max-w-4xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
          className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl"
        >
          {lead}
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
          style={{ transformOrigin: "left" }}
          className="mt-12 h-px w-full bg-border"
        />
      </div>
    </section>
  )
}

interface CTABandProps {
  title: ReactNode
  body?: ReactNode
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}

export function CTABand({ title, body, primary, secondary }: CTABandProps) {
  return (
    <section className="relative bg-surface-raised border-t border-border px-6 md:px-8 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-sans font-medium text-3xl md:text-4xl tracking-tight leading-[1.05] text-text-primary mb-5">
          {title}
        </h2>
        {body ? (
          <p className="text-text-secondary mb-8 leading-relaxed max-w-xl mx-auto">{body}</p>
        ) : (
          <div className="mb-8" />
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primary.href}
            className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-sans text-sm font-medium rounded-sm transition-colors"
          >
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary hover:text-text-primary transition-colors"
            >
              {secondary.label} →
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

interface CrossLinkFooterProps {
  prev?: { label: string; href: string }
  next?: { label: string; href: string }
  lastUpdated?: string
}

export function CrossLinkFooter({ prev, next, lastUpdated }: CrossLinkFooterProps) {
  return (
    <div className="border-t border-border-subtle px-6 md:px-8 py-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-text-muted">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {prev && (
            <Link href={prev.href} className="hover:text-text-secondary transition-colors">
              ← {prev.label}
            </Link>
          )}
          {next && (
            <Link href={next.href} className="hover:text-text-secondary transition-colors">
              {next.label} →
            </Link>
          )}
        </div>
        {lastUpdated && <span>Last updated {lastUpdated}</span>}
      </div>
    </div>
  )
}

export function DeepSection({
  number,
  kicker,
  title,
  intro,
  children,
  width = "wide",
}: {
  number?: string
  kicker?: string
  title: ReactNode
  intro?: ReactNode
  children?: ReactNode
  width?: "narrow" | "wide"
}) {
  return (
    <section className="relative py-20 md:py-24 px-6 md:px-8 border-t border-border-subtle">
      <div className={`mx-auto ${width === "narrow" ? "max-w-3xl" : "max-w-7xl"}`}>
        {(number || kicker) && (
          <div className="flex items-baseline gap-4 mb-4">
            {number && (
              <span className="font-mono text-sm tracking-[0.2em] text-accent">{number}</span>
            )}
            {kicker && (
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
                {kicker}
              </span>
            )}
          </div>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-sans font-medium text-3xl md:text-4xl tracking-tight leading-[1.02] text-text-primary mb-6 max-w-3xl"
        >
          {title}
        </motion.h2>
        {intro && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.06 }}
            className="text-text-secondary leading-relaxed max-w-3xl mb-12 text-lg"
          >
            {intro}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
