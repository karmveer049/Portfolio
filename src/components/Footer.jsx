import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#E8DDD0] bg-[#F0E8DA] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <span className="font-serif text-lg text-[#1C1410]">KK</span>
          <span className="text-[#C9A87C]">·</span>
          <span className="font-sans text-xs text-[#A8896A]">Karmveer Kumar · Full-Stack Developer</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/karmveer049" target="_blank" rel="noopener noreferrer"
            className="text-[#C9A87C] hover:text-[#D4922A] transition-colors" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com/in/karmveer-kumar-2258bb312" target="_blank" rel="noopener noreferrer"
            className="text-[#C9A87C] hover:text-[#D4922A] transition-colors" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <span className="font-sans text-xs text-[#C9A87C]">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
