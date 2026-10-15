import PageHeader from "@/components/shared/PageHeader";
import { Quote, Heart, Compass, Flag, Globe, CheckCircle2 } from "lucide-react";

const PILLARS = [
  {
    icon: Heart,
    title: "Integrated Development",
    subtitle: "Physical, Mental, Intellectual & Spiritual",
    desc: "Enables children to discover and blossom with their inner potential, instilling balanced emotional maturity, intellectual clarity, and physical vitality through yoga and holistic disciplines.",
  },
  {
    icon: Compass,
    title: "Indian Culture",
    subtitle: "Heritage, Reverence & Values",
    desc: "Inculcates deep respect for cultural roots, spiritual heritage, and ethical traditions through daily chanting, celebrations of festivals, and life philosophies of great saints.",
  },
  {
    icon: Flag,
    title: "Patriotism",
    subtitle: "Civic Duty & National Pride",
    desc: "Nurtures proud citizens aware of national history and selfless contribution, inspiring responsible youth dedicated to society and nation-building.",
  },
  {
    icon: Globe,
    title: "Universal Outlook",
    subtitle: "Vasudhaiva Kutumbakam",
    desc: "Broadens horizons to view the world as one interconnected family, encouraging environmental stewardship, universal brotherhood, and harmony across communities.",
  },
];

export default function VisionPage() {
  return (
    <>
      <PageHeader 
        title="Chinmaya Vision" 
        description="Our timeless philosophical foundation for value-based education and holistic character transformation." 
      />

      <div className="bg-[#F9F6F7] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Main Gurudev Quote Card */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#FFE8D6] via-[#F9F6F7] to-[#FFE8D6] text-slate-900 border border-[#FF971D]/30 rounded-3xl p-8 sm:p-12 mb-16 shadow-xl relative overflow-hidden">
            <Quote className="w-16 h-16 text-[#FF971D] opacity-20 absolute top-6 right-6" />
            <div className="relative z-10 space-y-4 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF971D] bg-white px-3 py-1 rounded-full inline-block border border-[#FF971D]/20 shadow-xs">
                Guiding Motto
              </span>
              <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed text-navy">
                &ldquo;Yahaiva phalam tahaiva karma &ndash; True education is that which prepares one to face the challenges of life, and not merely to make a living.&rdquo;
              </blockquote>
              <p className="font-heading font-bold text-[#FF971D] tracking-widest uppercase text-sm">
                &mdash; Pujya Gurudev Swami Chinmayananda
              </p>
            </div>
          </div>

          {/* Chinmaya Vision Programme (CVP) Overview */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight">
              The Four Pillars of <span className="text-[#FF971D]">CVP</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              The Chinmaya Vision Programme (CVP) is a comprehensive curriculum framework woven seamlessly into 
              daily school life across all Chinmaya Vidyalayas, nurturing head, heart, and hands.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-[#FF971D]/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFE8D6] text-[#FF971D] flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
                    <pillar.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF971D]">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-navy mt-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                      {pillar.subtitle}
                    </p>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-2">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Vision in Action Summary Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-lg text-center max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-4">
              To Give Maximum Happiness to Maximum People for Maximum Time
            </h3>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Every initiative of the Chinmaya Educational, Cultural and Charitable Trust is guided by this 
              core statement, fostering generations of disciplined, empathetic, and culturally grounded global leaders.
            </p>
            <div className="inline-flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold text-slate-700">
              <span className="inline-flex items-center gap-2 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#FF971D]" />
                Value-Based Academics
              </span>
              <span className="inline-flex items-center gap-2 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#FF971D]" />
                Spiritual Mindfulness
              </span>
              <span className="inline-flex items-center gap-2 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#FF971D]" />
                Nation-Building Character
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
