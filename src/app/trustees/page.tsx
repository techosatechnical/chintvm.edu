import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import { 
  Users, 
  Sparkles, 
  Award 
} from "lucide-react";
import { 
  PRESIDENT, 
  CHIEF_SEVAK, 
  SPIRITUAL_PATRONS, 
  TRUSTEES 
} from "@/data/trusteesData";

export default function TrusteesPage() {
  return (
    <>
      <PageHeader
        title="Board of Trustees"
        description="The visionary leaders, spiritual mentors, and dedicated professionals guiding the Chinmaya Educational, Cultural and Charitable Trust."
      />

      {/* Leadership Overview & Philosophy */}
      <section className="py-16 md:py-20 bg-[#F9F6F7] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF971D]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFE8D6] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#FFE8D6] text-[#FF971D] border border-[#FF971D]/20">
              <Users className="w-3.5 h-3.5" />
              <span>Custodians of Vision</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight">
              Governing with Wisdom &amp; Compassion
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              The Chinmaya Educational, Cultural and Charitable Trust, Trivandrum coordinates six Chinmaya Vidyalayas, 
              ancient temple complexes, and philanthropic initiatives. Our Board of Trustees brings together spiritual masters, 
              academicians, legal counsels, and administrators dedicated to holistic human empowerment.
            </p>
          </div>

          {/* Key Executive Leadership: President & Chief Sevak */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* President */}
            <div className="group bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/80 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-[#FF971D]/50 bg-slate-100">
                <Image
                  src={PRESIDENT.img}
                  alt={PRESIDENT.name}
                  fill
                  sizes="180px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="flex flex-col justify-between text-center sm:text-left grow">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#FFE8D6] text-[#FF971D] mb-2">
                    {PRESIDENT.designation}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy leading-snug">
                    {PRESIDENT.name}
                  </h3>
                  <p className="text-xs font-bold text-[#FF971D] mt-1 uppercase tracking-wide">
                    Global Head &bull; Chinmaya Mission
                  </p>
                </div>
              </div>
            </div>

            {/* Chief Sevak */}
            <div className="group bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/80 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-[#FF971D]/50 bg-slate-100">
                <Image
                  src={CHIEF_SEVAK.img}
                  alt={CHIEF_SEVAK.name}
                  fill
                  sizes="180px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="flex flex-col justify-between text-center sm:text-left grow">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#FFE8D6] text-[#FF971D] mb-2">
                    {CHIEF_SEVAK.designation}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy leading-snug">
                    {CHIEF_SEVAK.name}
                  </h3>
                  <p className="text-xs font-bold text-navy/70 mt-1 uppercase tracking-wide">
                    Executive Administration &bull; CEC Trust
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Mentors Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#FFE8D6] text-[#FF971D] mb-3 border border-[#FF971D]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Spiritual Guidance</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy tracking-tight">
              Spiritual Mentors &amp; Acharyas
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SPIRITUAL_PATRONS.map((patron) => (
              <div
                key={patron.id}
                className="group bg-[#F9F6F7] hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#FF971D] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-5"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-300 bg-slate-100">
                  <Image
                    src={patron.img}
                    alt={patron.name}
                    fill
                    sizes="130px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF971D] block">
                    {patron.designation}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-navy mt-1">
                    {patron.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members of the Board of Trustees */}
      <section className="py-16 md:py-24 bg-[#F9F6F7] border-t border-slate-200/80">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#FFE8D6] text-[#FF971D] mb-3 border border-[#FF971D]/20">
              <Award className="w-3.5 h-3.5" />
              <span>Trust Leadership</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight">
              Members of the Board
            </h2>
            <p className="text-slate-600 text-base md:text-lg mt-3">
              Distinguished professionals steering education, legal compliance, culture, and community welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TRUSTEES.map((trustee) => (
              <div
                key={trustee.id}
                className="group bg-white hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#FF971D]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex items-center gap-5"
              >
                {/* Photo area with exact same size as Spiritual Mentors */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-300 bg-slate-100">
                  <Image
                    src={trustee.img}
                    alt={trustee.name}
                    fill
                    sizes="130px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center grow">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF971D] block">
                    {trustee.designation}
                  </span>
                  <h3 className="font-heading font-bold text-navy group-hover:text-[#FF971D] text-base leading-snug transition-colors mt-0.5">
                    {trustee.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}