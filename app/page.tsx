import Link from "next/link";

const sections = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-medium tracking-tight">Shaheed Mohamed Ali</h1>
        <p className="text-foreground/70">Software Engineer</p>
      </div>
      <ul className="flex gap-5 text-sm">
        {sections.map((section) => (
          <li key={section.href}>
            <Link
              href={section.href}
              className="text-foreground underline underline-offset-4 hover:text-accent"
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
