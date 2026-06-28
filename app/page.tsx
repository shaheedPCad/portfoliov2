import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const projects = getAllProjects().slice(0, 3);

  return (
    <div className="space-y-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">
          Shaheed Mohamed Ali
        </h1>
        <p className="max-w-md text-foreground/70">
          Software Engineer. I build things and occasionally write about it.
        </p>
        <ul className="flex gap-5 pt-2 text-sm">
          <li>
            <Link
              href="/projects"
              className="text-foreground underline underline-offset-4 hover:text-accent"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className="text-foreground underline underline-offset-4 hover:text-accent"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-foreground underline underline-offset-4 hover:text-accent"
            >
              About
            </Link>
          </li>
        </ul>
      </div>

      {projects.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-sm font-medium uppercase tracking-wide text-foreground/50">
              Selected work
            </h2>
            <Link
              href="/projects"
              className="text-sm text-foreground/50 hover:text-accent"
            >
              View all
            </Link>
          </div>
          <ul className="space-y-3">
            {projects.map((project) => (
              <li key={project.slug} className="flex items-baseline gap-4">
                <span className="w-16 shrink-0 font-mono text-sm text-foreground/50">
                  {formatDate(project.date)}
                </span>
                <div>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent hover:underline underline-offset-4"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                  <span className="text-foreground/50"> — {project.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {posts.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-sm font-medium uppercase tracking-wide text-foreground/50">
              Recent writing
            </h2>
            <Link
              href="/blog"
              className="text-sm text-foreground/50 hover:text-accent"
            >
              View all
            </Link>
          </div>
          <ul className="space-y-3">
            {posts.map((post) => (
              <li key={post.slug} className="flex items-baseline gap-4">
                <span className="w-16 shrink-0 font-mono text-sm text-foreground/50">
                  {formatDate(post.date)}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-accent hover:underline underline-offset-4"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
