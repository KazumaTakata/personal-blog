
export default async function Home() {
  debugger;
  const mydata = await getData();

  const posts = ["post1", "post2", "post2", "post2", "post2"];

  let body = (
    <div className="m-10 text-sm">
      <p>
        東京のweb系のスタートアップでソフトウェアエンジニアとして働いています。
        日々の業務や、学習で学んだこと記録していきたいと思います。
      </p>

      <footer className="mt-10">
        <h3 className="text-base mb-2">LINKS</h3>
        <div className="mb-1">
          <a className="underline" href="https://github.com/KazumaTakata/">
            GITHUB
          </a>
        </div>
        <div>
          <a
            className="underline"
            href="https://stackoverflow.com/users/4624070/kazuma"
          >
           STACK OVERFLOW 
          </a>
        </div>
      </footer>
    </div>
  );

  return body;
}

async function getData() {
  debugger;

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
