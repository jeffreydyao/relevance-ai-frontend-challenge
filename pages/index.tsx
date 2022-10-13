import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
const ChevronDown = dynamic(
  () => import("@iconscout/react-unicons/icons/uil-angle-down"),
  { ssr: false }
);
const Refresh = dynamic(
  () => import("@iconscout/react-unicons/icons/uil-redo"),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <Head>
        <title>History - Workflows</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center w-full px-8 py-8 max-w-[1144px] items-center">
        <div className="flex w-full justify-between items-center px-3">
          <h1 className="font-semibold text-2xl text-[#313A53]">
            Workflows history
          </h1>
          <aside className="flex gap-7 items-center">
            <button className="text-gray-700 text-[0.8125rem] flex gap-2 items-center">
              <Refresh size={12} />
              Refresh
            </button>

            <div className="text-gray-700 text-[0.8125rem] font-medium flex items-center gap-1">
              <p>Dataset:</p>
              <button className="flex items-center gap-1">
                sample-dataset
                <ChevronDown />
              </button>
            </div>
            <div className="text-gray-700 text-[0.8125rem] font-medium flex items-center gap-1">
              <p>Sort by:</p>
              <button className="flex items-center gap-1">
                latest
                <ChevronDown />
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Home;
