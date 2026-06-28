import { getAllProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects — Shaheed Mohamed Ali",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="space-y-10">
      <h1 className="text-xl font-medium tracking-tight">Projects</h1>
      <ul className="space-y-8">
        {projects.map((project) => (
          <li key={project.slug} className="space-y-1">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-medium">
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
              </h2>
              <span className="font-mono text-xs text-foreground/50">
                {formatDate(project.date)}
              </span>
            </div>
            <p className="text-foreground/70">{project.description}</p>
            {project.tags?.length > 0 && (
              <p className="text-xs text-foreground/50">
                {project.tags.join(" · ")}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
