import PageHeader from "@/components/shared/PageHeader";

export default function CareersPage() {
  return (
    <>
      <PageHeader title="Careers" description="Join our mission to empower future generations." />
      <div className="container mx-auto px-4 md:px-6 py-16">
        <p className="text-slate text-lg mb-8">Current career opportunities and application instructions will be listed here.</p>
      </div>
    </>
  );
}