import React from 'react';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  description?: string;
  bannerImage?: string;
}

export default function PageHeader({ title, description, bannerImage }: PageHeaderProps) {
  if (bannerImage) {
    return (
      <div className="relative w-full bg-[#FFE8D6] border-b-4 border-[#FF971D] overflow-hidden">
        <Image
          src={bannerImage}
          alt={`${title}${description ? ` - ${description}` : ''}`}
          width={3840}
          height={640}
          priority
          sizes="100vw"
          className="w-full h-auto block"
        />
        <h1 className="sr-only">{title}</h1>
        {description && <p className="sr-only">{description}</p>}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#FFE8D6] via-[#F9F6F7] to-[#FFE8D6] text-slate-900 py-16 md:py-24 border-b-4 border-[#FF971D]">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">{title}</h1>
        {description && <p className="text-lg text-slate-700 max-w-2xl">{description}</p>}
      </div>
    </div>
  );
}