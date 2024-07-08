import { useState, useEffect } from "react";

interface LinkProps {
  id: number;
  title: string;
  path: string;
}

const App = () => {
  const Links: LinkProps[] = [
    { id: 1, title: "Templates", path: "/templates" },
    { id: 2, title: "Docs", path: "/docs" },
    { id: 3, title: "Community", path: "/community" },
    { id: 4, title: "Contact", path: "/contact" },
    { id: 5, title: "Blog", path: "/blog" },
    { id: 6, title: "Support", path: "/support" },
    { id: 7, title: "Careers", path: "/careers" },
    { id: 8, title: "News", path: "/news" },
    { id: 9, title: "Events", path: "/events" },
    { id: 10, title: "Jobs", path: "/jobs" },
  ];

  const navLinks = Links.slice(0, 3);

  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <header className="mx-[120px] py-[30px]">
        <nav className="flex flex-row items-center justify-between">
          <h3 className="text-3xl font-medium">Search</h3>

          <ul className="flex flex-row items-center gap-[30px]">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.path}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-[100px]">
        <div className="h-[1px] bg-white my-7"></div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <input
              type="text"
              value={search}
              name="search"
              className="bg-transparent border rounded w-full py-3 px-4"
              onChange={handleChange}
              id="search"
            />
          </fieldset>
        </form>

        <SearchResult search={search} links={Links} />
      </main>
    </>
  );
};

export default App;

interface SearchResultProps {
  search: string;
  links: LinkProps[];
}

const SearchResult = ({ search, links }: SearchResultProps) => {
  const [filteredLinks, setFilteredLinks] = useState<LinkProps[]>(links);

  useEffect(() => {
    const newFilteredLinks = links.filter((link) =>
      link.title.toLowerCase().startsWith(search.toLowerCase())
    );
    setFilteredLinks(newFilteredLinks);
  }, [search, links]);

  return (
    <div className="mt-10 flex flex-wrap gap-4">
      {filteredLinks.length > 0 ? (
        filteredLinks.map((link) => (
          <div
            key={link.id}
            className={`card ${
              filteredLinks.includes(link) ? "animate-fade-in" : "hidden"
            }`}
          >
            <a href={link.path}>{link.title}</a>
          </div>
        ))
      ) : (
        <div className="animate-fade-in text-center">No results found</div>
      )}
    </div>
  );
};
