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
      <div className="relative w-full bg-[#133A5E] border-b-4 border-saffron overflow-hidden">
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
    <div className="bg-navy text-ivory py-16 md:py-24 border-b-4 border-saffron">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && <p className="text-lg text-ivory/80 max-w-2xl">{description}</p>}
      </div>
    </div>
  );
}