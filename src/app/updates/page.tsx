import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";

export default function UpdatesPage() {
  const updates = [
    { title: "Dr. Anil Keshan - Awarded Canada Research Chair", img: "https://chintvm.edu.in/Files/CBSE/Album/2023/3563/Dr Anil Keshan 1.jpg" },
    { title: "Guru Seva Padak", img: "https://chintvm.edu.in/Files/CBSE/Album/2018/1889/seva padak 1.jpg" },
    { title: "The Art on the Walls", img: "https://chintvm.edu.in/Files/CBSE/Album/2018/1881/Art on the walls 123.jpg" },
    { title: "CSRS - Invites Application for Scientist 2026", img: "https://chintvm.edu.in/Files/CBSE/News/Scientist_CSRS for website.jpg" }
  ];

  return (
    <>
      <PageHeader title="Chinmaya Updates" description="Latest news, announcements, and events." />
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updates.map((update, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate/10 group cursor-pointer hover:shadow-md transition-shadow">
                    <div className="relative h-48 w-full">
                        <Image src={update.img} alt={update.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                        <h3 className="font-heading font-bold text-navy text-lg group-hover:text-terracotta transition-colors">{update.title}</h3>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  );
}