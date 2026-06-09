import Link from "next/link";
import { Monitor, Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 px-6 py-20 md:px-12 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40">
          <div>
            <h3 className="text-4xl md:text-6xl font-bold mb-10 tracking-tightest">
              Let&apos;s create something <span className="text-accent italic">legendary.</span>
            </h3>
            <Link
              href="mailto:hello@dyadyami.studio"
              className="text-xl md:text-2xl font-medium border-b border-accent/30 pb-2 hover:border-accent transition-colors"
            >
              hello@dyadyami.studio
            </Link>
          </div>

          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-10">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6 font-mono">Navigation</h4>
                <ul className="space-y-4">
                  <li><Link href="#work" className="hover:text-accent transition-colors">Work</Link></li>
                  <li><Link href="#philosophy" className="hover:text-accent transition-colors">Philosophy</Link></li>
                  <li><Link href="#services" className="hover:text-accent transition-colors">Services</Link></li>
                  <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6 font-mono">Social</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="flex items-center gap-2 hover:text-accent transition-colors">
                      <Monitor size={16} /> Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-2 hover:text-accent transition-colors">
                      <Globe size={16} /> Behance
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-2 hover:text-accent transition-colors">
                      <Mail size={16} /> LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tightest uppercase">Dyadyami</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-mono">Studio</span>
              </div>
              <p className="text-white/20 text-xs font-mono">
                &copy; {new Date().getFullYear()} DYADYAMI STUDIO. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
