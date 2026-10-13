import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-ivory py-16 border-t-4 border-saffron">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* About Section */}
        <div>
          <div className="relative h-20 w-60 md:h-24 md:w-64 mb-6">
            <Image 
              src="/images/CV WHITE.png" 
              alt="Chinmaya Educational Trust Logo" 
              fill 
              sizes="(max-width: 768px) 240px, 280px"
              className="object-contain object-left"
            />
          </div>
          <p className="text-ivory/80 text-sm leading-relaxed mb-6">
            Providing holistic education based on the Chinmaya Vision Programme, blending academic excellence with spiritual growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm text-ivory/80">
            <li><Link href="/trustees" className="hover:text-saffron transition-colors">Board of Trustees</Link></li>
            <li><Link href="/temples" className="hover:text-saffron transition-colors">Temples & Shrines</Link></li>
            <li><Link href="/gallery" className="hover:text-saffron transition-colors">Photo Gallery</Link></li>
            <li><Link href="/updates" className="hover:text-saffron transition-colors">Chinmaya Updates</Link></li>
            <li><Link href="/contact" className="hover:text-saffron transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Vidyalayas */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4 text-white">Our Vidyalayas</h4>
          <ul className="flex flex-col gap-2 text-sm text-ivory/80">
            <li><a href="https://att.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-saffron transition-colors">Chinmaya Vidyalaya, Attukal</a></li>
            <li><a href="https://kda.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-saffron transition-colors">Chinmaya Vidyalaya, Kattakada</a></li>
            <li><a href="https://kol.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-saffron transition-colors">Chinmaya Vidyalaya, Kollam</a></li>
            <li><a href="https://kpm.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-saffron transition-colors">Chinmaya Vidyalaya, Kunnumpuram</a></li>
            <li><a href="https://nmd.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-saffron transition-colors">Chinmaya Vidyalaya, Naruvamoodu</a></li>
            <li><a href="https://vkd.chintvm.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-saffron transition-colors">Chinmaya Vidyalaya, Vazhuthacaud</a></li>
          </ul>
        </div>

      </div>
      
      <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-ivory/60">
        <p>&copy; 2026 Chinmaya Educational, Cultural and Charitable Trust. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Developed as part of redesign initiative.</p>
      </div>
    </footer>
  );
}
