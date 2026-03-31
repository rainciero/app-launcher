import type { AppEntry } from '../types';

// カテゴリバッジの色パレット
const BADGE_COLORS = [
  'bg-blue-900 text-blue-300',
  'bg-green-900 text-green-300',
  'bg-purple-900 text-purple-300',
  'bg-orange-900 text-orange-300',
  'bg-pink-900 text-pink-300',
  'bg-teal-900 text-teal-300',
];

// カテゴリ名の文字コード合計からインデックスを決定
function getBadgeColor(category: string): string {
  const charSum = Array.from(category).reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return BADGE_COLORS[charSum % BADGE_COLORS.length];
}

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
