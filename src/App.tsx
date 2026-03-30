import { useState } from 'react';
import { useAppList } from './hooks/useAppList';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { AppGrid } from './components/AppGrid';

export default function App() {
  const { apps, loading, error } = useAppList();
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  return (
    <div className="bg-gray-950 min-h-screen">
      <Header appCount={apps.length} />
      <main>
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6">
          <CategoryFilter
            apps={apps}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <AppGrid
            apps={apps}
            loading={loading}
            error={error}
            selectedCategory={selectedCategory}
          />
        </div>
      </main>
    </div>
  );
}
