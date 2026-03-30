import { useState, useEffect } from 'react';
import type { AppEntry } from '../types';
import { SHEET_URL } from '../config/config';

interface UseAppListResult {
  apps: AppEntry[];
  loading: boolean;
  error: string | null;
}

export function useAppList(): UseAppListResult {
  const [apps, setApps] = useState<AppEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const res = await fetch(SHEET_URL);
        const text = await res.text();

        // レスポンスは "/*O_o*/\ngoogle.visualization.Query.setResponse({...});" 形式
        // 先頭47文字と末尾2文字を削除してJSONを抽出
        const json = JSON.parse(text.substring(47).slice(0, -2));

        // 行データをAppEntryに変換（1行目のヘッダー行をスキップ）
        const allRows = json.table.rows as Array<{
          c: Array<{ v: string | null } | null>;
        }>;
        const rows = allRows.slice(1);

        const entries: AppEntry[] = rows.map((row) => ({
          name: row.c[0]?.v ?? '',
          url: row.c[1]?.v ?? '',
          category: row.c[2]?.v ?? '',
          description: row.c[3]?.v ?? '',
          emoji: row.c[4]?.v ?? '📱',
        }));

        setApps(entries);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'データの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  return { apps, loading, error };
}
