import PageHeader from "@/components/shared/PageHeader";
import { ArrowRight } from "lucide-react";

export default function VidyalayasPage() {
  const schools = [
    { name: "Chinmaya Vidyalaya, Attukal", link: "https://att.chintvm.edu.in/" },
    { name: "Chinmaya Vidyalaya, Kattakada", link: "https://kda.chintvm.edu.in/" },
    { name: "Chinmaya Vidyalaya, Kollam", link: "https://kol.chintvm.edu.in/" },
    { name: "Chinmaya Vidyalaya, Kunnumpuram", link: "https://kpm.chintvm.edu.in/" },
    { name: "Chinmaya Vidyalaya, Naruvamoodu", link: "https://nmd.chintvm.edu.in/" },
    { name: "Chinmaya Vidyalaya, Vazhuthacaud", link: "https://vkd.chintvm.edu.in/" }
  ];

  return (
    <>
      <PageHeader title="Our Vidyalayas" description="Six institutions dedicated to academic excellence and spiritual growth." />
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schools.map((school, index) => (
                <a key={index} href={school.link} target="_blank" rel="noopener noreferrer" className="bg-ivory border border-slate/10 p-8 rounded-2xl hover:border-terracotta hover:shadow-lg transition-all group block">
                    <h3 className="font-heading text-xl font-bold text-navy mb-4 group-hover:text-terracotta transition-colors">{school.name}</h3>
                    <div className="flex items-center text-terracotta font-medium">Visit Website <ArrowRight className="w-4 h-4 ml-2" /></div>
                </a>
            ))}
        </div>
      </div>
    </>
  );
}