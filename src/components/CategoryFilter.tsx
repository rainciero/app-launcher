import type { AppEntry } from '../types';

interface CategoryFilterProps {
  apps: AppEntry[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ apps, selectedCategory, onSelect }: CategoryFilterProps) {
  // カテゴリを重複排除して取得
  const categories = ['すべて', ...Array.from(new Set(apps.map((app) => app.category).filter(Boolean)))];

  return (
    <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === cat
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
