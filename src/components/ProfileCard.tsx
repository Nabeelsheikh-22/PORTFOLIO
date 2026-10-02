import { BadgeCheckIcon, MailIcon } from "lucide-react";
import { contactLinks, projects, skills } from "@/data/content";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const linkFor = (label: string) => contactLinks.find((link) => link.label === label)?.href ?? "#contact";

const stats = [
  { value: projects.length, label: "Live projects" },
  { value: skills.length, label: "Core skills" },
  { value: "Open", label: "To work" },
];

export default function ProfileCard({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full max-w-sm md:w-sm", className)}>
      {/* Soft glow behind the card */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-br from-sky-400/40 via-indigo-500/30 to-violet-500/40 opacity-70 blur-2xl"
      />

      {/* Gradient border */}
      <div className="rounded-2xl bg-linear-to-br from-sky-400 via-indigo-500 to-violet-500 p-px shadow-2xl shadow-indigo-500/20">
        <Card className="gap-0 rounded-[calc(var(--radius-2xl)-1px)] py-0 ring-0">
          {/* Cover */}
          <div className="relative h-28 overflow-hidden bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]"
            />
            <div aria-hidden="true" className="absolute -top-10 -right-10 size-40 rounded-full bg-sky-500/40 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-12 -left-8 size-40 rounded-full bg-violet-500/40 blur-3xl" />
            <Badge className="absolute top-3 right-3 gap-1.5 border-white/15 bg-white/10 text-white backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Available
            </Badge>
          </div>

          <CardContent className="flex flex-col items-center px-6 pb-6 text-center">
            <Avatar className="-mt-14 size-28 ring-4 ring-card after:hidden">
              <AvatarImage src="/avatar.jpeg" alt="Portrait of Nabeel Sheikh" className="object-cover" />
              <AvatarFallback className="text-xl">NS</AvatarFallback>
              <AvatarBadge className="right-2 bottom-2 size-4 bg-emerald-500 ring-4 ring-card" />
            </Avatar>

            <h3 className="mt-4 flex items-center gap-1.5 text-xl font-semibold tracking-tight">
              Nabeel Sheikh
              <BadgeCheckIcon className="size-5 text-sky-500" aria-label="Verified" />
            </h3>
            <p className="bg-linear-to-r from-sky-500 to-violet-500 bg-clip-text text-sm font-medium text-transparent">
              Freelance Web Developer
            </p>

            <div className="mt-5 grid w-full grid-cols-3 rounded-xl border bg-muted/40 py-3">
              {stats.map((stat, i) => (
                <div key={stat.label} className={cn("flex flex-col", i > 0 && "border-l")}>
                  <span className="text-lg font-semibold">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {skills.map((skill) => (
                <Badge key={skill.title} variant="outline" className="font-normal">
                  {skill.title}
                </Badge>
              ))}
            </div>
          </CardContent>

          <Separator />

          <CardFooter className="gap-2 bg-muted/30 px-6 py-4">
            <a href={linkFor("Email")} className={cn(buttonVariants({ size: "lg", className: "flex-1" }))}>
              <MailIcon data-icon="inline-start" />
              Hire Me
            </a>
            <a
              href={linkFor("GitHub")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={cn(buttonVariants({ variant: "outline", size: "icon-lg" }))}
            >
              <GithubIcon />
            </a>
            <a
              href={linkFor("LinkedIn")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={cn(buttonVariants({ variant: "outline", size: "icon-lg" }))}
            >
              <LinkedinIcon />
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
