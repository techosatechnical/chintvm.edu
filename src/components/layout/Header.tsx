"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Users, Landmark, GraduationCap, MapPin, Sparkles, BookOpen, HeartHandshake } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const navLinks: Array<{
    name: string;
    href?: string;
    isCta?: boolean;
    dropdown?: Array<{
      name: string;
      href: string;
      icon: any;
      desc?: string;
    }>;
  }> = [
    { name: "Home", href: "/" },
    {
      name: "CEC Trust",
      dropdown: [
        { name: "Board of Trustees", href: "/trustees", icon: Users, desc: "Meet our leadership team" },
        { name: "Temples and Shrines", href: "/temples", icon: Landmark, desc: "Explore our spiritual centers" }
      ]
    },
    {
      name: "Vidyalayas",
      href: "/vidyalayas",
      dropdown: [
        { name: "Attukal", href: "https://att.chintvm.edu.in/", icon: GraduationCap, desc: "Trivandrum City Campus" },
        { name: "Kattakada", href: "https://kda.chintvm.edu.in/", icon: BookOpen, desc: "Kattakada Regional Campus" },
        { name: "Kollam", href: "https://kol.chintvm.edu.in/", icon: MapPin, desc: "Kollam District Campus" },
        { name: "Kunnumpuram", href: "https://kpm.chintvm.edu.in/", icon: Sparkles, desc: "Kunnumpuram Campus" },
        { name: "Naruvamoodu", href: "https://nmd.chintvm.edu.in/", icon: Users, desc: "Naruvamoodu Regional Campus" },
        { name: "Vazhuthacaud", href: "https://vkd.chintvm.edu.in/", icon: Landmark, desc: "Vazhuthacaud City Campus" },
      ]
    },
    { name: "Mission", href: "https://chinmaya-mission-thiruvananthapuram.vercel.app/" },
    { name: "Downloads", href: "/downloads" },
    { name: "Tenders", href: "/tenders" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Contribute", href: "/contribution", isCta: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-white via-[#FFFBF7] to-[#FFE8D6]/35 backdrop-blur-md shadow-xs border-b border-[#FFE8D6]">
      {/* Sleek Top Brand Accent Gradient Bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#FF971D] via-[#FFE8D6] to-[#FF971D]" />

      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.02]">
          <div className="relative h-14 aspect-[4/1] md:h-[66px]">
            <Image
              src="/images/CV ORANGE.png"
              alt="Chinmaya Educational Trust Logo"
              fill
              sizes="(max-width: 768px) 240px, 300px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
          {navLinks.map((link) => {
            const isChildActive = link.dropdown?.some((sub) => sub.href === pathname);
            const isActive = link.href ? pathname === link.href : Boolean(isChildActive);

            if (link.isCta) {
              return (
                <Link
                  key={link.name}
                  href={link.href!}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF971D] to-[#FF8500] hover:from-[#e68412] hover:to-[#d97300] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-[#FF971D]/25 transition-all duration-300 hover:scale-105 active:scale-95 ml-3 shrink-0"
                >
                  <HeartHandshake className="w-4 h-4 text-white" />
                  <span>{link.name}</span>
                </Link>
              );
            }

            return (
              <div key={link.name} className="relative group py-2">
                {link.href ? (
                  link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative font-heading text-sm xl:text-[15px] font-semibold tracking-wide flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'text-[#FF971D] bg-[#FFE8D6]/60 font-bold shadow-2xs' 
                          : 'text-slate-800 hover:text-[#FF971D] hover:bg-[#FFE8D6]/35'
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.dropdown && <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-70 group-hover:opacity-100" />}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative font-heading text-sm xl:text-[15px] font-semibold tracking-wide flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'text-[#FF971D] bg-[#FFE8D6]/60 font-bold shadow-2xs' 
                          : 'text-slate-800 hover:text-[#FF971D] hover:bg-[#FFE8D6]/35'
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.dropdown && <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-70 group-hover:opacity-100" />}
                    </Link>
                  )
                ) : (
                  <button
                    type="button"
                    className={`relative font-heading text-sm xl:text-[15px] font-semibold tracking-wide flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'text-[#FF971D] bg-[#FFE8D6]/60 font-bold shadow-2xs' 
                        : 'text-slate-800 hover:text-[#FF971D] hover:bg-[#FFE8D6]/35'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.dropdown && <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-70 group-hover:opacity-100" />}
                  </button>
                )}

                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                    <div className="bg-white shadow-2xl border border-[#FFE8D6] rounded-2xl p-4 relative min-w-[320px]">
                      {/* Tiny arrow pointing up */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-[#FFE8D6] rotate-45"></div>

                      <div className={`relative z-10 grid gap-1 ${link.dropdown.length > 3 ? 'grid-cols-2 min-w-140' : 'grid-cols-1'}`}>
                        {link.dropdown.map((sublink) => {
                          const isExternal = sublink.href.startsWith('http');
                          const content = (
                            <>
                              {sublink.icon && (
                                <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-[#FFE8D6] text-[#FF971D] border border-[#FF971D]/25 shadow-xs group-hover/sub:bg-[#FF971D] group-hover/sub:text-white transition-all duration-200">
                                  <sublink.icon className="w-5 h-5" />
                                </div>
                              )}
                              <div>
                                <div className="font-heading font-bold text-slate-800 text-sm group-hover/sub:text-[#FF971D] transition-colors">{sublink.name}</div>
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
                              className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#FFE8D6]/30 transition-colors group/sub"
                            >
                              {content}
                            </a>
                          ) : (
                            <Link
                              key={sublink.name}
                              href={sublink.href}
                              className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#FFE8D6]/30 transition-colors group/sub"
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
          className="xl:hidden p-2 text-slate-800 hover:text-saffron transition-colors cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-gradient-to-b from-white via-white to-[#FFF9F5] border-b border-[#FFE8D6] shadow-2xl px-5 py-6 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              if (link.isCta) {
                return (
                  <div key={link.name} className="pt-4 mt-2 border-t border-slate-100">
                    <Link
                      href={link.href!}
                      className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#FF971D] to-[#FF8500] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all text-center uppercase tracking-wider"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <HeartHandshake className="w-4 h-4 text-white" />
                      <span>Support Our Mission &bull; {link.name}</span>
                    </Link>
                  </div>
                );
              }

              const hasDropdown = Boolean(link.dropdown && link.dropdown.length > 0);
              const isDropdownOpen = Boolean(openMobileDropdowns[link.name]);

              return (
                <div key={link.name} className="flex flex-col">
                  {hasDropdown ? (
                    <div className="py-2.5 border-b border-slate-100 flex items-center justify-between gap-2">
                      {link.href ? (
                        <Link
                          href={link.href}
                          className={`font-heading text-lg font-semibold transition-colors flex-1 ${
                            pathname === link.href ? 'text-saffron' : 'text-slate-800 hover:text-saffron'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(link.name)}
                          className="font-heading text-lg font-semibold text-slate-800 hover:text-saffron transition-colors text-left flex-1 cursor-pointer"
                        >
                          {link.name}
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(link.name)}
                        className="p-2 text-slate-600 hover:text-saffron transition-colors cursor-pointer rounded-lg hover:bg-[#FFE8D6]/40"
                        aria-label={`Toggle ${link.name} menu`}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isDropdownOpen ? 'rotate-180 text-saffron' : ''
                          }`}
                        />
                      </button>
                    </div>
                  ) : link.href ? (
                    link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading text-lg font-semibold text-slate-800 hover:text-saffron transition-colors py-2.5 border-b border-slate-100 flex items-center justify-between"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{link.name}</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={`font-heading text-lg font-semibold transition-colors py-2.5 border-b border-slate-100 flex items-center justify-between ${
                          pathname === link.href ? 'text-saffron' : 'text-slate-800 hover:text-saffron'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{link.name}</span>
                      </Link>
                    )
                  ) : null}

                  {/* Dropdown Items */}
                  {hasDropdown && isDropdownOpen && (
                    <div className="pl-3 pr-2 py-2.5 my-1.5 flex flex-col gap-1.5 bg-[#F9F6F7] rounded-xl border border-[#FFE8D6]">
                      {link.dropdown?.map((sublink) => {
                        const isExternal = sublink.href.startsWith("http");
                        const IconComponent = sublink.icon;

                        const content = (
                          <>
                            {IconComponent && (
                              <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-[#FFE8D6] text-[#FF971D] border border-[#FF971D]/25 shadow-xs">
                                <IconComponent className="w-4 h-4" />
                              </div>
                            )}
                            <div className="flex flex-col">
                              <span className="font-heading text-sm font-semibold text-slate-800 group-hover:text-saffron transition-colors">
                                {sublink.name}
                              </span>
                              {sublink.desc && (
                                <span className="text-[11px] text-slate-500">
                                  {sublink.desc}
                                </span>
                              )}
                            </div>
                          </>
                        );

                        return isExternal ? (
                          <a
                            key={sublink.name}
                            href={sublink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#FFE8D6]/50 transition-colors group"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {content}
                          </a>
                        ) : (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className={`flex items-center gap-3 p-2 rounded-lg hover:bg-[#FFE8D6]/50 transition-colors group ${
                              pathname === sublink.href ? "bg-[#FFE8D6] text-saffron" : ""
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {content}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
