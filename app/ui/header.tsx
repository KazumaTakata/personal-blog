import Link from 'next/link'

export function Header() {
  return (
    <header>
      <nav>
        <div className="ml-10">
          <div className="flex mt-10 text-sm">
            <div className="flex">
              <Link className="mr-4" href="/">
                home 
              </Link>
              <Link className="mr-4" href="/blog">
                blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
