"use client";

import { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import { 
  FileSpreadsheet, 
  Download, 
  Calendar, 
  MapPin, 
  Clock, 
  FileText, 
  ShieldAlert, 
  Building, 
  HelpCircle,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

interface TenderItem {
  id: string;
  refNo: string;
  title: string;
  category: string;
  campus: string;
  publishDate: string;
  submissionDeadline: string;
  openingDate: string;
  status: "Active" | "Closed" | "Evaluation";
  docSize: string;
}

const TENDERS: TenderItem[] = [
  {
    id: "TND-2026-01",
    refNo: "CECT/TVM/INFRA/2026/04",
    title: "Construction & Civil Renovation of Science Laboratory Wing",
    category: "Civil Works & Infrastructure",
    campus: "Chinmaya Vidyalaya, Naruvamoodu",
    publishDate: "October 01, 2026",
    submissionDeadline: "November 05, 2026, 03:00 PM",
    openingDate: "November 06, 2026, 11:00 AM",
    status: "Active",
    docSize: "2.4 MB"
  },
  {
    id: "TND-2026-02",
    refNo: "CECT/TVM/ICT/2026/02",
    title: "Supply, Installation & Maintenance of Smart Interactive Flat Panels (IFPs)",
    category: "IT & Educational Technology",
    campus: "Across All 6 Chinmaya Vidyalayas (Trivandrum & Kollam)",
    publishDate: "September 20, 2026",
    submissionDeadline: "October 28, 2026, 04:00 PM",
    openingDate: "October 29, 2026, 02:00 PM",
    status: "Active",
    docSize: "1.8 MB"
  },
  {
    id: "TND-2026-03",
    refNo: "CECT/TVM/SOLAR/2026/01",
    title: "Rooftop Solar PV Grid-Interactive System Installation (50 kWp)",
    category: "Renewable Energy & Electricals",
    campus: "Chinmaya Vidyalaya, Vazhuthacaud",
    publishDate: "August 15, 2026",
    submissionDeadline: "September 15, 2026, 03:00 PM",
    openingDate: "September 16, 2026, 11:30 AM",
    status: "Closed",
    docSize: "3.1 MB"
  },
  {
    id: "TND-2026-04",
    refNo: "CECT/TVM/BUS/2026/01",
    title: "Procurement of Two 34-Seater School Buses with GPS & CCTV",
    category: "Transport & Fleet",
    campus: "Chinmaya Vidyalaya, Kattakada & Kollam",
    publishDate: "July 10, 2026",
    submissionDeadline: "August 10, 2026, 02:00 PM",
    openingDate: "August 11, 2026, 10:00 AM",
    status: "Closed",
    docSize: "1.2 MB"
  }
];

export default function TendersPage() {
  const [filter, setFilter] = useState<"All" | "Active" | "Closed">("Active");

  const filteredTenders = TENDERS.filter((t) => {
    if (filter === "All") return true;
    return t.status === filter;
  });

  return (
    <>
      <PageHeader
        title="Tenders"
        description="Official procurement notices, bids, and infrastructure tenders for Chinmaya Educational, Cultural and Charitable Trust."
        bannerImage="/Tenders banner.png"
      />

      <div className="bg-[#F9F6F7] min-h-screen py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#FFE8D6] text-[#FF971D] text-xs font-bold tracking-widest uppercase rounded-full border border-[#FF971D]/20">
              Procurement &amp; Contracts
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight">
              Tender Notices &amp; E-Procurement
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              We uphold transparent, ethical, and competitive bidding processes for all civil construction, 
              campus ICT equipment, and administrative supplies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex justify-center gap-3 mb-10">
            {(["Active", "All", "Closed"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  filter === tab
                    ? "bg-[#FF971D] text-white shadow-md shadow-[#FF971D]/25 scale-105"
                    : "bg-white text-slate-600 hover:text-navy hover:bg-[#FFE8D6]/40 border border-slate-200/80"
                }`}
              >
                {tab === "Active" ? "Active Notices" : tab === "Closed" ? "Archived / Past" : "All Tenders"}
              </button>
            ))}
          </div>

          {/* Tenders Grid */}
          <div className="max-w-5xl mx-auto space-y-6 mb-16">
            {filteredTenders.length > 0 ? (
              filteredTenders.map((tender) => (
                <div
                  key={tender.id}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:border-[#FF971D]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-3 grow">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                        {tender.refNo}
                      </span>
                      <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FFE8D6] text-[#FF971D]">
                        {tender.category}
                      </span>
                      {tender.status === "Active" ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700">
                          Active Bid
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500">
                          Closed
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy leading-snug">
                      {tender.title}
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#FF971D] shrink-0" />
                        <span>{tender.campus}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#FF971D] shrink-0" />
                        <span>Published: {tender.publishDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-red-700">
                        <Clock className="w-4 h-4 text-red-600 shrink-0" />
                        <span>Deadline: {tender.submissionDeadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#FF971D] shrink-0" />
                        <span>Bid Opening: {tender.openingDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center md:flex-col justify-end gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <a
                      href="#"
                      download
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF971D] hover:bg-[#e68412] text-white font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download RFP ({tender.docSize})</span>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80">
                <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="font-heading text-lg font-bold text-navy">No active tenders at this time</h4>
                <p className="text-slate-500 text-sm mt-1">Please check back periodically for new procurement announcements.</p>
              </div>
            )}
          </div>

          {/* Submission Guidelines Box */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md mb-12">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
              Submission Guidelines for Bidders
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FF971D] shrink-0 mt-0.5" />
                <span>
                  Bids must be submitted in sealed envelopes clearly super-scribed with the <strong>Tender Reference Number</strong> and <strong>Name of Work</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FF971D] shrink-0 mt-0.5" />
                <span>
                  All bids must be accompanied by the prescribed EMD (Earnest Money Deposit) via Demand Draft favoring <strong>Chinmaya Educational Cultural and Charitable Trust</strong>, payable at Thiruvananthapuram.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FF971D] shrink-0 mt-0.5" />
                <span>
                  Late or incomplete submissions after the specified deadline will be summarily rejected.
                </span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Tender Inquiries</span>
                <div className="text-sm font-bold text-navy mt-0.5">Administrative Head Quarters: 0471 2451533 / 2452033</div>
              </div>
              <a
                href="/contact"
                className="px-6 py-2.5 bg-[#FF971D] hover:bg-[#e68412] text-white font-bold rounded-xl text-xs transition-colors shadow-xs"
              >
                Contact Procurement Officer
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}