import PageHeader from "@/components/shared/PageHeader";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return [{ slug: "example" }];
}

export default async function UpdateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return (
    <>
      <PageHeader title="Update Details" description={`Reading update: ${resolvedParams.slug}`} />
      <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        <Link href="/updates" className="inline-flex items-center gap-2 text-terracotta hover:text-navy mb-8 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Updates
        </Link>
        <div className="prose prose-lg text-slate">
          <p>This is a placeholder for the update article. Actual content will be loaded from the CMS or data source based on the slug: {resolvedParams.slug}.</p>
        </div>
      </div>
    </>
  );
}
