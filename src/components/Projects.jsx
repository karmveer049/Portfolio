import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, X } from 'lucide-react'
import { GradientMesh, Leaf, InkDots, RingAccent, CrossMark } from './FloatingIllustrations'

const projects = [
  {
    num: '01',
    title: 'Multilingual AI Transcriber',
    tagline: 'Real-time Hinglish speech-to-text with AI polish',
    description: 'A production-grade speech-to-text system supporting Hinglish with transcription latency under 2 seconds. Integrates Groq-hosted Whisper for recognition and Gemini API for grammar correction, semantic polishing, and context-aware summarization. Built with async FastAPI and tested with Postman.',
    stack: ['FastAPI', 'Whisper', 'Groq', 'Gemini API', 'Python', 'Render'],
    live: 'https://ai-voice-transcriber.onrender.com/',
    github: 'https://github.com/karmveer049',
    screenshot: '/screenshots/ai-transcriber.png',
    highlight: 'Sub-2s latency',
    accent: '#4A9EBF',
  },
  {
    num: '02',
    title: 'Library Management System',
    tagline: 'Full-stack web app with Tableau analytics',
    description: 'A complete web application with role-based authentication for Admin, Librarian, and Student users. CRUD APIs for book issuance, return tracking, and automated fine calculation. Integrated Tableau dashboards for operational analytics. Modular Flask Blueprints and MVC architecture.',
    stack: ['Flask', 'MySQL', 'HTML/CSS', 'REST APIs', 'Tableau', 'Render'],
    live: 'https://library-59m8.onrender.com/',
    github: 'https://github.com/karmveer049',
    screenshot: '/screenshots/library.png',
    highlight: 'Role-based auth',
    accent: '#8B5A2B',
  },
  {
    num: '03',
    title: 'End-Sem Marks Predictor',
    tagline: 'Adaptive prediction with Kalman Filter',
    description: 'Predictive model using attendance, mid-semester marks, and study hours. Implements Recursive Least Squares (RLS) with Kalman Filter for real-time weight updates and adaptive prediction. 91.4% accuracy with sub-5ms latency. Interactive frontend deployed on GitHub Pages.',
    stack: ['Python', 'Kalman Filter', 'RLS', 'NumPy', 'GitHub Pages'],
    live: 'https://karmveer049.github.io/endSemMarksPredictor/',
    github: 'https://github.com/karmveer049',
    screenshot: '/screenshots/marks-predictor.png',
    highlight: '91.4% accuracy',
    accent: '#2B7A4B',
  },
]

/* ── Lightbox modal for full-size screenshot ── */
function Lightbox({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      style={{ background: 'rgba(28,20,16,0.85)', backdropFilter: 'blur(10px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl bg-[#FFFCF7] rounded-lg overflow-hidden shadow-2xl"
        style={{ border: '1px solid rgba(201,168,124,0.4)' }}
      >
        {/* header bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#F0E8DA] border-b border-[#E0D4C0]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#E8B0A0]" />
              <span className="w-3 h-3 rounded-full bg-[#E8D0A0]" />
              <span className="w-3 h-3 rounded-full bg-[#A8C890]" />
            </div>
            <span className="font-mono-k text-xs text-[#A8896A] ml-3">{project.live}</span>
          </div>
          <button onClick={onClose}
            className="w-7 h-7 rounded-sm flex items-center justify-center text-[#A8896A] hover:text-[#1C1410] hover:bg-[#E8DDD0] transition-all">
            <X size={15} />
          </button>
        </div>

        {/* screenshot */}
        <div className="relative overflow-hidden" style={{ maxHeight: '72vh' }}>
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            className="w-full object-cover object-top"
          />
          {/* bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20"
            style={{ background: 'linear-gradient(to top, rgba(255,252,247,0.95), transparent)' }} />
        </div>

        {/* footer */}
        <div className="px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg text-[#1C1410]">{project.title}</h3>
            <p className="font-sans text-xs text-[#A8896A]">{project.tagline}</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm px-4 py-2 bg-[#1C1410] text-[#F7F3ED] hover:bg-[#D4922A] transition-all rounded-sm">
              <ExternalLink size={13} /> Open live
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm px-4 py-2 border border-[#C9A87C] text-[#7A6248] hover:border-[#D4922A] hover:text-[#1C1410] transition-all rounded-sm">
              <Github size={13} /> Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Single project card ── */
function ProjectCard({ p, index, inView, onPreview }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.15 + index * 0.13 }}
      className="group relative card-ed rounded-lg overflow-hidden"
    >
      {/* amber left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#E8DDD0] group-hover:bg-[#D4922A] transition-colors duration-500" />

      <div className={`grid md:grid-cols-2 gap-0 ${!isEven ? 'md:[direction:rtl]' : ''}`}>

        {/* ── Screenshot panel ── */}
        <div
          className="relative overflow-hidden cursor-pointer bg-[#F0E8DA]"
          style={{ minHeight: 260 }}
          onClick={() => onPreview(p)}
        >
          {/* fake browser chrome */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3 py-2 bg-[#EBE0CF]/95 backdrop-blur-sm border-b border-[#DDD0BC]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8B0A0]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8D0A0]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#A8C890]" />
            <span className="flex-1 mx-2 h-4 bg-[#DDD0BC]/60 rounded-sm" />
          </div>

          {/* screenshot image */}
          <motion.img
            src={p.screenshot}
            alt={`${p.title} preview`}
            className="w-full h-full object-cover object-top pt-8"
            style={{ minHeight: 260 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />

          {/* hover overlay with "preview" cta */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'rgba(28,20,16,0.45)', backdropFilter: 'blur(2px)' }}
          >
            <div className="flex items-center gap-2 px-5 py-2.5 bg-[#F7F3ED] rounded-sm shadow-lg">
              <Play size={14} className="text-[#D4922A]" />
              <span className="font-sans text-sm text-[#1C1410] font-medium">Preview</span>
            </div>
          </motion.div>
        </div>

        {/* ── Content panel ── */}
        <div className={`p-7 md:p-8 flex flex-col justify-center ${!isEven ? '[direction:ltr]' : ''}`}>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-mono-k text-xs text-[#C9A87C]">{p.num}</span>
            <span className="font-sans text-xs px-2.5 py-1 amber-tag rounded-sm">{p.highlight}</span>
          </div>

          <h3 className="font-serif text-2xl text-[#1C1410] group-hover:text-[#A06B10] transition-colors duration-300 mb-1 leading-snug">
            {p.title}
          </h3>
          <p className="font-sans text-sm text-[#A8896A] italic mb-4">{p.tagline}</p>
          <p className="font-sans text-sm text-[#7A6248] leading-relaxed mb-5 font-light">
            {p.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {p.stack.map(s => (
              <span key={s}
                className="font-mono-k text-xs px-2 py-0.5 text-[#7A6248] bg-[#F0E8DA] border border-[#DDD0BC] rounded-sm hover:border-[#D4922A] transition-colors">
                {s}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href={p.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm text-[#D4922A] hover:text-[#A06B10] transition-colors font-medium">
              <ExternalLink size={13} /> Live demo
            </a>
            <a href={p.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm text-[#A8896A] hover:text-[#1C1410] transition-colors">
              <Github size={13} /> GitHub
            </a>
            <button
              onClick={() => onPreview(p)}
              className="flex items-center gap-2 font-sans text-sm text-[#A8896A] hover:text-[#D4922A] transition-colors ml-auto">
              <Play size={13} /> Full preview
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])
  const [lightboxProject, setLightboxProject] = useState(null)

  return (
    <>
      <section id="projects" className="py-28 md:py-36 relative overflow-hidden bg-[#F7F3ED]" ref={ref}>
        <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
          <GradientMesh />
        </motion.div>
        <Leaf className="top-12 right-[6%] w-8 h-12" rotate={-15} opacity={0.1} />
        <RingAccent className="bottom-20 left-[3%]" size={96} opacity={0.07} />
        <InkDots count={7} className="top-[30%] right-[3%] w-20 h-28" color="#D4922A" />
        <CrossMark className="top-24 left-1/4" size={12} opacity={0.12} />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-6">
            <span className="font-mono-k text-xs text-[#D4922A] tracking-[0.2em] uppercase">03 — Projects</span>
            <span className="w-14 ink-line" />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-[#1C1410] mb-4 max-w-lg">
            Things I've <span className="italic text-[#D4922A]">shipped.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-sans text-[#A8896A] mb-16 max-w-md font-light">
            Every project below is live, deployed, and usable. Click any screenshot for a full preview.
          </motion.p>

          <div className="space-y-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.num} p={p} index={i} inView={inView} onPreview={setLightboxProject} />
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }} className="mt-12 text-center">
            <a href="https://github.com/karmveer049" target="_blank" rel="noopener noreferrer"
              className="font-sans text-sm text-[#A8896A] hover:text-[#D4922A] transition-colors inline-flex items-center gap-2">
              <Github size={14} /> See all repositories on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxProject && (
          <Lightbox project={lightboxProject} onClose={() => setLightboxProject(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
