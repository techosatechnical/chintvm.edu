"use client";

import { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import { 
  Heart, 
  GraduationCap, 
  Building2, 
  Landmark, 
  ShieldCheck, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  Quote, 
  FileCheck,
  ArrowRight,
  HandHeart
} from "lucide-react";

export default function ContributionPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const INITIATIVES = [
    {
      icon: GraduationCap,
      title: "Student Scholarships & Fee Grants",
      desc: "Empowering deserving students from economically vulnerable backgrounds with quality, value-based education across all 6 Vidyalayas.",
      tag: "Education for All"
    },
    {
      icon: Building2,
      title: "STEM Labs & Smart Infrastructure",
      desc: "Modernizing classrooms with digital interactive panels, AI-ready robotics laboratories, and expanded libraries.",
      tag: "Campus Innovation"
    },
    {
      icon: HandHeart,
      title: "Sree Sankara Balasramam & Seva",
      desc: "Providing safe shelter, nutritious food, healthcare, and educational mentorship to underprivileged children.",
      tag: "Child Welfare"
    },
    {
      icon: Landmark,
      title: "Heritage Temple Preservation",
      desc: "Safeguarding ancient Kerala spiritual architecture, daily nithya poojas, and cultural rituals at Govindamangalam Mahavishnu Temple.",
      tag: "Sacred Heritage"
    }
  ];

  const BANK_DETAILS = {
    accountName: "Chinmaya Educational Cultural and Charitable Trust",
    bankName: "State Bank of India (SBI)",
    branch: "Vazhuthacaud Branch, Thiruvananthapuram",
    accountNumber: "30588219456",
    ifscCode: "SBIN0070030",
    pan: "AAATC1234F",
    taxExemption: "Eligible for Tax Exemption under Section 80G of the Income Tax Act"
  };

  return (
    <>
      <PageHeader
        title="Contribution"
        description="Support our educational, cultural, and philanthropic initiatives through selfless service."
        bannerImage="/Contribution banner.png"
      />

      <div className="bg-[#F9F6F7] min-h-screen py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#FFE8D6] text-[#FF971D] text-xs font-bold tracking-widest uppercase rounded-full border border-[#FF971D]/20">
              Seva &amp; Giving
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight">
              Empower Generations Through Your Generosity
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Every contribution directly fuels educational opportunities for young learners, 
              preserves ancient spiritual sanctuaries, and provides compassionate care to those in need.
            </p>
          </div>

          {/* Inspirational Gurudev Quote */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#FFE8D6] via-[#F9F6F7] to-[#FFE8D6] text-slate-900 border border-[#FF971D]/30 rounded-3xl p-8 sm:p-12 mb-16 shadow-xl relative overflow-hidden">
            <Quote className="w-16 h-16 text-[#FF971D] opacity-20 absolute top-6 right-6" />
            <div className="relative z-10 space-y-4 text-center sm:text-left">
              <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed text-slate-900">
                &ldquo;What you have is all His Gift to you. What you do with what you have is your Gift to Him.&rdquo;
              </blockquote>
              <p className="font-heading font-bold text-[#FF971D] tracking-widest uppercase text-sm">
                &mdash; Pujya Gurudev Swami Chinmayananda
              </p>
            </div>
          </div>

          {/* Four Pillars of Support */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                Where Your Contribution Makes an Impact
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Choose to support any of our focused initiatives or donate towards the general charitable fund.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {INITIATIVES.map((init, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#FF971D]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FFE8D6] text-[#FF971D] flex items-center justify-center font-bold">
                      <init.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF971D] bg-[#FFE8D6]/60 px-2.5 py-1 rounded-full inline-block">
                      {init.tag}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-navy leading-snug">
                      {init.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {init.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Bank Details Section */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-lg mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF971D]">
                  Official Banking Details
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy mt-1">
                  Direct Bank Transfer (NEFT / RTGS / IMPS)
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200 shrink-0">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>Verified Trust Account</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Account Name */}
              <div className="md:col-span-2 p-4 rounded-xl bg-[#F9F6F7] border border-slate-200/60 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Account Holder Name</div>
                  <div className="text-sm sm:text-base font-bold text-navy mt-0.5">{BANK_DETAILS.accountName}</div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(BANK_DETAILS.accountName, "accName")}
                  className="p-2 text-slate-500 hover:text-[#FF971D] hover:bg-[#FFE8D6] rounded-lg transition-colors cursor-pointer"
                  title="Copy Name"
                >
                  {copiedField === "accName" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Bank Name */}
              <div className="p-4 rounded-xl bg-[#F9F6F7] border border-slate-200/60">
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Bank Name & Branch</div>
                <div className="text-sm font-bold text-navy mt-0.5">{BANK_DETAILS.bankName}</div>
                <div className="text-xs text-slate-600 mt-0.5">{BANK_DETAILS.branch}</div>
              </div>

              {/* Account Number */}
              <div className="p-4 rounded-xl bg-[#F9F6F7] border border-slate-200/60 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Account Number</div>
                  <div className="text-base sm:text-lg font-mono font-bold text-navy mt-0.5">{BANK_DETAILS.accountNumber}</div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(BANK_DETAILS.accountNumber, "accNo")}
                  className="p-2 text-slate-500 hover:text-[#FF971D] hover:bg-[#FFE8D6] rounded-lg transition-colors cursor-pointer"
                  title="Copy Account Number"
                >
                  {copiedField === "accNo" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* IFSC Code */}
              <div className="p-4 rounded-xl bg-[#F9F6F7] border border-slate-200/60 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">IFSC Code</div>
                  <div className="text-base sm:text-lg font-mono font-bold text-[#FF971D] mt-0.5">{BANK_DETAILS.ifscCode}</div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(BANK_DETAILS.ifscCode, "ifsc")}
                  className="p-2 text-slate-500 hover:text-[#FF971D] hover:bg-[#FFE8D6] rounded-lg transition-colors cursor-pointer"
                  title="Copy IFSC Code"
                >
                  {copiedField === "ifsc" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Tax Exemption Status */}
              <div className="p-4 rounded-xl bg-[#FFE8D6]/60 border border-[#FF971D]/30 flex items-center gap-3">
                <FileCheck className="w-6 h-6 text-[#FF971D] shrink-0" />
                <div className="text-xs text-slate-700 leading-snug">
                  <strong>80G Tax Benefit:</strong> Donations are exempt under 80G of the Income Tax Act. Official receipts will be dispatched upon receipt of transfer details.
                </div>
              </div>
            </div>

            {/* Receipt Dispatch Instructions */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-600 max-w-md">
                Please email your transfer transaction ID (UTR), donor name, PAN number, and postal address to <strong>chintvm@gmail.com</strong> to receive your 80G receipt.
              </div>
              <a
                href="mailto:chintvm@gmail.com?subject=Donation%20Receipt%20Request"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF971D] hover:bg-[#e68412] text-white font-bold rounded-xl text-sm transition-all shadow-md shrink-0"
              >
                <Mail className="w-4 h-4" />
                <span>Notify Transfer</span>
              </a>
            </div>
          </div>

          {/* Contact Assistance Footer Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="font-heading font-bold text-lg text-navy">Need Assistance or Planning an Endowment?</h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Reach out to our Chief Sevak or the Administrative Office for corpus funds and major donor agreements.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:04712451533"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-navy font-bold text-xs hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF971D]" />
                <span>0471 2451533</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF971D] hover:bg-[#e68412] text-white font-bold text-xs transition-colors shadow-xs"
              >
                <span>Contact Office</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}