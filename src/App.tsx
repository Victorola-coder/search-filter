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

  const [search, SetSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    SetSearch(value);
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

      <main>
        <div className="mx-[100px] h-[1px] bg-white mt-4">
          <form onSubmit={handleSubmit} className="my-6">
            <fieldset>
              <input
                type="text"
                value={search}
                name="search"
                className="transparent"
                onChange={handleChange}
                id="search"
              />
            </fieldset>
          </form>
        </div>
      </main>
    </>
  );
};

export default App;
