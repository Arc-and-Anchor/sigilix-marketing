"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"

type FormatKind = "integer" | "decimal" | "percent"

interface CountUpProps {
  value: number
  duration?: number
  format?: FormatKind
  className?: string
}

const FORMATTERS: Record<FormatKind, (n: number) => string> = {
  integer: (n) => Math.round(n).toLocaleString(),
  decimal: (n) => n.toFixed(1),
  percent: (n) => `${Math.round(n)}%`,
}

export function CountUp({ value, duration = 1.6, format = "integer", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const motionValue = useMotionValue(0)
  const formatter = FORMATTERS[format]
  const display = useTransform(motionValue, formatter)

  useEffect(() => {
    if (!inView) return
    const controls = animate(motionValue, value, { duration, ease: [0.22, 1, 0.36, 1] })
    return controls.stop
  }, [inView, motionValue, value, duration])

  return <motion.span ref={ref} className={className}>{display}</motion.span>
}
