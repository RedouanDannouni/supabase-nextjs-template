'use client';

import Link from 'next/link';

type Module = {
  id: string;
  title: string;
  description: string;
  href: string;
};

const modules: Module[] = [
  {
    id: 'ai',
    title: 'Werken met AI',
    description: 'Leer hoe je slim en veilig werkt met AI-tools.',
    href: '/app/training/ai',
  },
  {
    id: 'privacy',
    title: 'Privacy & Data',
    description: 'Inzicht in AVG en omgaan met leerlingdata.',
    href: '/app/training/privacy',
  },
  {
    id: 'pwa',
    title: 'Power Platform',
    description: 'Automatiseer processen met Power Apps & Automate.',
    href: '/app/training/powerplatform',
  },
];

export default function TrainingPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mijn Trainingen</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <Link key={module.id} href={module.href} className="block p-6 bg-white rounded shadow hover:shadow-lg transition-all border border-gray-200">
            <h2 className="text-xl font-semibold mb-2">{module.title}</h2>
            <p className="text-gray-600 text-sm">{module.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
