import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#F7F3ED]/92 backdrop-blur-md border-b border-[#E8DDD0]'
            : 'py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="font-serif text-xl text-[#1C1410] hover:text-[#D4922A] transition-colors duration-300">
            KK
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="text-sm font-sans text-[#7A6248] hover:text-[#1C1410] transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm font-sans px-4 py-2 border border-[#D4922A] text-[#D4922A] hover:bg-[#D4922A] hover:text-white transition-all duration-300 rounded-sm tracking-wide"
            >
              Hire me
            </motion.a>
          </div>
          <button
            className="md:hidden text-[#7A6248] hover:text-[#1C1410] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[#F7F3ED] border-b border-[#E8DDD0] py-6 px-6 flex flex-col gap-5"
          >
            {navLinks.map(link => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                className="font-sans text-[#7A6248] hover:text-[#1C1410] text-base tracking-wide transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="font-sans text-sm px-4 py-2.5 border border-[#D4922A] text-[#D4922A] text-center hover:bg-[#D4922A] hover:text-white transition-all rounded-sm">
              Hire me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
