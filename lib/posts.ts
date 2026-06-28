import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostFrontmatter = {
  title: string;
  date: string;
  tags: string[];
  summary: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...(data as PostFrontmatter),
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as PostFrontmatter),
  };
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
