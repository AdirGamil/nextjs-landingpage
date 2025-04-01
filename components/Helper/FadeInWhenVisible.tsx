'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Props = {
  children: React.ReactNode
  delay?: number
  variant?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in'
}

const FadeInWhenVisible = ({ children, delay = 0, variant = 'fade-up' }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // הגדרות האנימציה לפי סוג האפקט
  const variants: Record<string, any> = {
    'fade-up': { opacity: 0, y: 40 },
    'fade-left': { opacity: 0, x: -40 },
    'fade-right': { opacity: 0, x: 40 },
    'zoom-in': { opacity: 0, scale: 0.95 },
  }

  return (
    <motion.div
      ref={ref}
      initial={variants[variant]}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisible
