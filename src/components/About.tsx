import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" title="About Me" className="bg-muted/40">
      <Card className="mx-auto max-w-3xl">
        <CardContent className="text-center text-base leading-relaxed text-muted-foreground">
          I am a freelance web developer with experience working on Shopify, WordPress, and
          custom-coded websites. I enjoy creating websites that are not only visually appealing
          but also functional and user-friendly. Currently, I am improving my skills in frontend
          development and building projects to gain more practical experience.
        </CardContent>
      </Card>
    </Section>
  );
}
