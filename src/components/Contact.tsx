import { MailIcon, type LucideIcon } from "lucide-react";
import { contactLinks } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Section from "@/components/Section";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const icons: Record<string, LucideIcon | typeof GithubIcon> = {
  Email: MailIcon,
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
};

export default function Contact() {
  return (
    <Section id="contact" title="Contact Me">
      <Card className="mx-auto max-w-md py-2">
        <CardContent className="px-2">
          {contactLinks.map((link, i) => {
            const Icon = icons[link.label] ?? MailIcon;
            const external = !link.href.startsWith("mailto:");
            return (
              <div key={link.label}>
                {i > 0 && <Separator />}
                <a
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-lg px-4 py-3 transition-colors hover:bg-muted"
                >
                  <Icon className="size-5 shrink-0 text-muted-foreground" />
                  <span className="flex min-w-0 flex-col">
                    <span className="text-xs text-muted-foreground">{link.label}</span>
                    <span className="truncate font-medium">{link.text}</span>
                  </span>
                </a>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </Section>
  );
}
