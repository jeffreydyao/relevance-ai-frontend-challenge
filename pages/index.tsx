import dayjs from "dayjs";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import toast from "react-hot-toast";
import { FileIcon, ViewIcon } from "../components/icons";
import Status from "../components/Status";
import Workflow from "../components/Workflow";
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
  const [mockData, setMockData] = useState(data);

  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <Head>
        <title>History - Workflows</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center w-full px-8 py-8 max-w-[1144px] items-center gap-6">
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

              <div className="flex items-center gap-1 relative">
                <select
                  className="appearance-none bg-transparent pr-7"
                  onChange={(o) => {
                    let data = { ...mockData };

                    if (o.target.value === "Latest") {
                      data.results.sort(
                        (a, b) =>
                          Number(new Date(a.creation_time)) -
                          Number(new Date(b.creation_time))
                      );
                    } else if (o.target.value === "Oldest") {
                      data.results.sort(
                        (a, b) =>
                          Number(new Date(b.creation_time)) -
                          Number(new Date(a.creation_time))
                      );
                    } else if (o.target.value === "Workflow (A-Z)") {
                      data.results.sort((a, b) =>
                        a.params.workflow_name.localeCompare(
                          b.params.workflow_name
                        )
                      );
                    } else if (o.target.value === "Dataset ID (A-Z)") {
                      data.results.sort((a, b) =>
                        a.params.dataset_id.localeCompare(b.params.dataset_id)
                      );
                    }

                    if (data !== mockData) {
                      setMockData(data);
                    }
                  }}
                >
                  <option>Latest</option>
                  <option>Oldest</option>
                  <option>Workflow (A-Z)</option>
                  <option>Dataset ID (A-Z)</option>
                </select>
                <ChevronDown className="absolute right-0 -z-10" />
              </div>
            </div>
          </aside>
        </div>

        <div className="w-full h-max px-8 py-2 rounded-lg border border-indigo-100">
          <table className="table-auto w-full">
            <thead>
              <tr className="text-[0.8125rem] text-[#9CA4BA] text-left">
                <th className="pt-4 pb-3 font-medium">Workflow / dataset</th>
                <th className="pt-4 pb-3 font-medium">Status</th>
                <th className="pt-4 pb-3 font-medium">Created at</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {mockData.results.map((item, i) => (
                <tr key={item.id} className="border-t-[1px] border-indigo-100">
                  <td className="py-6">
                    <Workflow
                      name={item.params.workflow_name}
                      datasetId={item.params.dataset_id}
                    />
                  </td>
                  <td className="py-6 text-[0.8125rem] text-[#1A2136] flex gap-4 items-center">
                    <Status type={item.status} />
                    {item.status === "completed" ? (
                      <button
                        className="px-3 py-2 border border-green-500 text-green-500 text-xs font-medium rounded flex items-center fill-green-500 gap-2 hover:bg-green-50 transition-all"
                        onClick={() => {
                          const data = { ...mockData };
                          data.results[i].status = "running";
                          setMockData(data);

                          setTimeout(() => {
                            const data = { ...mockData };
                            data.results[i].status = "completed";
                            setMockData(data);
                          }, 5000);
                        }}
                      >
                        Rerun
                      </button>
                    ) : null}
                  </td>
                  <td className="py-6 text-[0.8125rem] text-[#1A2136]">
                    {dayjs(item.creation_time).format("YYYY.MM.DD. hh:mm:ss")}
                  </td>
                  <td className="py-6 text-[0.8125rem] text-[#1A2136] flex justify-end items-center gap-4">
                    <button
                      className="px-3 py-2 border border-indigo-600 text-indigo-600 text-xs font-medium rounded flex items-center fill-indigo-600 gap-2 hover:bg-indigo-50  transition-all"
                      onClick={() => {
                        navigator.clipboard.writeText(item.id);
                        toast.success("Copied to clipboard", {
                          position: "top-center",
                          className: "text-xs",
                          icon: "📋",
                        });
                      }}
                    >
                      {FileIcon}
                      Copy workflow ID
                    </button>
                    <button className="px-3 py-2 border border-indigo-600 text-indigo-600 text-xs font-medium rounded flex items-center fill-indigo-600 gap-2 hover:bg-indigo-50  transition-all">
                      {ViewIcon}
                      View Parameters
                    </button>
                  </td>
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
