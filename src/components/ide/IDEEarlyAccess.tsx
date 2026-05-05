"use client"

import { useState, type FormEvent } from "react"

export function IDEEarlyAccess() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.includes("@")) return
    setSubmitted(true)
  }

  return (
    <section
      id="early-access"
      className="relative py-24 md:py-32 px-6 md:px-8 border-t border-border-subtle"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
          06 · Early access
        </p>
        <h2 className="font-sans font-medium text-3xl md:text-5xl tracking-tight leading-[1.05] text-text-primary mb-5">
          Be first when it ships.
        </h2>
        <p className="text-text-secondary leading-relaxed max-w-xl mx-auto mb-10 text-lg">
          We&apos;ll email you the install link the day each editor reaches stable. No newsletter,
          no drip campaign — just one message per editor at launch.
        </p>
        <div className="bg-surface border border-border rounded-sm p-6 md:p-8">
          {submitted ? (
            <>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-success mb-3">
                You&apos;re on the list
              </p>
              <p className="text-text-primary leading-relaxed">
                We&apos;ll stamp your inbox when the IDE extension ships.
              </p>
            </>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="ide-email" className="sr-only">
                Email address
              </label>
              <input
                id="ide-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 bg-canvas border border-border rounded-sm px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
              />
              <button
                type="submit"
                className="bg-accent text-white rounded-sm h-12 px-6 font-medium hover:bg-accent-hover transition-colors whitespace-nowrap"
              >
                Notify me at launch
              </button>
            </form>
          )}
        </div>
        <p className="font-mono text-[11px] text-text-muted mt-5">
          One editor → one email · unsubscribe in any message
        </p>
      </div>
    </section>
  )
}
