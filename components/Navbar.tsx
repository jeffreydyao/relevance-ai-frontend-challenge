import ChevronDown from "@iconscout/react-unicons/icons/uil-angle-down";
import Link from "@iconscout/react-unicons/icons/uil-link";
import Help from "@iconscout/react-unicons/icons/uil-question-circle";
import Database from "@iconscout/react-unicons/icons/uil-database";
import { Logo } from "./icons";

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
            <button className="text-white flex gap-1 items-center">
              Dashboards
              <ChevronDown />
            </button>
          </li>
          <li>
            <button className="text-white flex gap-1 items-center">
              Dataset
              <ChevronDown />
            </button>
          </li>
          <li>
            <button className="text-white flex gap-1 items-center">
              Apps
              <ChevronDown />
            </button>
          </li>
          <li>
            <button className="text-white">Workflows</button>
          </li>
        </ul>
      </nav>
      <aside className="flex gap-6 items-center">
        <p className="text-indigo-300 font-medium text-[0.8125rem]">
          Saved 1 min ago
        </p>
        <button className="font-medium text-[0.8125rem] text-white flex gap-1 items-center">
          <Link size="12" />
          Share
        </button>
        <button className="text-white" aria-label="Help center">
          <Help />
        </button>
        <button className="h-10 pl-3 pr-2 py-[0.3125rem] bg-indigo-600 rounded text-white font-medium text-[0.8125rem] flex gap-2 items-center">
          <Database size="16" />
          sample-dataset
          <ChevronDown />
        </button>
      </aside>
    </header>
  );
}
