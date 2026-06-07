"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

export type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 14,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { once, amount: 0.2 }}
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay,
            }
      }
    >
      {children}
    </motion.div>
  )
}

