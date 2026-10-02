import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer>
      <Separator />
      <p className="px-4 py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Nabeel Sheikh. All Rights Reserved.
      </p>
    </footer>
  );
}
