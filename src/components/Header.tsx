interface HeaderProps {
  appCount: number;
}

export function Header({ appCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 h-16 flex items-center justify-between px-6 shadow-md">
      <div className="flex items-center gap-2 text-white text-xl font-bold">
        <span>🚀</span>
        <span>My Apps</span>
      </div>
      <div className="text-gray-400 text-sm">{appCount} apps</div>
    </header>
  );
}
