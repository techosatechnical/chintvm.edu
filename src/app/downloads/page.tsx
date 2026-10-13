import PageHeader from "@/components/shared/PageHeader";

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        title="Downloads"
        description="Important documents, forms, and resources."
        bannerImage="/Downloads banner.png"
      />
      <div className="container mx-auto px-4 md:px-6 py-16">
        <p className="text-slate text-lg mb-8">Downloadable resources will be listed here based on source content.</p>
      </div>
    </>
  );
}