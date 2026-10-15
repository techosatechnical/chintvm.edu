"use client";

import { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import { 
  FileText, 
  Download, 
  Search, 
  Calendar, 
  ShieldCheck, 
  BookOpen, 
  FileCheck, 
  HelpCircle,
  ExternalLink
} from "lucide-react";

interface DownloadItem {
  id: string;
  title: string;
  category: "Admissions & Forms" | "Academic & Circulars" | "Trust Policies" | "Annual Reports";
  description: string;
  fileType: string;
  fileSize: string;
  updatedDate: string;
  url: string;
}

const DOWNLOAD_ITEMS: DownloadItem[] = [
  {
    id: "DL-01",
    title: "Common Admission Application Form (2026-27)",
    category: "Admissions & Forms",
    description: "Prescribed registration form for admissions across Chinmaya Vidyalayas in Trivandrum and Kollam.",
    fileType: "PDF",
    fileSize: "1.2 MB",
    updatedDate: "January 2026",
    url: "#"
  },
  {
    id: "DL-02",
    title: "Chinmaya Vision Programme (CVP) Manual",
    category: "Academic & Circulars",
    description: "Comprehensive guide to the 4 pillars of holistic value education implemented across all campuses.",
    fileType: "PDF",
    fileSize: "3.4 MB",
    updatedDate: "October 2025",
    url: "#"
  },
  {
    id: "DL-03",
    title: "Scholarship & Fee Concession Application Guidelines",
    category: "Admissions & Forms",
    description: "Criteria, financial eligibility, and forms for student educational assistance grants.",
    fileType: "PDF",
    fileSize: "850 KB",
    updatedDate: "November 2025",
    url: "#"
  },
  {
    id: "DL-04",
    title: "Annual Academic Calendar & Holiday Schedule (2026-27)",
    category: "Academic & Circulars",
    description: "Official schedule of term exams, cultural festivals, spiritual retreats, and holidays.",
    fileType: "PDF",
    fileSize: "620 KB",
    updatedDate: "February 2026",
    url: "#"
  },
  {
    id: "DL-05",
    title: "Trust Code of Conduct & Ethical Guidelines",
    category: "Trust Policies",
    description: "Guiding principles for faculty, administrative staff, student safety, and institutional governance.",
    fileType: "PDF",
    fileSize: "1.5 MB",
    updatedDate: "August 2025",
    url: "#"
  },
  {
    id: "DL-06",
    title: "Central Board & Trust Annual Report (2024-25)",
    category: "Annual Reports",
    description: "Audited activities, infrastructure developments, board resolutions, and campus milestones.",
    fileType: "PDF",
    fileSize: "4.8 MB",
    updatedDate: "July 2025",
    url: "#"
  },
  {
    id: "DL-07",
    title: "Transfer Certificate (TC) & Bonafide Request Format",
    category: "Admissions & Forms",
    description: "Standard application template for obtaining student transfer certificates and conduct records.",
    fileType: "PDF",
    fileSize: "420 KB",
    updatedDate: "Ongoing",
    url: "#"
  },
  {
    id: "DL-08",
    title: "Student Safety, POCSO & Anti-Bullying Protocol",
    category: "Trust Policies",
    description: "Statutory safety measures, internal complaints committee details, and child protection bylaws.",
    fileType: "PDF",
    fileSize: "980 KB",
    updatedDate: "September 2025",
    url: "#"
  }
];

export default function DownloadsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All", 
    "Admissions & Forms", 
    "Academic & Circulars", 
    "Trust Policies", 
    "Annual Reports"
  ];

  const filteredItems = DOWNLOAD_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHeader
        title="Downloads"
        description="Important institutional documents, application forms, academic circulars, and trust policies."
        bannerImage="/Downloads banner.png"
      />

      <div className="bg-[#F9F6F7] min-h-screen py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#FFE8D6] text-[#FF971D] text-xs font-bold tracking-widest uppercase rounded-full border border-[#FF971D]/20">
              Official Resources
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight">
              Documents &amp; Resource Center
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Access and download official forms, academic schedules, policy mandates, and reports issued by 
              the Chinmaya Educational, Cultural and Charitable Trust.
            </p>
          </div>

          {/* Search Bar & Filter Bar */}
          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search documents by title or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200/80 focus:border-[#FF971D] focus:ring-2 focus:ring-[#FF971D]/20 outline-none transition-all shadow-xs text-sm md:text-base text-slate-800"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-[#FF971D] text-white shadow-md shadow-[#FF971D]/25 scale-105"
                      : "bg-white text-slate-600 hover:text-navy hover:bg-[#FFE8D6]/40 border border-slate-200/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Download Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#FF971D]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FFE8D6] text-[#FF971D]">
                        {item.category}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60">
                        {item.fileType} &bull; {item.fileSize}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl text-navy group-hover:text-[#FF971D] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.updatedDate}</span>
                    </div>

                    <a
                      href={item.url}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF971D] hover:bg-[#e68412] text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs hover:shadow-md"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 py-16 text-center bg-white rounded-2xl border border-slate-200/80 p-8">
                <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="font-heading text-lg font-bold text-navy">No documents found</h4>
                <p className="text-slate-500 text-sm mt-1">Try refining your search terms or category filter.</p>
              </div>
            )}
          </div>

          {/* Need Additional Assistance */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF971D]">
                <HelpCircle className="w-4 h-4" />
                <span>Need an Official Document?</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy">
                Looking for Specific Circulars or Certificates?
              </h3>
              <p className="text-slate-600 text-sm max-w-lg">
                For older archive circulars, fee verification receipts, or custom institutional letters, please contact our administrative desk.
              </p>
            </div>
            <a
              href="/contact"
              className="px-7 py-3.5 bg-[#FF971D] hover:bg-[#e68412] text-white font-bold rounded-xl text-sm transition-colors shadow-md shrink-0"
            >
              Contact Trust Desk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}