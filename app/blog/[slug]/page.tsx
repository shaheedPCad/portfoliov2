import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug);
    return { title: `${post.title} — Shaheed Mohamed Ali` };
  } catch {
    return {};
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-medium tracking-tight">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-foreground/50">
          <span className="font-mono">{formatDate(post.date)}</span>
          {post.tags?.length > 0 && <span>{post.tags.join(", ")}</span>}
        </div>
      </header>
      <div className="prose prose-neutral max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-a:text-accent">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
