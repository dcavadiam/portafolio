export default function HeroChip( { children }: { children: React.ReactNode } ) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
      </span>
      {children as React.ReactNode}
    </div>
  );
}