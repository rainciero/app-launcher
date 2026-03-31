import type { AppEntry } from '../types';

interface AppCardProps {
  app: AppEntry;
}

export function AppCard({ app }: AppCardProps) {
  const handleClick = () => {
    window.open(app.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-800 rounded-xl p-4 shadow-md hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col items-center text-center gap-1.5"
    >
      <span className="text-2xl">{app.emoji}</span>
      <h3 className="font-semibold text-sm text-white leading-tight">{app.name}</h3>
      {app.description && <p className="text-xs text-gray-400 leading-tight">{app.description}</p>}
    </div>
  );
}
