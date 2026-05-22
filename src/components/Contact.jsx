import { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Download, Phone, X, Send, ArrowUpRight } from 'lucide-react'
import { GradientMesh, Leaf, RingAccent, InkDots, CrossMark } from './FloatingIllustrations'

const noiseStyle = {
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
  opacity: 0.018,
  position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, borderRadius: 'inherit',
}

function ContactCard({ icon: Icon, label, value, href, onClick, delay, inView }) {
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -3, transition: { duration: 0.22 } }}
      className="group relative flex items-center gap-4 p-5 rounded-sm card-ed cursor-pointer overflow-hidden"
    >
      <div style={noiseStyle} />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 group-hover:h-3/4 transition-all duration-400 rounded-full bg-[#D4922A]" />
      <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-sm bg-[#F0E8DA] border border-[#DDD0BC] group-hover:border-[#D4922A] flex items-center justify-center transition-all duration-300">
        <Icon size={17} className="text-[#C9A87C] group-hover:text-[#D4922A] transition-colors duration-300" />
      </div>
      <div className="relative z-10 flex-1 min-w-0">
        <div className="font-mono-k text-[10px] tracking-[0.18em] text-[#A8896A] group-hover:text-[#A06B10] uppercase mb-0.5 transition-colors duration-300">{label}</div>
        <div className="font-sans text-sm text-[#7A6248] group-hover:text-[#1C1410] transition-colors duration-300 truncate">{value}</div>
      </div>
      <ArrowUpRight size={14} className="relative z-10 text-[#C9A87C] group-hover:text-[#D4922A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
    </motion.div>
  )
  if (href) return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{inner}</a>
  return <div onClick={onClick}>{inner}</div>
}

export default function Contact() {
  const form = useRef()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [visitorName, setVisitorName] = useState('')
  const [visitorEmail, setVisitorEmail] = useState('')

  const copyEmail = () => {
    navigator.clipboard.writeText('karamveerkumar094@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',form.current,'YOUR_PUBLIC_KEY')
      .then(() => { alert('Message sent successfully!'); form.current.reset() },
            (error) => { alert('Failed to send message.'); console.log(error) })
  }

  const handleModalSend = () => {
    emailjs.send('service_1m6h65b','template_t0u0ajq',
      { name: visitorName, email: visitorEmail, subject: 'Resume Request', message: `${visitorName} requested your resume.` },
      'QsvzOfaALyY2UMR_3')
    .then(() => { alert('Resume request sent successfully!'); setShowModal(false); setVisitorName(''); setVisitorEmail('') })
    .catch((error) => { console.log(error); alert('Failed to send request.') })
  }

  const inputClass = "w-full px-4 py-3 rounded-sm font-sans text-sm text-[#1C1410] placeholder-[#C9A87C] outline-none transition-all duration-300 bg-[#F7F3ED] border border-[#DDD0BC] focus:border-[#D4922A] focus:ring-2 focus:ring-[#D4922A]/10"

  return (
    <>
      <section id="contact" className="py-28 md:py-40 relative overflow-hidden bg-[#F7F3ED]" ref={ref}>
        <GradientMesh />
        <Leaf className="top-16 right-[7%] w-9 h-13" rotate={-18} opacity={0.09} />
        <Leaf className="bottom-24 left-[4%] w-6 h-9" rotate={12} opacity={0.07} />
        <RingAccent className="top-24 left-[2%]" size={80} opacity={0.07} />
        <InkDots count={6} className="bottom-32 right-[4%] w-18 h-24" color="#C9A87C" />
        <CrossMark className="top-1/2 right-[10%]" size={12} opacity={0.12} />

        <div className="absolute top-0 left-0 right-0 ink-line" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-20">
            <span className="font-mono-k text-[10px] tracking-[0.22em] text-[#D4922A] uppercase">05 — Contact</span>
            <div className="flex-1 max-w-16 ink-line" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div>
              <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.08 }}
                className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] text-[#1C1410] mb-6">
                Let's build something{' '}
                <em className="not-italic text-[#D4922A]">worth remembering.</em>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.18 }}
                className="font-sans text-base leading-relaxed mb-12 font-light text-[#7A6248]">
                I'm open to remote roles, startup collaborations, freelance projects, and API or AI integration work. If you have something interesting to build, let's talk.
              </motion.p>

              <div className="space-y-3">
                {/* copy-email card */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.28 }}
                  whileHover={{ y: -3, transition: { duration: 0.22 } }}
                  onClick={copyEmail}
                  className="group relative flex items-center gap-4 p-5 rounded-sm card-ed cursor-pointer overflow-hidden"
                >
                  <div style={noiseStyle} />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 group-hover:h-3/4 transition-all duration-400 rounded-full bg-[#D4922A]" />
                  <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-sm bg-[#F0E8DA] border border-[#DDD0BC] group-hover:border-[#D4922A] flex items-center justify-center transition-all duration-300">
                    <Mail size={17} className="text-[#C9A87C] group-hover:text-[#D4922A] transition-colors duration-300" />
                  </div>
                  <div className="relative z-10 flex-1 min-w-0">
                    <div className="font-mono-k text-[10px] tracking-[0.18em] text-[#A8896A] group-hover:text-[#A06B10] uppercase mb-0.5 transition-colors">Email</div>
                    <div className="font-sans text-sm text-[#7A6248] group-hover:text-[#1C1410] transition-colors truncate">karamveerkumar094@gmail.com</div>
                  </div>
                  <motion.span key={copied ? 'copied' : 'click'}
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 font-mono-k text-[10px] tracking-wide flex-shrink-0"
                    style={{ color: copied ? '#D4922A' : '#C9A87C' }}>
                    {copied ? '✓ Copied' : 'Click to copy'}
                  </motion.span>
                </motion.div>

                <ContactCard icon={Phone}    label="Phone"    value="+91 99550 64376"              href="tel:+919955064376"                                        delay={0.34} inView={inView} />
                <ContactCard icon={Linkedin} label="LinkedIn" value="karmveer-kumar-2258bb312"     href="https://linkedin.com/in/karmveer-kumar-2258bb312"         delay={0.40} inView={inView} />
                <ContactCard icon={Github}   label="GitHub"   value="github.com/karmveer049"       href="https://github.com/karmveer049"                          delay={0.46} inView={inView} />
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.28 }} className="flex flex-col gap-5">

              {/* looking for */}
              <div className="relative card-ed rounded-sm overflow-hidden p-7">
                <div style={noiseStyle} />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4922A]/40 to-transparent" />
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl text-[#1C1410] mb-1">I'm looking for</h3>
                  <div className="ink-line mb-6 mt-2" />
                  <div className="space-y-3.5">
                    {['Remote full-stack or backend roles','AI-integrated product development','API design and integration projects','Startup founding engineer opportunities','Freelance web development work'].map((item, i) => (
                      <motion.div key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.45 + i * 0.07 }}
                        className="flex items-center gap-3.5">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D4922A]" style={{ boxShadow: '0 0 5px rgba(212,146,42,0.4)' }} />
                        <span className="font-sans text-sm font-light text-[#7A6248]">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* resume card */}
              <motion.div
                whileHover={{ y: -2, boxShadow: '0 12px 40px rgba(28,20,16,0.12)', transition: { duration: 0.3 } }}
                className="relative card-ed rounded-sm overflow-hidden p-7"
                style={{ borderColor: 'rgba(212,146,42,0.4)' }}
              >
                <div style={noiseStyle} />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4922A]/50 via-[#C9A87C]/30 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-10"
                  style={{ background: 'radial-gradient(circle, #D4922A, transparent)', filter: 'blur(10px)' }} />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 font-mono-k text-[10px] tracking-[0.22em] uppercase mb-3 px-2.5 py-1 rounded-sm amber-tag">
                    <Download size={10} /> Resume
                  </div>
                  <p className="font-sans text-sm leading-relaxed mb-6 font-light text-[#7A6248]">
                    Download a complete overview of my experience, deployed projects, and technical skills.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-sm font-sans text-sm font-semibold text-white bg-[#1C1410] hover:bg-[#D4922A] transition-all duration-300 shadow-sm"
                  >
                    <Download size={14} /> Request Resume
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 ink-line" />
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ background: 'rgba(28,20,16,0.55)', backdropFilter: 'blur(6px)' }}
            onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}
              className="relative w-full max-w-md rounded-sm overflow-hidden bg-[#FFFCF7]"
              style={{ border: '1px solid rgba(201,168,124,0.4)', boxShadow: '0 32px 64px rgba(28,20,16,0.18), 0 1px 0 rgba(255,255,255,0.9) inset' }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4922A]/50 to-transparent" />
              <div className="flex items-start justify-between p-7 pb-5">
                <div>
                  <div className="font-mono-k text-[10px] tracking-[0.2em] text-[#D4922A] uppercase mb-2">Resume Request</div>
                  <h3 className="font-serif text-2xl text-[#1C1410]">I'll send it right over.</h3>
                </div>
                <button onClick={() => setShowModal(false)}
                  className="w-8 h-8 rounded-sm flex items-center justify-center text-[#A8896A] hover:text-[#1C1410] hover:bg-[#F0E8DA] transition-all duration-200">
                  <X size={16} />
                </button>
              </div>
              <div className="mx-7 mb-6 ink-line" />
              <div className="px-7 pb-7 space-y-4">
                <div>
                  <label className="block font-mono-k text-[10px] tracking-[0.18em] text-[#A8896A] uppercase mb-2">Your Name</label>
                  <input type="text" placeholder="e.g. Sarah Khan" value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="block font-mono-k text-[10px] tracking-[0.18em] text-[#A8896A] uppercase mb-2">Your Email</label>
                  <input type="email" placeholder="e.g. sarah@startup.com" value={visitorEmail}
                    onChange={(e) => setVisitorEmail(e.target.value)} className={inputClass} />
                </div>
                <div className="flex gap-3 pt-2">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    onClick={handleModalSend}
                    className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-sm font-sans text-sm font-semibold text-white bg-[#1C1410] hover:bg-[#D4922A] transition-all duration-300 shadow-sm">
                    <Send size={14} /> Send Request
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    onClick={() => setShowModal(false)}
                    className="px-5 py-3.5 rounded-sm font-sans text-sm text-[#7A6248] hover:text-[#1C1410] border border-[#DDD0BC] hover:border-[#C9A87C] transition-all duration-200">
                    Cancel
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
