// Return a list of `params` to populate the [slug] dynamic segment
import { promises as fs } from "fs";

export async function generateStaticParams() {
  const files = await fs.readdir(process.cwd() + "/markdown", "utf8");

  // console.log(files);

  return files.map((filepath: string) => ({
    slug: filepath,
  }));
}

interface Post {
  title: string;
  body: string;
}

export default async function Home({ params }: { params: { slug: string } }) {
  console.log(params);

  const posts: Post[] = [
    {
      title: "Introducing Catalyst: A modern UI kit for React",
      body: "Today’s the day — we just published the first development preview of Catalyst, just in time for your holiday hacking sessions.",
    },
    {
      title: "Introducing Catalyst: A modern UI kit for React",
      body: "Today’s the day — we just published the first development preview of Catalyst, just in time for your holiday hacking sessions.",
    },
    {
      title: "Introducing Catalyst: A modern UI kit for React",
      body: "Today’s the day — we just published the first development preview of Catalyst, just in time for your holiday hacking sessions.",
    },
  ];

  let body = (
    <div className="m-10">
      {posts.map((post) => (
        <article key={post.title} className="mb-10">
          <h3 className="text-base font-bold">{post.title}</h3>
          <p className="text-sm">{post.body}</p>
        </article>
      ))}
    </div>
  );
  return body;
}
