import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Shaheed Mohamed Ali",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium tracking-tight">Blog</h1>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.slug} className="flex items-baseline gap-4">
            <span className="w-24 shrink-0 font-mono text-sm text-foreground/50">
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
    </div>
  );
}
