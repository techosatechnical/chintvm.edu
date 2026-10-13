"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Users, Landmark, GraduationCap, MapPin, Sparkles, BookOpen } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks: Array<{
    name: string;
    href?: string;
    dropdown?: Array<{
      name: string;
      href: string;
      icon: any;
      color?: string;
      desc?: string;
    }>;
  }> = [
    { name: "Home", href: "/" },
    {
      name: "CEC Trust",
      dropdown: [
        { name: "Board of Trustees", href: "/trustees", icon: Users, color: "bg-[#F06A42]", desc: "Meet our leadership team" },
        { name: "Temples and Shrines", href: "/temples", icon: Landmark, color: "bg-[#9A5CB8]", desc: "Explore our spiritual centers" }
      ]
    },
    {
      name: "Vidyalayas",
      href: "/vidyalayas",
      dropdown: [
        { name: "Attukal", href: "https://att.chintvm.edu.in/", icon: GraduationCap, color: "bg-[#45A5E5]", desc: "Trivandrum City Campus" },
        { name: "Kattakada", href: "https://kda.chintvm.edu.in/", icon: BookOpen, color: "bg-[#E599B8]", desc: "Kattakada Regional Campus" },
        { name: "Kollam", href: "https://kol.chintvm.edu.in/", icon: MapPin, color: "bg-[#E6C96C]", desc: "Kollam District Campus" },
        { name: "Kunnumpuram", href: "https://kpm.chintvm.edu.in/", icon: Sparkles, color: "bg-[#25B899]", desc: "Kunnumpuram Campus" },
        { name: "Naruvamoodu", href: "https://nmd.chintvm.edu.in/", icon: Users, color: "bg-[#9A5CB8]", desc: "Naruvamoodu Regional Campus" },
        { name: "Vazhuthacaud", href: "https://vkd.chintvm.edu.in/", icon: Landmark, color: "bg-[#F06A42]", desc: "Vazhuthacaud City Campus" },
      ]
    },
    { name: "Mission", href: "https://chinmaya-mission-thiruvananthapuram.vercel.app/" },
    { name: "Downloads", href: "/downloads" },
    { name: "Tenders", href: "/tenders" },
    { name: "Careers", href: "/careers" },
    { name: "Contribution", href: "/contribution" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0E2A45] shadow-lg border-b border-[#F3CA55]/20">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.02]">
          <div className="relative h-14 aspect-[3.8/1] md:h-[66px]">
            <Image
              src="/images/logo.png"
              alt="Chinmaya Educational Trust Logo"
              fill
              sizes="(max-width: 768px) 220px, 280px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => {
            const isChildActive = link.dropdown?.some((sub) => sub.href === pathname);
            const isActive = link.href ? pathname === link.href : Boolean(isChildActive);

            return (
              <div key={link.name} className="relative group py-2">
                {link.href ? (
                  link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative font-heading text-base font-semibold tracking-wide flex items-center gap-1 py-1 transition-colors duration-300 ${isActive ? 'text-saffron' : 'text-white hover:text-saffron'} 
                        after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-saffron after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100
                        ${isActive ? 'after:scale-x-100' : ''}
                      `}
                    >
                      {link.name}
                      {link.dropdown && <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative font-heading text-base font-semibold tracking-wide flex items-center gap-1 py-1 transition-colors duration-300 ${isActive ? 'text-saffron' : 'text-white hover:text-saffron'} 
                        after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-saffron after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100
                        ${isActive ? 'after:scale-x-100' : ''}
                      `}
                    >
                      {link.name}
                      {link.dropdown && <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />}
                    </Link>
                  )
                ) : (
                  <button
                    type="button"
                    className={`relative font-heading text-base font-semibold tracking-wide flex items-center gap-1 py-1 transition-colors duration-300 cursor-pointer ${isActive ? 'text-saffron' : 'text-white hover:text-saffron'} 
                      after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-saffron after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100
                      ${isActive ? 'after:scale-x-100' : ''}
                    `}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />}
                  </button>
                )}

                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                    <div className="bg-white shadow-2xl border border-slate/10 rounded-2xl p-4 relative min-w-[320px]">
                      {/* Tiny arrow pointing up */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-slate/10 rotate-45"></div>

                      <div className={`relative z-10 grid gap-1 ${link.dropdown.length > 3 ? 'grid-cols-2 min-w-140' : 'grid-cols-1'}`}>
                        {link.dropdown.map((sublink) => {
                          const isExternal = sublink.href.startsWith('http');
                          const content = (
                            <>
                              {sublink.icon && (
                                <div className={`shrink-0 w-12 h-12 rounded-[10px] flex items-center justify-center text-white shadow-sm ${sublink.color || 'bg-navy'}`}>
                                  <sublink.icon className="w-6 h-6" />
                                </div>
                              )}
                              <div>
                                <div className="font-heading font-bold text-navy text-sm group-hover/sub:text-terracotta transition-colors">{sublink.name}</div>
                                {sublink.desc && <div className="text-xs text-slate-500 mt-0.5">{sublink.desc}</div>}
                              </div>
                            </>
                          );

                          return isExternal ? (
                            <a
                              key={sublink.name}
                              href={sublink.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/sub"
                            >
                              {content}
                            </a>
                          ) : (
                            <Link
                              key={sublink.name}
                              href={sublink.href}
                              className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/sub"
                            >
                              {content}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="xl:hidden p-2 text-white hover:text-saffron transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-ivory border-b border-slate/20 shadow-lg px-4 py-6 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                {link.href ? (
                  link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-xl font-medium text-navy hover:text-terracotta transition-colors py-2 border-b border-slate/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-heading text-xl font-medium text-navy hover:text-terracotta transition-colors py-2 border-b border-slate/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                ) : (
                  <div className="font-heading text-xl font-bold text-navy py-2 border-b border-slate/10 flex items-center justify-between">
                    <span>{link.name}</span>
                    {link.dropdown && <ChevronDown className="w-5 h-5 text-slate-500" />}
                  </div>
                )}
                {link.dropdown && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    {link.dropdown.map((sublink) => {
                      const isExternal = sublink.href.startsWith('http');
                      return isExternal ? (
                        <a
                          key={sublink.name}
                          href={sublink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-heading text-lg font-semibold text-slate-600 hover:text-saffron py-2 pl-4 border-l-2 border-transparent hover:border-saffron transition-all"
                        >
                          {sublink.name}
                        </a>
                      ) : (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="font-heading text-lg font-semibold text-slate-600 hover:text-saffron py-2 pl-4 border-l-2 border-transparent hover:border-saffron transition-all"
                        >
                          {sublink.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
