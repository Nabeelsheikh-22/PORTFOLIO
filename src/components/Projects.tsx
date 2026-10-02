import { ExternalLinkIcon } from "lucide-react";
import { projects } from "@/data/content";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Section from "@/components/Section";

export default function Projects() {
  return (
    <Section id="projects" title="My Projects" className="bg-muted/40">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <Card key={project.title} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                Live Demo
                <ExternalLinkIcon data-icon="inline-end" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
