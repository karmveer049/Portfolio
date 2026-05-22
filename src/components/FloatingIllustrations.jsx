import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

/* Reusable ink-dot cluster */
export function InkDots({ count = 6, color = '#C9A87C', className = '' }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 3 + (i % 3) * 2,
            height: 3 + (i % 3) * 2,
            background: color,
            opacity: 0.18 + (i % 4) * 0.06,
            left: `${(i * 37) % 80}%`,
            top: `${(i * 53) % 80}%`,
          }}
          animate={{ y: [0, -8, 0], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/* Ink stroke SVG — horizontal wavy line */
export function InkStroke({ className = '', opacity = 0.18 }) {
  return (
    <svg viewBox="0 0 200 20" className={`absolute pointer-events-none ${className}`} fill="none">
      <motion.path
        d="M0 10 Q25 4 50 10 Q75 16 100 10 Q125 4 150 10 Q175 16 200 10"
        stroke="#C9A87C"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity={opacity}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.5 }}
      />
    </svg>
  )
}

/* Small leaf / botanical SVG */
export function Leaf({ className = '', rotate = 0, opacity = 0.13 }) {
  return (
    <motion.svg
      viewBox="0 0 40 60"
      className={`absolute pointer-events-none ${className}`}
      fill="none"
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
      animate={{ rotate: [rotate, rotate + 4, rotate], y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M20 58 C20 58 4 40 4 24 C4 11 12 2 20 2 C28 2 36 11 36 24 C36 40 20 58 20 58Z"
        stroke="#A06B10" strokeWidth="1.2" fill="rgba(160,107,16,0.07)" />
      <path d="M20 58 L20 8" stroke="#A06B10" strokeWidth="0.8" strokeDasharray="2 3" />
      <path d="M20 20 Q28 16 32 22" stroke="#A06B10" strokeWidth="0.7" opacity="0.6" />
      <path d="M20 30 Q12 26 9 32" stroke="#A06B10" strokeWidth="0.7" opacity="0.6" />
      <path d="M20 40 Q28 36 31 42" stroke="#A06B10" strokeWidth="0.7" opacity="0.6" />
    </motion.svg>
  )
}

/* Circle ring decoration */
export function RingAccent({ className = '', size = 80, opacity = 0.1 }) {
  return (
    <motion.svg
      viewBox={`0 0 ${size} ${size}`}
      width={size} height={size}
      className={`absolute pointer-events-none ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    >
      <circle cx={size/2} cy={size/2} r={size/2 - 4}
        stroke="#D4922A" strokeWidth="0.8" strokeDasharray="4 6" fill="none" opacity={opacity} />
      <circle cx={size/2} cy={size/2} r={size/2 - 14}
        stroke="#C9A87C" strokeWidth="0.5" strokeDasharray="2 8" fill="none" opacity={opacity * 0.6} />
    </motion.svg>
  )
}

/* Cross / plus mark */
export function CrossMark({ className = '', size = 16, opacity = 0.2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={`absolute pointer-events-none ${className}`} fill="none">
      <path d="M8 1 L8 15 M1 8 L15 8" stroke="#D4922A" strokeWidth="1" strokeLinecap="round" opacity={opacity} />
    </svg>
  )
}

/* Animated gradient mesh background */
export function GradientMesh({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212,146,42,0.08) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,124,0.1) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
        animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(247,243,237,0) 0%, rgba(212,146,42,0.04) 100%)',
          filter: 'blur(30px)',
        }}
        animate={{ scaleX: [1, 1.15, 1], scaleY: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  )
}
