import Link from "next/link";
import { SCHOOL, NAV_LINKS, PROGRAMS } from "@/lib/constants";
import { GraduationCap, MapPin, Phone, Mail, Globe, Camera, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2C3E50] to-[#1a252f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{SCHOOL.shortName}</h3>
                <p className="text-xs text-gray-400">{SCHOOL.tagline}</p>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Nurturing young minds through Montessori-based education in a safe, loving environment. Where every child discovers the joy of learning.
            </p>
            <div className="flex gap-3">
              <a href={SCHOOL.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Globe className="w-4 h-4" />
              </a>
              <a href={SCHOOL.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-warm transition-colors" aria-label="Instagram">
                <Camera className="w-4 h-4" />
              </a>
              <a href={SCHOOL.social.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors" aria-label="Youtube">
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-secondary mb-5">Programs</h4>
            <ul className="space-y-3">
              {PROGRAMS.map((p) => (
                <li key={p.id}>
                  <Link href="/programs" className="text-sm text-gray-300 hover:text-white transition-colors">
                    {p.icon} {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">{SCHOOL.location}</span>
              </li>
              <li>
                <a href={`tel:${SCHOOL.phone}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  {SCHOOL.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SCHOOL.email}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  {SCHOOL.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Women-owned &middot; Montessori-based &middot; Premium Early Education
          </p>
        </div>
      </div>
    </footer>
  );
}
