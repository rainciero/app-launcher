import type { AppEntry } from '../types';
import { AppCard } from './AppCard';

interface AppGridProps {
  apps: AppEntry[];
  loading: boolean;
  error: string | null;
  selectedCategory: string;
}

export function AppGrid({ apps, loading, error, selectedCategory }: AppGridProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-400 text-center py-10">{error}</p>;
  }

  // カテゴリフィルタリング
  const filtered = selectedCategory === 'すべて'
    ? apps
    : apps.filter((app) => app.category === selectedCategory);

  if (filtered.length === 0) {
    return <p className="text-gray-500 text-center py-10">アプリが見つかりません</p>;
  }

  // カテゴリ順を維持しつつグループ化
  const categories = Array.from(new Set(filtered.map((app) => app.category)));

  return (
    <div className="flex flex-col gap-8">
      {categories.map((category) => (
        <section key={category}>
          {/* カテゴリタイトル */}
          <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-3 border-b border-gray-800 pb-2">
            {category}
          </h2>
          {/* アプリカードグリッド */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {filtered
              .filter((app) => app.category === category)
              .map((app) => (
                <AppCard key={app.url} app={app} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
