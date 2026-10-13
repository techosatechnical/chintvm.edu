import PageHeader from "@/components/shared/PageHeader";

export default function ContributionPage() {
  return (
    <>
      <PageHeader
        title="Contribution"
        description="Support our educational and charitable initiatives."
        bannerImage="/Contribution banner.png"
      />
      <div className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
        <div className="bg-ivory p-8 rounded-2xl border border-slate/10">
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">Make a Donation</h2>
            <p className="text-slate mb-6">Your contributions help us nurture future generations and maintain our charitable works. Please contact the administrative office for official donation channels.</p>
            <a href="/contact" className="inline-block bg-terracotta text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy transition-colors">Contact Us</a>
        </div>
      </div>
    </>
  );
}