import PageHeader from "@/components/shared/PageHeader";

export default function TendersPage() {
  return (
    <>
      <PageHeader title="Tenders" description="Official tender notices and applications." />
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="bg-ivory p-8 rounded-2xl border border-slate/10 text-center">
            <h3 className="text-xl font-bold text-navy mb-2">No active tenders</h3>
            <p className="text-slate">There are currently no active tender notices available.</p>
        </div>
      </div>
    </>
  );
}