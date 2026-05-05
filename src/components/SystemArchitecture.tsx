"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Layers, Shield, Zap, Type as TypeIcon, GitMerge } from "lucide-react"

const NODES = [
  { name: "Glyph", role: "Architecture", icon: Layers, x: 50, y: 8 },
  { name: "Warden", role: "Security", icon: Shield, x: 90, y: 38 },
  { name: "Spark", role: "Performance", icon: Zap, x: 75, y: 88 },
  { name: "Weave", role: "Semantics", icon: TypeIcon, x: 25, y: 88 },
] as const

const CORE = { x: 50, y: 48 }
const EASE = [0.22, 1, 0.36, 1] as const

const COLLECT_NODES = [
  { x: 16, y: 14, label: "Diff hunks" },
  { x: 16, y: 38, label: "Surrounding files" },
  { x: 16, y: 62, label: "PR metadata" },
  { x: 16, y: 86, label: "Repo conventions" },
]

export function SystemArchitecture() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="bg-surface-raised border border-border rounded-sm p-6 md:p-10">
      <div className="relative w-full aspect-[16/10] max-w-5xl mx-auto">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          {/* Retrieval feeds → outer specialists */}
          {COLLECT_NODES.map((c, i) => (
            <motion.line
              key={`feed-${i}`}
              x1={c.x}
              y1={c.y}
              x2={NODES[i].x}
              y2={NODES[i].y}
              stroke="var(--color-text-muted)"
              strokeWidth="0.12"
              strokeDasharray="0.4 1.4"
              opacity={0.3}
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: "easeInOut" }}
            />
          ))}
          {/* Specialists → Core */}
          {NODES.map((n, i) => (
            <motion.line
              key={`core-${n.name}`}
              x1={n.x}
              y1={n.y}
              x2={CORE.x}
              y2={CORE.y}
              stroke="var(--color-accent)"
              strokeWidth="0.18"
              strokeDasharray="0.6 1.6"
              opacity={0.7}
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.7 + i * 0.1, ease: "easeInOut" }}
            />
          ))}
        </svg>

        {COLLECT_NODES.map((c, i) => (
          <motion.div
            key={`r-${i}`}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-canvas border border-border rounded-sm px-3 py-1.5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary whitespace-nowrap">
                {c.label}
              </p>
            </div>
          </motion.div>
        ))}

        {NODES.map((n, i) => {
          const Icon = n.icon
          return (
            <motion.div
              key={n.name}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: EASE }}
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 flex items-center justify-center rounded-sm bg-canvas border border-border">
                  <Icon className="w-5 h-5 text-text-primary" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-primary">
                    {n.name}
                  </p>
                  <p className="font-mono text-[10px] text-text-muted mt-0.5">{n.role}</p>
                </div>
              </div>
            </motion.div>
          )
        })}

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.95, ease: EASE }}
          style={{ left: `${CORE.x}%`, top: `${CORE.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 flex items-center justify-center rounded-sm bg-canvas border-2 border-accent shadow-[0_0_44px_-8px_var(--color-accent-glow)]">
              <GitMerge className="w-7 h-7 text-accent" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Core</p>
              <p className="font-mono text-[10px] text-text-muted mt-0.5">Synthesizer</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        <Phase label="Retrieve" copy="Diff + repo context fetched at scoped read." />
        <Phase label="Specialize" copy="Four domain models run in parallel." />
        <Phase label="Synthesize" copy="Core resolves contradictions and ranks." />
      </div>
    </div>
  )
}

function Phase({ label, copy }: { label: string; copy: string }) {
  return (
    <div className="border border-border bg-canvas rounded-sm p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">{label}</p>
      <p className="text-sm text-text-secondary leading-relaxed">{copy}</p>
    </div>
  )
}
