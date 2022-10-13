import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { data } from "../mockData";
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

      <main className="flex flex-col justify-center w-full px-8 py-8 max-w-[1144px] items-center">
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

        <div className="w-full h-max px-8 py-2 rounded-lg border border-indigo-100">
          <table className="table-auto w-full">
            <thead className="border-b-[1px] border-indigo-100">
              <tr className="text-[0.8125rem] text-[#9CA4BA] text-left">
                <th className="pb-3">Workflow / dataset</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Created at</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {data.results.map((item) => (
                <tr key={item.id}>
                  <td>
                    {item.params.workflow_name}
                    {item.params.dataset_id}
                  </td>
                  <td>{item.status}</td>
                  <td>{item.creation_time}</td>
                  <td>Buttons here</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Home;
