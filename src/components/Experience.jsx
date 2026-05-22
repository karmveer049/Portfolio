import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { GradientMesh, Leaf, RingAccent, InkDots } from './FloatingIllustrations'

const timeline = [{
  period: 'Jul 2025 – Aug 2025', role: 'Machine Learning Intern', org: 'CodSoft', type: 'Remote',
  bullets: [
    'Built 4 end-to-end ML pipelines: Fraud Detection, SMS Spam Classification, Customer Churn Prediction, Movie Genre Classification',
    'Implemented preprocessing workflows, feature engineering, and model evaluation using Pandas and NumPy',
    'Applied best practices — Git version control, modular code, reproducible Jupyter workflows',
  ],
  tech: ['Python','Scikit-learn','Pandas','NumPy','Jupyter'],
}]

const education = {
  period: '2023 – 2027', degree: 'B.Tech in Electrical Engineering',
  institution: 'National Institute of Technology Hamirpur',
  location: 'Hamirpur, Himachal Pradesh', cgpa: '9.07 / 10',
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] })
  const bgY = useTransform(scrollYProgress, [0,1], ['-6%','6%'])

  return (
    <section id="experience" className="py-28 md:py-36 relative overflow-hidden bg-[#FDFAF4]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 ink-line" />
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <GradientMesh />
      </motion.div>
      <Leaf className="top-14 right-[5%] w-8 h-12" rotate={-22} opacity={0.09} />
      <RingAccent className="bottom-16 left-[6%]" size={72} opacity={0.08} />
      <InkDots count={5} className="top-1/3 right-[4%] w-16 h-24" color="#C9A87C" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-16">
          <span className="font-mono-k text-xs text-[#D4922A] tracking-[0.2em] uppercase">04 — Experience</span>
          <span className="w-14 ink-line" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1410]">The journey.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.1 }}
              className="font-sans text-xs text-[#A8896A] tracking-widest uppercase mb-6">
              Work Experience
            </motion.div>
            {timeline.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative pl-6 pb-8 border-l-2 border-[#E8DDD0] hover:border-[#D4922A] transition-colors duration-500"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#F7F3ED] border-2 border-[#D4922A]" />
                <div className="font-mono-k text-xs text-[#A8896A] mb-1">{t.period}</div>
                <h3 className="font-serif text-xl text-[#1C1410] mb-0.5">{t.role}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-sans text-sm text-[#D4922A] font-medium">{t.org}</span>
                  <span className="text-[#C9A87C]">·</span>
                  <span className="font-sans text-xs text-[#A8896A]">{t.type}</span>
                </div>
                <motion.ul variants={container} initial="hidden" animate={inView ? 'show' : 'hidden'}
                  className="space-y-2 mb-4">
                  {t.bullets.map((b, j) => (
                    <motion.li key={j} variants={item} className="flex items-start gap-2.5">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#C9A87C] flex-shrink-0" />
                      <span className="font-sans text-sm text-[#7A6248] leading-relaxed font-light">{b}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="flex flex-wrap gap-2">
                  {t.tech.map(s => (
                    <span key={s} className="font-mono-k text-xs px-2 py-0.5 text-[#7A6248] bg-[#F0E8DA] border border-[#DDD0BC] rounded-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.15 }}
              className="font-sans text-xs text-[#A8896A] tracking-widest uppercase mb-6">
              Education
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="card-ed rounded-sm p-6 mb-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4922A]/40 to-transparent" />
              <div className="font-mono-k text-xs text-[#A8896A] mb-1">{education.period}</div>
              <h3 className="font-serif text-xl text-[#1C1410] mb-1">{education.degree}</h3>
              <p className="font-sans text-sm text-[#D4922A] font-medium mb-1">{education.institution}</p>
              <p className="font-sans text-xs text-[#A8896A] mb-4">{education.location}</p>
              <div className="flex items-center gap-3 p-3 bg-[#F0E8DA] rounded-sm">
                <span className="font-sans text-xs text-[#A8896A] tracking-wide">CGPA</span>
                <span className="font-serif text-2xl text-[#D4922A]">{education.cgpa}</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.1 }}
              className="font-sans text-xs text-[#A8896A] tracking-widest uppercase mb-4">
              Certifications
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="card-ed rounded-sm p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9A87C]/30 to-transparent" />
              <div className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#D4922A] flex-shrink-0" />
                <div>
                  <div className="font-sans text-sm text-[#1C1410] font-medium">Machine Learning Internship</div>
                  <div className="font-sans text-xs text-[#A8896A] mt-0.5">CodSoft · Jul 2025 – Aug 2025</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 ink-line" />
    </section>
  )
}
