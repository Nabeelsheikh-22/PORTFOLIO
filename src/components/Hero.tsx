import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_auto] md:py-28">
      <div className="space-y-6 text-center md:text-left">
        <Badge variant="secondary">Available for freelance work</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I am <span className="text-sky-500">Nabeel</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground md:mx-0 mx-auto">
          I am a web developer building clean, responsive, and user-friendly websites using
          HTML, CSS, JavaScript, PHP, WordPress, Shopify and modern web technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
          <Link href="#projects" className={buttonVariants({ size: "lg" })}>
            View My Projects
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
          <Link href="#contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Contact Me
          </Link>
        </div>
      </div>

      <Card className="mx-auto w-full max-w-xs text-center">
        <CardHeader className="items-center justify-items-center">
          <Avatar className="mb-2 size-28">
            <AvatarImage src="/avatar.jpeg" alt="Portrait of Nabeel Sheikh" className="object-cover" />
            <AvatarFallback>NS</AvatarFallback>
          </Avatar>
          <CardTitle className="text-lg">Web Developer</CardTitle>
          <CardDescription>WordPress | Shopify | Custom-Coded</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline">WordPress</Badge>
          <Badge variant="outline">Shopify</Badge>
          <Badge variant="outline">SEO</Badge>
        </CardContent>
      </Card>
    </section>
  );
}
