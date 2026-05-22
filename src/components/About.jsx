import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { GradientMesh, Leaf, InkDots, RingAccent, CrossMark } from './FloatingIllustrations'

function BookshelfIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="w-full max-w-xs opacity-50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="180" width="320" height="3" rx="1.5" fill="#C9A87C" opacity="0.5"/>
      {[
        [10,100,22,80,'#8B5A2B'],
        [34,115,18,65,'#C9A87C'],
        [54,105,24,75,'#5C3518'],
        [80,112,16,68,'#D4922A'],
        [98,108,20,72,'#8B5A2B'],
        [120,120,14,60,'#C9A87C'],
        [136,102,26,78,'#5C3518'],
        [164,118,18,62,'#D4922A'],
        [184,110,22,70,'#8B5A2B'],
        [208,116,15,64,'#C9A87C'],
        [225,100,28,80,'#5C3518'],
        [255,113,20,67,'#D4922A'],
        [277,108,16,72,'#8B5A2B'],
        [295,122,18,58,'#C9A87C'],
      ].map(([x,y,w,h,fill],i)=>(
        <rect key={i} x={x} y={y} width={w} height={h} rx="1.5" fill={fill} opacity="0.55"/>
      ))}
      <circle cx="160" cy="55" r="22" stroke="#C9A87C" strokeWidth="1" fill="rgba(212,146,42,0.05)" opacity="0.5"/>
      <circle cx="160" cy="55" r="13" stroke="#D4922A" strokeWidth="0.7" fill="none" opacity="0.35"/>
    </svg>
  )
}

function AnimatedCounter({ target, suffix = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.span
      ref={ref}
      className="font-serif text-3xl text-[#D4922A]"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay }}
    >
      {target}{suffix}
    </motion.span>
  )
}

const stats = [
  { label: 'Projects deployed', value: '3', suffix: '+' },
  { label: 'CGPA at NIT Hamirpur', value: '9.07', suffix: '' },
  { label: 'Hackathon rank', value: 'Top 7', suffix: '' },
  { label: 'ML pipelines built', value: '4', suffix: '' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0,1], ['-8%','8%'])

  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden bg-[#F7F3ED]" ref={ref}>
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <GradientMesh />
      </motion.div>

      <Leaf className="top-16 right-10 w-8 h-12" rotate={25} opacity={0.1} />
      <Leaf className="bottom-20 left-6 w-6 h-9" rotate={-10} opacity={0.08} />
      <RingAccent className="bottom-12 right-[12%]" size={80} opacity={0.08} />
      <InkDots count={5} className="top-24 left-[5%] w-20 h-24" color="#D4922A" />
      <CrossMark className="top-1/2 right-[8%]" size={12} opacity={0.13} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="font-mono-k text-xs text-[#D4922A] tracking-[0.2em] uppercase">01 — About</span>
              <span className="w-12 ink-line" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-[#1C1410] leading-tight mb-6"
            >
              A developer who builds with{' '}
              <span className="italic text-[#D4922A]">intention.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-[#7A6248] leading-relaxed mb-5 font-light"
            >
              I'm a third-year Electrical Engineering student at NIT Hamirpur, but what defines me isn't my degree — it's the real products I've shipped. From a multilingual AI transcriber processing speech in under 2 seconds to a full-stack library management system deployed on the cloud.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-sans text-[#7A6248] leading-relaxed mb-10 font-light"
            >
              I work across the full stack with a backend-first mindset — FastAPI, Flask, Python, SQL — and I'm drawn to problems where AI and software meet.
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((s, i) => (
                <motion.div key={s.label} variants={item}
                  className="p-4 card-ed rounded-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4922A]/30 to-transparent" />
                  <div className="font-serif text-3xl text-[#D4922A] mb-1">{s.value}{s.suffix}</div>
                  <div className="font-sans text-xs text-[#A8896A] tracking-wide">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            <BookshelfIllustration />
            <div className="w-full p-5 card-ed rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4922A]/40 to-transparent" />
              <div className="font-mono-k text-xs text-[#A06B10] mb-3 tracking-widest">CURRENTLY</div>
              {[
                'B.Tech Electrical Engineering @ NIT Hamirpur (2023–2027) · CGPA 9.07',
                'Open to remote opportunities, freelance projects, and startup collaborations',
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3 mt-2">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 0 ? 'bg-[#D4922A]' : 'bg-[#C9A87C]'}`} />
                  <p className="font-sans text-sm text-[#7A6248] leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
