import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import { 
  Landmark, 
  MapPin, 
  Sparkles, 
  Compass, 
  Crown, 
  Quote, 
  ScrollText, 
  HeartHandshake,
  CheckCircle2
} from "lucide-react";

const ASSOCIATED_SHRINES = [
  {
    name: "Sree Mahaganapathy Temple",
    campus: "Chinmaya Vidyalaya Vazhuthacaud",
    location: "Vazhuthacaud City Campus, Trivandrum",
    desc: "Consecrated within the Vazhuthacaud campus, offering divine blessings of Lord Ganesha for clarity, knowledge, and hindrance-free learning.",
    img: "/images/temples/Vazhuthacaud Chinmaya Vidyalaya Sree Mahaganapathy Temple.jpg",
  },
  {
    name: "Sree Mahaganapathy Temple",
    campus: "Chinmaya Vidyalaya Naruvamoodu",
    location: "Naruvamoodu Regional Campus",
    desc: "A serene spiritual center that anchors student assemblies, prayer routines, and auspicious cultural commencements in Naruvamoodu.",
    img: "/images/temples/Naruvamoodu Chinmaya Vidyalaya Sree Mahaganapathy Temple.jpg",
  },
  {
    name: "Sree Mahaganapathy Temple",
    campus: "Chinmaya Vidyalaya Kollam",
    location: "Kollam District Campus",
    desc: "A peaceful sanctuary invoking spiritual depth, ethical grounding, and mental focus for students and devotees in the Kollam region.",
    img: "/images/temples/Kollam Chinmaya Vidyalaya Sree Mahaganapathy Temple.jpg",
  },
];

const TEMPLE_HIGHLIGHTS = [
  {
    icon: Landmark,
    title: "1000-Year Heritage",
    subtitle: "Installed by Koopakkaramadom Namboothiri",
    desc: "An ancient shrine steeped in centuries of deep devotion and traditional Kerala temple architecture.",
  },
  {
    icon: Compass,
    title: "Vatta Sree Kovil & West Darsan",
    subtitle: "Shadadhara Prathista Architecture",
    desc: "Constructed with rare circular sanctum (Vatta Sree Kovil) facing the setting sun with Shadadhara installation.",
  },
  {
    icon: Crown,
    title: "Travancore Royal Legacy",
    subtitle: "Historic Rajamudra inside compound",
    desc: "Deeply connected with the Royal Family of Travancore, with the royal seal (Rajamudra) standing as living testimony.",
  },
  {
    icon: Sparkles,
    title: "Chinmaya Consecration",
    subtitle: "Entrusted in 1981 & Installed in 1982",
    desc: "Handed over by legal representatives of Koopakkara Madom to Chinmaya Mission; revitalized with modern daily poojas.",
  },
];



export default function TemplesPage() {
  return (
    <>
      <PageHeader
        title="Temples & Shrines"
        description="Spiritual sanctuaries fostering inner peace, timeless cultural heritage, and divine values under Chinmaya Educational, Cultural and Charitable Trust."
      />

      {/* Main Temple Hero Section */}
      <section className="py-16 md:py-24 bg-[#FCF9F2] relative overflow-hidden">
        {/* Subtle decorative radial lights */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-terracotta/10 text-terracotta">
                <Landmark className="w-3.5 h-3.5" />
                <span>Historic Sacred Heritage</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy leading-tight">
                Shree Mahavishnu Temple
                <span className="block text-terracotta text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
                  Govindamangalam, Trivandrum
                </span>
              </h1>

              <div className="flex items-center gap-2 text-slate-600 text-sm md:text-base font-semibold">
                <MapPin className="w-4 h-4 text-terracotta shrink-0" />
                <span>15 km from Trivandrum City &bull; Pravachambalam &ndash; Ooruttambalam Road</span>
              </div>

              <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                The name <strong>Govindamangalam</strong> is derived from the presiding Deity, Lord Mahavishnu. 
                Constructed nearly <strong>1,000 years ago</strong> by the venerable Koopakkaramadom Namboothiri, 
                this sacred shrine is renowned for its immense spiritual aura, deep connection with local culture, 
                and royal history.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-xs border border-slate-200/60">
                  <CheckCircle2 className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-navy text-sm">Vatta Sree Kovil</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Circular sanctum with rare Shadadhara Prathista &amp; West Darsan.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-xs border border-slate-200/60">
                  <CheckCircle2 className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-navy text-sm">Royal Travancore Rajamudra</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Historic royal seal inside compound testifying royal patronage.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Display */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-4/3 lg:aspect-3/4">
                <Image
                  src="/images/temples/Shree Mahavishnu Temple at Govindamangalam.jpg"
                  alt="Shree Mahavishnu Temple at Govindamangalam"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <span className="text-xs uppercase font-bold tracking-widest text-saffron">Presiding Deity</span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold mt-1">Lord Shree Mahavishnu</h3>
                  <p className="text-xs text-ivory/80 mt-1">Koopakkara Madom Sanctum &bull; Consecrated 1000+ Years Ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote by Gurudev */}
      <section className="py-14 bg-navy text-ivory relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Quote className="w-10 h-10 text-saffron mx-auto opacity-75" />
            <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed text-balance">
              &ldquo;The highest prayer in this world is Service, the greatest devotion is loving the people around us and the noblest character trait is divine compassion for all living creatures.&rdquo;
            </blockquote>
            <div className="pt-2">
              <div className="h-0.5 w-16 bg-saffron mx-auto mb-2" />
              <p className="font-heading font-bold text-saffron text-base tracking-wide uppercase">
                &mdash; Swami Chinmayanandaji
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural & Historical Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-terracotta/10 text-terracotta mb-3">
              <ScrollText className="w-3.5 h-3.5" />
              <span>Architectural Grandeur</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-navy tracking-tight">
              Significance &amp; Architectural Speciality
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEMPLE_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-[#FAF7F2] hover:bg-white border border-slate-200/70 hover:border-terracotta/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy group-hover:bg-terracotta text-white flex items-center justify-center transition-colors mb-5 shadow-xs">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg group-hover:text-terracotta transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold text-terracotta mt-1 uppercase tracking-wide">
                    {item.subtitle}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mt-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chronicle of Revival: Handover & Gurudev's Visit */}
      <section className="py-20 bg-[#FAF7F2] border-t border-slate-200/60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200/80">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy">
                The Sacred Transition to Chinmaya Mission
              </h3>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-base md:text-lg">
              <p>
                Following the decline of royal regime in Kerala, the temple underwent a period of dormancy. 
                Recognizing the spiritual need to preserve this ancient sanctuary and ensure its ongoing welfare, 
                the legal representatives of <strong>Koopakkara Madom</strong> generously handed over the temple 
                along with <strong>51 cents of land</strong> to <strong>Chinmaya Mission Thiruvananthapuram in 1981</strong>.
              </p>
              <p>
                The Mission immediately took charge of rejuvenation. In <strong>1982</strong>, the partially damaged 
                ancient vigraha was systematically replaced with a newly sculpted consecrated Vigraha. A regular poojari 
                was appointed to conduct traditional morning and evening nithya poojas daily.
              </p>
              <div className="p-5 rounded-2xl bg-amber-50/80 border-l-4 border-saffron my-4">
                <h4 className="font-heading font-bold text-navy text-base mb-1">
                  Pujya Gurudev Swami Chinmayanandaji&apos;s Divine Visit (1984)
                </h4>
                <p className="text-sm text-slate-700 m-0">
                  In 1984, <strong>Pujya Gurudev Swami Chinmayananda</strong> personally visited the Govindamangalam temple, 
                  performed prayers, and showered his divine blessings upon the activities and spiritual service of the Mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Associated Shrines in Our Vidyalayas */}
      <section className="py-20 bg-[#FAF7F2] border-t border-slate-200/80">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-terracotta/10 text-terracotta mb-3">
              <Landmark className="w-3.5 h-3.5" />
              <span>Campus Sanctuaries</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-navy tracking-tight">
              Associated Shrines in Vidyalayas
            </h2>
            <p className="text-slate-600 text-base md:text-lg mt-3">
              Dedicated Sree Mahaganapathy temples established on school campuses, blessing our students and academic environment with wisdom and peace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ASSOCIATED_SHRINES.map((shrine, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-200/70 group"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={shrine.img}
                    alt={shrine.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-saffron block">
                      {shrine.campus}
                    </span>
                    <h3 className="font-heading font-bold text-lg leading-tight mt-0.5">
                      {shrine.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex flex-col grow justify-between bg-white">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {shrine.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 pt-4 mt-4 border-t border-slate-100">
                    <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
                    <span>{shrine.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}