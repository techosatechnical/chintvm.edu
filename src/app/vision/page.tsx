import PageHeader from "@/components/shared/PageHeader";

export default function VisionPage() {
  return (
    <>
      <PageHeader title="Chinmaya Vision" description="Our guiding principles for holistic education." />
      <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        <blockquote className="text-2xl italic text-navy mb-8 border-l-4 border-saffron pl-6">
          "Yahaiva phalam tahaiva karma" – True education is that which prepares one to face the challenges of life, and not merely to make a living.
        </blockquote>
        <p className="text-slate text-lg mb-6 leading-relaxed">
          The Chinmaya Vision Programme is a comprehensive educational strategy. It encapsulates four main pillars: Integrated Development of the child, Indian Culture, Patriotism, and Universal Outlook.
        </p>
      </div>
    </>
  );
}
