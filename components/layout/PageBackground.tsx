export default function PageBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute -left-[20%] top-[10%] h-[min(42rem,80vw)] w-[min(42rem,80vw)] rounded-full bg-accent/25 blur-[100px] dark:bg-accent/38" />
      <div className="absolute -right-[15%] top-[35%] h-[min(36rem,70vw)] w-[min(36rem,70vw)] rounded-full bg-accent/18 blur-[90px] dark:bg-accent/30" />
      <div className="absolute bottom-[5%] left-[30%] h-[min(28rem,55vw)] w-[min(28rem,55vw)] rounded-full bg-accent/15 blur-[80px] dark:bg-accent/26" />
      <div className="absolute bottom-[25%] right-[20%] h-[min(20rem,40vw)] w-[min(20rem,40vw)] rounded-full bg-accent/12 blur-3xl dark:bg-accent/22" />
    </div>
  );
}
