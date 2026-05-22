import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { GradientMesh, Leaf, InkDots, CrossMark, InkStroke, RingAccent } from './FloatingIllustrations'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const videoY  = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const opac    = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section id="hero" ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F7F3ED]">

      {/* ── Cinematic video background (parallax) ── */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y: videoY }}
      >
        {/* Warm editorial overlay so video doesn't overpower light theme */}
        <div className="absolute inset-0 bg-[#F7F3ED]/78 z-10" />
        <div className="absolute inset-0 z-10"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(247,243,237,0.95) 0%, transparent 60%)' }} />
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover scale-105"
          style={{ filter: 'saturate(0.4) sepia(0.3) brightness(1.1)' }}
        >
          {/* Royalty-free ambient workspace footage from Pexels CDN */}
          <source src="https://videos.pexels.com/video-files/3252421/3252421-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3252421/3252421-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* floating SVG decorations */}
      <Leaf className="top-24 right-16 w-10 h-14 z-20" rotate={-20} opacity={0.13} />
      <Leaf className="bottom-32 left-12 w-7 h-10 z-20" rotate={15} opacity={0.09} />
      <RingAccent className="top-20 left-[8%] z-20" size={100} opacity={0.09} />
      <RingAccent className="bottom-24 right-[6%] z-20" size={64} opacity={0.11} />
      <InkDots count={8} className="top-1/3 right-[5%] w-24 h-32 z-20" />
      <CrossMark className="top-40 left-1/3 z-20" size={14} opacity={0.14} />
      <InkStroke className="bottom-[28%] left-[10%] w-48 z-20" opacity={0.11} />

      {/* ── Text content ── */}
      <motion.div
        className="relative z-30 max-w-6xl mx-auto px-6 pt-32 pb-24"
        style={{ y: textY, opacity: opac }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="inline-block w-8 h-px bg-[#D4922A]" />
          <span className="font-mono-k text-xs text-[#A06B10] tracking-[0.2em] uppercase">
            Full-Stack Developer · AI Integrations · Backend Systems
          </span>
        </motion.div>

        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-serif text-[clamp(3.5rem,9vw,7rem)] leading-[1.02] text-[#1C1410] mb-2"
          >
            Karmveer
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.48 }}
            className="font-serif text-[clamp(3.5rem,9vw,7rem)] leading-[1.02] text-[#D4922A] italic"
          >
            Kumar
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62 }}
          className="font-sans text-lg md:text-xl text-[#7A6248] max-w-xl leading-relaxed mb-12 font-light"
        >
          Building thoughtful software for modern startups — from real-time AI voice systems to full-stack web apps that scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.78 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a href="#projects"
            className="font-sans text-sm px-7 py-3.5 bg-[#1C1410] text-[#F7F3ED] hover:bg-[#D4922A] transition-all duration-300 rounded-sm tracking-wide shadow-sm">
            View my work
          </a>
          <a href="#contact"
            className="font-sans text-sm px-7 py-3.5 border border-[#C9A87C] text-[#7A6248] hover:border-[#D4922A] hover:text-[#1C1410] transition-all duration-300 rounded-sm tracking-wide">
            Let's talk
          </a>
          <div className="flex items-center gap-4 ml-2">
            <a href="https://github.com/karmveer049" target="_blank" rel="noopener noreferrer"
              className="text-[#C9A87C] hover:text-[#D4922A] transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/karmveer-kumar-2258bb312" target="_blank" rel="noopener noreferrer"
              className="text-[#C9A87C] hover:text-[#D4922A] transition-colors duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-24 flex items-center gap-3"
        >
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}>
            <ArrowDown size={16} className="text-[#C9A87C]" />
          </motion.div>
          <span className="font-mono-k text-xs text-[#C9A87C] tracking-widest uppercase">Scroll to explore</span>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 ink-line z-30" />
    </section>
  )
}
