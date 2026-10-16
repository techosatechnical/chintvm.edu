import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Compass, Heart, Globe, ExternalLink } from "lucide-react";

const SCHOOLS = [
  {
    name: "Chinmaya Vidyalaya, Attukal",
    campus: "Trivandrum City Campus",
    img: "/images/schools/chinmaya attukal.jpg",
    link: "https://att.chintvm.edu.in/",
    location: "Attukal, Thiruvananthapuram",
    affiliation: "Affiliated to CBSE · Holistic Chinmaya Vision Programme"
  },
  {
    name: "Chinmaya Vidyalaya, Kattakada",
    campus: "Kattakada Regional Campus",
    img: "/images/schools/chinmaya kattakada.jpg",
    link: "https://kda.chintvm.edu.in/",
    location: "Kattakada, Thiruvananthapuram",
    affiliation: "Affiliated to CBSE · Holistic Chinmaya Vision Programme"
  },
  {
    name: "Chinmaya Vidyalaya, Kollam",
    campus: "Kollam District Campus",
    img: "/images/schools/chinmaya kollam.jpg",
    link: "https://chinmaya-kollam.vercel.app/",
    location: "Kollam District",
    affiliation: "Affiliated to CBSE · Holistic Chinmaya Vision Programme"
  },
  {
    name: "Chinmaya Vidyalaya, Kunnumpuram",
    campus: "Kunnumpuram Campus",
    img: "/images/schools/chinmaya kunnumpuram.jpg",
    link: "https://kpm.chintvm.edu.in/",
    location: "Kunnumpuram, Thiruvananthapuram",
    affiliation: "Affiliated to CBSE · Holistic Chinmaya Vision Programme"
  },
  {
    name: "Chinmaya Vidyalaya, Naruvamoodu",
    campus: "Naruvamoodu Regional Campus",
    img: "/images/schools/chinmaya naruvamood.jpg",
    link: "https://nmd.chintvm.edu.in/",
    location: "Naruvamoodu, Thiruvananthapuram",
    affiliation: "Affiliated to CBSE · Holistic Chinmaya Vision Programme"
  },
  {
    name: "Chinmaya Vidyalaya, Vazhuthacaud",
    campus: "Vazhuthacaud City Campus",
    img: "/images/schools/chinmaya vazhutakad.jpg",
    link: "https://vkd.chintvm.edu.in/",
    location: "Vazhuthacaud, Thiruvananthapuram",
    affiliation: "Affiliated to CBSE · Holistic Chinmaya Vision Programme"
  }
];

const CVP_PILLARS = [
  {
    icon: GraduationCap,
    title: "Integrated Development",
    desc: "Nurturing the physical, mental, intellectual, and spiritual dimensions of each learner."
  },
  {
    icon: Compass,
    title: "Indian Culture & Heritage",
    desc: "Instilling deep respect and knowledge for cultural traditions, values, and timeless philosophy."
  },
  {
    icon: Heart,
    title: "Patriotism & Service",
    desc: "Fostering national pride, civic duties, selfless service, and character development."
  },
  {
    icon: Globe,
    title: "Universal Outlook",
    desc: "Developing global citizenship, environmental stewardship, and a peaceful worldview."
  }
];

export default function VidyalayasPage() {
  return (
    <>
      <PageHeader
        title="Our Vidyalayas"
        description="Six premier institutions dedicated to academic excellence, cultural values, and holistic development."
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F9F6F7] via-[#FFE8D6]/30 to-[#F9F6F7] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#FFE8D6] text-[#FF971D] text-xs font-bold tracking-widest uppercase rounded-full mb-4 border border-[#FF971D]/20">
              Centers of Excellence
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-navy mb-4 tracking-tight">
              Our <span className="text-[#FF971D]">Institutions</span>
            </h2>
            <p className="text-slate-600 font-medium text-base md:text-lg max-w-2xl mx-auto">
              Six prestigious Chinmaya Vidyalayas nurturing academic brilliance, moral fortitude, and cultural values across Kerala.
            </p>
            <div className="w-20 h-1 bg-[#FF971D] mx-auto rounded-full mt-6"></div>
          </div>

          {/* School Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20">
            {SCHOOLS.map((school, index) => (
              <div key={index}>
                <a
                  href={school.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-2 h-full"
                >
                  {/* Image container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={school.img}
                      alt={school.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#FF971D] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#FF971D]/30 shadow-xs">
                      {school.campus}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col grow justify-between bg-white">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-navy group-hover:text-[#FF971D] transition-colors leading-snug">
                        {school.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 font-medium">
                        {school.affiliation}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-navy group-hover:text-[#FF971D] transition-colors">
                      <span className="uppercase tracking-wider">Explore Campus Website</span>
                      <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#FF971D] group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Chinmaya Vision Programme Feature Grid */}
          <div className="max-w-6xl mx-auto pt-12 border-t border-amber-900/10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 bg-[#FFE8D6] text-[#FF971D] text-xs font-bold uppercase tracking-wider rounded-full mb-3 border border-[#FF971D]/20">
                Educational Philosophy
              </span>
              <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-navy">
                The Chinmaya Vision Programme
              </h3>
              <p className="text-slate-600 text-sm mt-3">
                Our educational framework prepares students to face life's challenges with confidence, compass, and cultural roots.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CVP_PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FFE8D6] text-[#FF971D] flex items-center justify-center mb-4 shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Admission / Contact Banner */}
            <div className="mt-14 bg-gradient-to-r from-[#FFE8D6] via-white to-[#FFE8D6] rounded-3xl p-8 md:p-12 text-slate-900 shadow-xl border border-[#FF971D]/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[#FF971D] text-xs font-bold uppercase tracking-widest">
                  Admissions & Enquiries
                </span>
                <h4 className="font-heading text-2xl md:text-3xl font-black mt-1 text-slate-900">
                  Begin Your Child's Journey with Us
                </h4>
                <p className="text-slate-700 text-sm mt-2 max-w-xl">
                  For admissions, academic queries, or campus visits, contact the respective Vidyalaya campus or reach out to our registered Trust office.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 shrink-0">
                <Link
                  href="/contact"
                  className="bg-[#FF971D] hover:bg-[#e68412] text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-md hover:shadow-lg text-sm"
                >
                  Contact Trust Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}