import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type ProjectFrontmatter = {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  date: string;
};

export type Project = ProjectFrontmatter & {
  slug: string;
  content: string;
};

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(projectsDirectory).filter((f) => f.endsWith(".md"));

  const projects = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...(data as ProjectFrontmatter),
    };
  });

  return projects.sort((a, b) => (a.date > b.date ? -1 : 1));
}
