import React from 'react';

export default function PageHeader({ title, description }: { title: string, description?: string }) {
  return (
    <div className="bg-navy text-ivory py-16 md:py-24 border-b-4 border-saffron">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && <p className="text-lg text-ivory/80 max-w-2xl">{description}</p>}
      </div>
    </div>
  );
}