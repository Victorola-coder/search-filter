import { useState } from "react";

interface LinkProps {
  title: string;
  path: string;
}

const App = () => {
  const Links: LinkProps[] = [
    {
      title: "Templates",
      path: "/templates",
    },
    {
      title: "Docs",
      path: "/docs",
    },
    {
      title: "Community",
      path: "/community",
    },
  ];

  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearch(value);
    console.log(value);
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
            {Links.map((link, id) => (
              <li key={id}>
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

          {search && <SearchResult />}
        </form>
      </main>
    </>
  );
};

export default App;

const SearchResult = () => {
  return (
    <div className="animate-fade-in mt-10 h-[300px] max-w-[500px] flex flex-col justify-between rounded-3xl border border-base-600 bg-base-800 p-6 transition-all hover:bg-base-700 bg-gray-600"></div>
  );
};
