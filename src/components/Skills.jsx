import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { GradientMesh, Leaf, InkDots, RingAccent, InkStroke } from './FloatingIllustrations'

const chapters = [
  { id: 'I',   title: 'Languages',      skills: ['Python','JavaScript','C++','SQL'] },
  { id: 'II',  title: 'Backend',        skills: ['FastAPI','Flask','REST APIs','MVC Architecture'] },
  { id: 'III', title: 'Frontend',       skills: ['React','Tailwind CSS','HTML5','CSS3','Responsive Design'] },
  { id: 'IV',  title: 'Databases',      skills: ['MySQL','SQLite','MongoDB'] },
  { id: 'V',   title: 'AI / ML',        skills: ['Whisper','Gemini API','Groq','Scikit-learn','Pandas','NumPy'] },
  { id: 'VI',  title: 'Tools & DevOps', skills: ['Git','GitHub','Docker','Postman','Render','Tableau','VS Code'] },
]

const terminalLines = [
  { t: '$', v: '$ whoami' },
  { t: '>', v: '> karmveer — backend developer, ai integrator' },
  { t: '$', v: '$ ls skills/' },
  { t: '>', v: '> python  fastapi  react  whisper  gemini  sql' },
  { t: '$', v: '$ git log --oneline -3' },
  { t: '>', v: '> a1b2c3  shipped: multilingual ai transcriber' },
  { t: '>', v: '> d4e5f6  deployed: library management system' },
  { t: '>', v: '> g7h8i9  released: marks predictor v1.0' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const item = { hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } } }

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0,1], ['-6%','6%'])

  return (
    <section id="skills" className="py-28 md:py-36 relative overflow-hidden bg-[#FDFAF4]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 ink-line" />
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <GradientMesh />
      </motion.div>
      <Leaf className="top-10 right-[8%] w-9 h-13" rotate={-30} opacity={0.1} />
      <Leaf className="bottom-16 left-[4%] w-7 h-10" rotate={18} opacity={0.08} />
      <RingAccent className="top-16 left-[2%]" size={90} opacity={0.07} />
      <InkDots count={6} className="bottom-24 right-[5%] w-20 h-28" color="#C9A87C" />
      <InkStroke className="top-[35%] right-[15%] w-40 opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono-k text-xs text-[#D4922A] tracking-[0.2em] uppercase">02 — Skills</span>
          <span className="w-14 ink-line" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1410]">The toolkit.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div variants={container} initial="hidden" animate={inView ? 'show' : 'hidden'}
            className="grid grid-cols-1 gap-4">
            {chapters.map(ch => (
              <motion.div key={ch.id} variants={item}
                className="group flex items-start gap-5 p-5 card-ed rounded-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-transparent group-hover:bg-[#D4922A] transition-colors duration-400" />
                <div className="font-serif text-[#C9A87C] group-hover:text-[#D4922A] text-lg transition-colors duration-300 w-8 flex-shrink-0 mt-0.5">
                  {ch.id}
                </div>
                <div>
                  <div className="font-sans text-xs text-[#A8896A] tracking-widest uppercase mb-3">{ch.title}</div>
                  <div className="flex flex-wrap gap-2">
                    {ch.skills.map(s => (
                      <span key={s}
                        className="font-sans text-xs px-2.5 py-1 bg-[#F0E8DA] text-[#7A6248] border border-[#DDD0BC] rounded-sm hover:border-[#D4922A] hover:text-[#1C1410] transition-all duration-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="sticky top-28 space-y-5"
          >
            {/* Editorial terminal — light version */}
            <div className="card-ed rounded-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#EBE0CF] bg-[#F0E8DA]">
                <span className="w-3 h-3 rounded-full bg-[#EBD5B8]" />
                <span className="w-3 h-3 rounded-full bg-[#DFC89A]" />
                <span className="w-3 h-3 rounded-full bg-[#D4922A] opacity-70" />
                <span className="font-mono-k text-xs text-[#A8896A] ml-2">terminal</span>
              </div>
              <div className="p-5 space-y-2 bg-[#FFFCF7]">
                {terminalLines.map((line, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.12 }}
                    className={`font-mono-k text-sm ${line.t === '$' ? 'text-[#A06B10]' : 'text-[#7A6248]'}`}
                  >
                    {line.v}
                  </motion.div>
                ))}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className="font-mono-k text-sm text-[#D4922A]"
                >▋</motion.span>
              </div>
            </div>

            <div className="p-5 card-ed rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4922A]/40 to-transparent" />
              <div className="font-mono-k text-xs text-[#A06B10] tracking-widest mb-4">HIGHLIGHTED</div>
              <div className="space-y-3">
                {[
                  { label: 'GATE 2026', desc: 'Qualified in Electrical Engineering' },
                  { label: 'SIH 2024', desc: 'Selected for Smart India Hackathon' },
                  { label: 'Rank 7 / 200+', desc: 'College internal hackathon' },
                  { label: 'NDA qualified', desc: 'SSB interview, AFSB Gandhinagar' },
                ].map((a, i) => (
                  <motion.div key={a.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#D4922A] flex-shrink-0" />
                    <div>
                      <span className="font-sans text-xs text-[#D4922A] font-medium">{a.label}</span>
                      <span className="font-sans text-xs text-[#A8896A] ml-2">{a.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 ink-line" />
    </section>
  )
}
