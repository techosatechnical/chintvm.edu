"use client";

import { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  GraduationCap, 
  Sparkles, 
  Mail, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  Award
} from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  category: "Teaching" | "Administrative" | "Higher Education";
  campus: string;
  type: string;
  experience: string;
  qualification: string;
  deadline: string;
  status: "Active" | "Urgent";
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: "JOB-2026-01",
    title: "Post Graduate Teacher (PGT) - Physics & Mathematics",
    department: "Senior Secondary Academic Faculty",
    category: "Teaching",
    campus: "Chinmaya Vidyalaya, Vazhuthacaud",
    type: "Full-Time",
    experience: "3+ years in CBSE curriculum",
    qualification: "M.Sc. in Physics/Maths with B.Ed. (CTET preferred)",
    deadline: "Rolling Admissions",
    status: "Urgent"
  },
  {
    id: "JOB-2026-02",
    title: "Trained Graduate Teacher (TGT) - English & Social Sciences",
    department: "Secondary School Faculty",
    category: "Teaching",
    campus: "Chinmaya Vidyalaya, Attukal & Naruvamoodu",
    type: "Full-Time",
    experience: "2+ years teaching experience",
    qualification: "M.A. / B.A. in relevant subject with B.Ed.",
    deadline: "End of Month",
    status: "Active"
  },
  {
    id: "JOB-2026-03",
    title: "Primary & Pre-Primary Educators (PRT / Montessori)",
    department: "Early Childhood & Foundational Stage",
    category: "Teaching",
    campus: "Chinmaya Vidyalaya, Kunnumpuram & Kattakada",
    type: "Full-Time",
    experience: "1+ years or fresher with strong communication",
    qualification: "Graduate with NTT / PPTTC / D.El.Ed. or B.Ed.",
    deadline: "Open",
    status: "Active"
  },
  {
    id: "JOB-2026-04",
    title: "Research Scientist / Academic Associate",
    department: "Chinmaya Shodh Sansthan (CSRS)",
    category: "Higher Education",
    campus: "Chinmaya Educational Trust Headquarters, Trivandrum",
    type: "Full-Time / Research Grant",
    experience: "Demonstrated research papers & publications",
    qualification: "Ph.D. or Master's in Indic Studies, Sanskrit, or allied sciences",
    deadline: "Special Recruitment",
    status: "Urgent"
  },
  {
    id: "JOB-2026-05",
    title: "Administrative Officer & Accounts Coordinator",
    department: "Trust Central Administration",
    category: "Administrative",
    campus: "Central Trust Office, Manacaud / Vazhuthacaud",
    type: "Full-Time",
    experience: "3+ years in educational administration / Tally ERP",
    qualification: "M.Com / B.Com / MBA with accounting proficiency",
    deadline: "Immediate",
    status: "Active"
  }
];

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeJob, setActiveJob] = useState<JobOpening | null>(null);

  const categories = ["All", "Teaching", "Administrative", "Higher Education"];

  const filteredJobs = selectedCategory === "All"
    ? JOB_OPENINGS
    : JOB_OPENINGS.filter((j) => j.category === selectedCategory);

  return (
    <>
      <PageHeader
        title="Careers"
        description="Join our mission to empower future generations through value-based, holistic education."
        bannerImage="/Careers banner.png"
      />

      <div className="bg-[#F9F6F7] min-h-screen py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Introductory Mission Statement */}
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#FFE8D6] text-[#FF971D] text-xs font-bold tracking-widest uppercase rounded-full border border-[#FF971D]/20">
              Work With Us
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight">
              Shape Tomorrow&apos;s Leaders with Chinmaya
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              At Chinmaya Vidyalayas and the CEC Trust, education is a sacred vocation. 
              We offer educators and professionals an inspiring, value-rich environment fostering continuous growth, 
              innovative pedagogy, and dedicated mentorship.
            </p>
          </div>

          {/* Pillars of Working at Chinmaya */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: BookOpen,
                title: "Holistic Vision",
                desc: "Teach and mentor guided by the time-tested Chinmaya Vision Programme (CVP)."
              },
              {
                icon: Award,
                title: "Professional Growth",
                desc: "Regular workshops, CBSE teacher training, and leadership advancement programs."
              },
              {
                icon: Sparkles,
                title: "Value-Rich Culture",
                desc: "A harmonious workplace rooted in mutual respect, ethical ethics, and inner peace."
              },
              {
                icon: GraduationCap,
                title: "State-of-the-Art Labs",
                desc: "Modern smart classrooms, STEM robotics labs, and comprehensive sports grounds."
              }
            ].map((pillar, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFE8D6] text-[#FF971D] flex items-center justify-center mb-4 font-bold">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{pillar.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#FF971D] text-white shadow-md shadow-[#FF971D]/25 scale-105"
                    : "bg-white text-slate-600 hover:text-navy hover:bg-[#FFE8D6]/40 border border-slate-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Job Listings Grid */}
          <div className="max-w-5xl mx-auto space-y-5 mb-16">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:border-[#FF971D]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3 grow">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FFE8D6] text-[#FF971D]">
                      {job.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">
                      {job.type}
                    </span>
                    {job.status === "Urgent" && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-600 animate-pulse">
                        Urgent Requirement
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy group-hover:text-[#FF971D] transition-colors">
                    {job.title}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#FF971D] shrink-0" />
                      <span>{job.campus}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#FF971D] shrink-0" />
                      <span>{job.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#FF971D] shrink-0" />
                      <span>Experience: {job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#FF971D] shrink-0" />
                      <span>Deadline: {job.deadline}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center md:flex-col justify-end gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <a
                    href="mailto:chintvm@gmail.com?subject=Job%20Application%20for%20Chinmaya%20Educational%20Trust"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF971D] hover:bg-[#e68412] text-white font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
                  >
                    <span>Apply via Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* How to Apply Box */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#FFE8D6] via-[#F9F6F7] to-[#FFE8D6] text-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-[#FF971D]/30 relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#FF971D] border border-[#FF971D]/20 shadow-xs">
                <FileText className="w-4 h-4" />
                <span>Application Instructions</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy">
                How to Submit Your Application
              </h2>

              <div className="grid sm:grid-cols-3 gap-6 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF971D] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    Send your updated resume along with copies of academic certificates.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF971D] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    Mention the <strong>Position & Preferred Campus</strong> clearly in the subject line.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF971D] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    Shortlisted candidates will be invited for personal interview and demonstration classes.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Official Resume Inbox</span>
                  <div className="text-lg font-bold text-[#FF971D]">chintvm@gmail.com</div>
                </div>
                <a
                  href="mailto:chintvm@gmail.com?subject=Chinmaya%20Career%20Application"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#FF971D] hover:bg-[#e68412] text-white font-bold text-sm transition-colors shadow-md"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>Send Resume Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}