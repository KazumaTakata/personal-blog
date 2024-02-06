import { remark } from "remark";
import remarkHtml from "remark-html";

import styles from './markdown.module.css'

// Return a list of `params` to populate the [slug] dynamic segment
import { promises as fs } from "fs";

export async function generateStaticParams() {
  const files = await fs.readdir(process.cwd() + "/markdown", "utf8");

  // console.log(files);

  return files.map((filepath: string) => ({
    slug: filepath,
  }));
}

export const markdownToHtml = async (markdownContent: string) => {
  const result = await remark().use(remarkHtml).process(markdownContent);
  return result.toString();
};

interface Post {
  title: string;
  body: string;
}

export default async function Home({ params }: { params: { slug: string } }) {
  console.log(params);

  const markdown: string = await fs.readFile(
    process.cwd() + "/markdown/" + params.slug,
    "utf8"
  );

  let markdownHtml = await markdownToHtml(markdown);

  let body = (
    <div className={styles.markdown}>
      <div dangerouslySetInnerHTML={{ __html: markdownHtml }} />
    </div>
  );
  return body;
}
