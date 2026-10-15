import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FFE8D6] text-slate-800 py-10 md:py-16 border-t-4 border-[#FF971D] shadow-sm">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">

        {/* About Section */}
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
          <p className="text-slate-700 text-sm leading-relaxed mb-2 md:mb-6 max-w-md">
            Providing holistic education based on the Chinmaya Vision Programme, blending academic excellence with spiritual growth.
          </p>
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
            <li><a href="https://kol.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF971D] transition-colors">Chinmaya Vidyalaya, Kollam</a></li>
            <li><a href="https://kpm.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF971D] transition-colors">Chinmaya Vidyalaya, Kunnumpuram</a></li>
            <li><a href="https://nmd.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF971D] transition-colors">Chinmaya Vidyalaya, Naruvamoodu</a></li>
            <li><a href="https://vkd.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF971D] transition-colors">Chinmaya Vidyalaya, Vazhuthacaud</a></li>
          </ul>
        </div>

      </div>

      <div className="container mx-auto px-4 md:px-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#FF971D]/20 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-2 md:gap-0">
        <p>&copy; 2026 Chinmaya Educational, Cultural and Charitable Trust. All rights reserved.</p>
        <p className="font-medium text-slate-800">Powered by <Link href="https://robolabs.techosa.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF971D] transition-colors font-semibold">Techosa Robotics</Link></p>
      </div>
    </footer>
  );
}
