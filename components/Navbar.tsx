import { ChevronDown, Database, Help, Link, Logo } from "./icons";

/**
 * Displays information and actions relating to the current screen.
 */
export default function Navbar() {
  return (
    <header className="h-[3.75rem] w-screen bg-indigo-700 px-[0.875rem] py-[0.625rem] flex items-center">
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        aria-label="Dashboard"
      >
        <Logo />
      </a>
      <nav className="flex flex-grow ml-14">
        <ul className="flex font-medium text-[0.8125rem] gap-6 items-center">
          <li>
            <button className="flex items-center gap-2 text-white transition-all duration-150 fill-white hover:text-indigo-100 hover:fill-indigo-100">
              Dashboards
              <ChevronDown />
            </button>
          </li>
          <li>
            <button className="flex items-center gap-2 text-white transition-all duration-150 fill-white hover:text-indigo-100 hover:fill-indigo-100">
              Dataset
              <ChevronDown />
            </button>
          </li>
          <li>
            <button className="flex items-center gap-2 text-white transition-all duration-150 fill-white hover:text-indigo-100 hover:fill-indigo-100">
              Apps
              <ChevronDown />
            </button>
          </li>
          <li>
            <button className="text-white transition-all duration-150 hover:text-indigo-100">
              Workflows
            </button>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-6">
        <p className="text-indigo-300 font-medium text-[0.8125rem]">
          Saved 1 min ago
        </p>
        <button className="font-medium text-[0.8125rem] text-white flex gap-2 items-center transition-all duration-150 hover:text-indigo-100 fill-white hover:fill-indigo-100">
          <Link />
          Share
        </button>
        <button
          className="transition-all duration-150 fill-white hover:fill-indigo-100"
          aria-label="Help center"
        >
          <Help />
        </button>
        <button className="h-10 px-3 py-[0.3125rem] bg-indigo-600 rounded text-white font-medium text-[0.8125rem] flex gap-2 items-center transition-all duration-150 hover:text-indigo-100 fill-white hover:fill-indigo-100">
          <Database />
          sample-dataset
          <ChevronDown />
        </button>
      </aside>
    </header>
  );
}
