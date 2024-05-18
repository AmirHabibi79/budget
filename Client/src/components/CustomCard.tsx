export default function CustomCard({
  children,
  className,
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={`${className} border-[0.5px] border-black rounded-sm bg-slate-100`}
    >
      {children}
    </div>
  );
}
