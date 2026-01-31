import { Logo } from "@/component/shared/logo";
import { ModeToggle } from "@/component/shared/mod-toggle";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/movies", text: "Movies" },
  { href: "/genres", text: "Genres" },
  { href: "/about", text: "About" },
  { href: "/dashboard", text: "Admin" },
];

export default function MainNav() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-primary/20">
      <div className="container max-w-350 px-8 mx-auto flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-primary text-xl font-bold">CineScope</span>
        </Link>

        <nav className=" ml-auto flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              {link.text}
            </Link>
          ))}

          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
