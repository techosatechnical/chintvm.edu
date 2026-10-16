import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#FFE8D6] text-slate-800 py-10 md:py-16 border-t-4 border-[#FF971D] shadow-sm overflow-hidden">
      {/* Background Details */}
      {/* 1. Soft Orange Circles (Glow) */}
      <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-[#FF971D]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-[#FF971D]/12 blur-3xl pointer-events-none" />

      {/* 2. Thin Outline Rings */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-[#FF971D]/20 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-[#FF971D]/25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-48 rounded-full border border-[#FF971D]/20 pointer-events-none" />

      {/* 3. Dot-grid patch in Left Corner */}
      <div
        className="absolute top-8 left-6 md:top-12 md:left-10 w-44 h-36 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FF971D 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px"
        }}
      />

      {/* 4. Dot-grid patch in Right Corner */}
      <div
        className="absolute top-10 right-20 w-44 h-32 opacity-25 pointer-events-none hidden md:block"
        style={{
          backgroundImage: "radial-gradient(#FF971D 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px"
        }}
      />

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 relative z-10">

        {/* About & Contact Section */}
        <div className="col-span-2 md:col-span-1">
          <div className="relative h-18 w-56 md:h-24 md:w-64 mb-4 md:mb-6">
            <Image
              src="/images/CV ORANGE.png"
              alt="Chinmaya Educational Trust Logo"
              fill
              sizes="(max-width: 768px) 240px, 280px"
              className="object-contain object-left"
            />
          </div>
          <p className="hidden md:block text-slate-700 text-sm leading-relaxed mb-6 max-w-md">
            Providing holistic education based on the Chinmaya Vision Programme, blending academic excellence with spiritual growth.
          </p>

          {/* Contact Details with Icon Badges */}
          <div className="flex flex-col gap-2.5 pt-2">
            <div className="flex items-center gap-2.5 text-xs text-slate-700">
              <span className="w-7 h-7 rounded-lg bg-white/90 border border-[#FF971D]/30 text-[#FF971D] flex items-center justify-center shrink-0 shadow-2xs">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <a href="tel:04712451533" className="hover:text-[#FF971D] font-medium transition-colors">
                0471 2451533 / 2452033
              </a>
            </div>

            <div className="relative z-10 flex items-center gap-2.5 text-xs text-slate-700">
              <span className="w-7 h-7 rounded-lg bg-white/90 border border-[#FF971D]/30 text-[#FF971D] flex items-center justify-center shrink-0 shadow-2xs">
                <Mail className="w-3.5 h-3.5" />
              </span>
              <a href="mailto:chintvm@gmail.com" className="hover:text-[#FF971D] font-medium transition-colors">
                chintvm@gmail.com
              </a>
            </div>

            <div className="relative z-10 flex items-center gap-2.5 text-xs text-slate-700">
              <span className="w-7 h-7 rounded-lg bg-white/90 border border-[#FF971D]/30 text-[#FF971D] flex items-center justify-center shrink-0 shadow-2xs">
                <MapPin className="w-3.5 h-3.5" />
              </span>
              <span>Vazhuthacaud, Trivandrum &bull; 695010</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="font-heading font-bold text-base md:text-lg mb-3 md:mb-4 text-slate-900 tracking-wide">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-xs md:text-sm text-slate-700">
            <li><Link href="/trustees" className="hover:text-[#FF971D] transition-colors">Board of Trustees</Link></li>
            <li><Link href="/temples" className="hover:text-[#FF971D] transition-colors">Temples & Shrines</Link></li>
            <li><Link href="/gallery" className="hover:text-[#FF971D] transition-colors">Photo Gallery</Link></li>
            <li><Link href="/updates" className="hover:text-[#FF971D] transition-colors">Chinmaya Updates</Link></li>
            <li><Link href="/contact" className="hover:text-[#FF971D] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Vidyalayas */}
        <div className="col-span-1">
          <h4 className="font-heading font-bold text-base md:text-lg mb-3 md:mb-4 text-slate-900 tracking-wide">Our Vidyalayas</h4>
          <ul className="flex flex-col gap-2 text-xs md:text-sm text-slate-700">
            <li><a href="https://att.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF971D] transition-colors">Chinmaya Vidyalaya, Attukal</a></li>
            <li><a href="https://kda.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF971D] transition-colors">Chinmaya Vidyalaya, Kattakada</a></li>
            <li><a href="https://chinmaya-kollam.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF971D] transition-colors">Chinmaya Vidyalaya, Kollam</a></li>
            <li><a href="https://kpm.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF971D] transition-colors">Chinmaya Vidyalaya, Kunnumpuram</a></li>
            <li><a href="https://nmd.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF971D] transition-colors">Chinmaya Vidyalaya, Naruvamoodu</a></li>
            <li><a href="https://vkd.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF971D] transition-colors">Chinmaya Vidyalaya, Vazhuthacaud</a></li>
          </ul>
        </div>

      </div>

      {/* Copyright row */}
      <div className="container mx-auto px-4 md:px-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#FF971D]/20 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-2 md:gap-0 relative z-10">
        <p>&copy; 2026 Chinmaya Educational, Cultural and Charitable Trust. All rights reserved.</p>
        <p className="font-medium text-slate-800">Powered by <Link href="https://robolabs.techosa.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF971D] transition-colors font-semibold">Techosa Robotics</Link></p>
      </div>
    </footer>
  );
}
