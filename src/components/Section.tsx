import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-16 px-4 py-16 sm:px-6", className)}>
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">{title}</h2>
        {children}
      </div>
    </section>
  );
}
