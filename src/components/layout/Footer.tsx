import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Typography from "@/components/ui/Typography";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 px-6 py-24 md:px-12 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 mb-32">
          <div>
            <Typography variant="caption" className="mb-8 block">
              Work with us
            </Typography>
            <Typography variant="display" as="h3" className="mb-12 leading-[0.9] uppercase">
              Let&apos;s create something <br />
              <span className="text-accent italic font-serif">Legendary.</span>
            </Typography>

            <Link
              href="mailto:hello@dyadyami.studio"
              data-magnetic="true"
              className="group inline-flex items-center gap-4 border-b border-white/10 pb-4 hover:border-accent transition-colors"
            >
              <Typography variant="h3" className="group-hover:text-accent transition-colors lowercase">
                hello@dyadyami.studio
              </Typography>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                <ArrowUpRight size={24} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-12 lg:pt-24">
            <div>
              <Typography variant="caption" className="text-white/20 mb-8 block">
                Navigation
              </Typography>
              <ul className="space-y-4">
                <li><Link href="#work" data-magnetic="true" className="text-lg hover:text-accent transition-colors">Work</Link></li>
                <li><Link href="#philosophy" data-magnetic="true" className="text-lg hover:text-accent transition-colors">Philosophy</Link></li>
                <li><Link href="#services" data-magnetic="true" className="text-lg hover:text-accent transition-colors">Services</Link></li>
                <li><Link href="#contact" data-magnetic="true" className="text-lg hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <Typography variant="caption" className="text-white/20 mb-8 block">
                Social
              </Typography>
              <ul className="space-y-4">
                <li>
                  <Link href="#" data-magnetic="true" className="flex items-center gap-2 text-lg hover:text-accent transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" data-magnetic="true" className="flex items-center gap-2 text-lg hover:text-accent transition-colors">
                    Behance
                  </Link>
                </li>
                <li>
                  <Link href="#" data-magnetic="true" className="flex items-center gap-2 text-lg hover:text-accent transition-colors">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pt-12 border-t border-white/5">
          <div className="flex flex-col">
            <Typography variant="h4" className="uppercase leading-none tracking-tightest">
              Dyadyami
            </Typography>
            <Typography variant="caption" className="text-[9px] text-accent font-mono leading-none mt-1">
              Studio
            </Typography>
          </div>

          <Typography variant="caption" className="text-white/10 font-mono tracking-widest lowercase">
            &copy; {new Date().getFullYear()} DYADYAMI STUDIO. ALL RIGHTS RESERVED.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
