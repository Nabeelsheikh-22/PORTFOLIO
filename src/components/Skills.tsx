import { Code2Icon, SearchIcon, ShoppingBagIcon, type LucideIcon, LayoutTemplateIcon } from "lucide-react";
import { skills } from "@/data/content";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "@/components/Section";

const icons: Record<string, LucideIcon> = {
  "Custom-Coded": Code2Icon,
  Shopify: ShoppingBagIcon,
  WordPress: LayoutTemplateIcon,
  SEO: SearchIcon,
};

export default function Skills() {
  return (
    <Section id="skills" title="My Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => {
          const Icon = icons[skill.title] ?? Code2Icon;
          return (
            <Card key={skill.title} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{skill.title}</CardTitle>
                <CardDescription>{skill.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
