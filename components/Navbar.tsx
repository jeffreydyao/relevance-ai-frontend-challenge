import ChevronDown from "@iconscout/react-unicons/icons/uil-angle-down";
import Link from "@iconscout/react-unicons/icons/uil-link";
import Help from "@iconscout/react-unicons/icons/uil-question-circle";
import Database from "@iconscout/react-unicons/icons/uil-database";

export default function Navbar() {
  return (
    <header className="h-[3.75rem] w-screen bg-indigo-700 px-[0.875rem] py-[0.625rem] flex items-center">
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        aria-label="Dashboard"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.36478 6.47058H4.63309C2.07431 6.47058 0 8.59065 0 11.2059V15.2647C0 17.8799 2.07431 20 4.63309 20H8.60432C11.1631 20 13.2374 17.8799 13.2374 15.2647V14.9619C8.8736 14.8835 5.35971 11.2435 5.35971 6.7647C5.35971 6.66624 5.36141 6.5682 5.36478 6.47058ZM6.76873 6.47058C6.76465 6.5681 6.76259 6.66615 6.76259 6.7647C6.76259 10.4516 9.64844 13.4496 13.2374 13.5278V11.2059C13.2374 8.59065 11.1631 6.47058 8.60432 6.47058H6.76873Z"
            fill="white"
          />
          <path
            d="M20 6.76471C20 10.5008 17.0367 13.5294 13.3813 13.5294C9.72587 13.5294 6.76257 10.5008 6.76257 6.76471C6.76257 3.02866 9.72587 0 13.3813 0C17.0367 0 20 3.02866 20 6.76471Z"
            fill="#CBD8FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2381 13.5278V11.2059C13.2381 8.59065 11.1638 6.47058 8.60503 6.47058H6.76945C6.76537 6.5681 6.76331 6.66615 6.76331 6.7647C6.76331 10.4516 9.64916 13.4496 13.2381 13.5278Z"
            fill="#80A1FF"
          />
        </svg>
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
          <p>sample-dataset</p>
          <ChevronDown />
        </button>
      </aside>
    </header>
  );
}
