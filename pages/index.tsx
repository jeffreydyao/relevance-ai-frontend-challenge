import dayjs from "dayjs";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import toast from "react-hot-toast";
import { ChevronDown, FileIcon, Refresh, ViewIcon } from "../components/icons";
import Status from "../components/Status";
import Workflow from "../components/Workflow";
import { data } from "../mockData";

const Home: NextPage = () => {
  const [mockData, setMockData] = useState(data);

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Head>
        <title>History - Workflows</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center w-full px-8 py-8 max-w-[1144px] items-center gap-6">
        <div className="flex items-center justify-between w-full px-3">
          <h1 className="font-semibold text-2xl text-[#313A53]">
            Workflows history
          </h1>
          <aside className="flex items-center gap-7">
            <button className="text-gray-700 text-[0.8125rem] flex gap-2 items-center ">
              {Refresh}
              Refresh
            </button>

            <div className="text-gray-700 text-[0.8125rem] font-medium flex items-center gap-1">
              <span>Dataset:</span>
              <button className="flex items-center gap-1 ">
                sample-dataset
                <ChevronDown />
              </button>
            </div>
            <div className="text-gray-700 text-[0.8125rem] font-medium flex items-center gap-1">
              <span>Sort by:</span>

              <div className="relative flex items-center gap-1">
                <select
                  className="pr-5 bg-transparent appearance-none cursor-pointer"
                  onChange={(o) => {
                    // Sort on a duplicate copy of the original data
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
                    // Only re-render if data is different to what's displayed
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
                <div className="absolute right-0">
                  <ChevronDown />
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="w-full px-8 py-2 border border-indigo-100 rounded-lg h-max">
          <table className="w-full table-auto">
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
                  <td className="py-6 pr-8 text-[0.8125rem] text-[#1A2136] flex gap-4 items-center">
                    <Status type={item.status} />
                    {/* Only display 'Rerun' button when status is completed. */}
                    {item.status === "completed" ? (
                      <button
                        className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-green-500 transition-all border border-green-500 rounded fill-green-500 hover:bg-green-50"
                        onClick={() => {
                          // Updating state in React re-renders the map
                          let data = { ...mockData };
                          data.results[i].status = "running";
                          setMockData(data);
                          // This violates DRY, but didn't have time to re-factor
                          setTimeout(() => {
                            data = { ...mockData };
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
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-indigo-600 transition-all border border-indigo-600 rounded fill-indigo-600 hover:bg-indigo-50"
                      onClick={() => {
                        navigator.clipboard.writeText(item.id);
                        toast.success("Copied to clipboard", {
                          position: "top-center",
                          className: "text-xs font-medium",
                          icon: "📋",
                        });
                      }}
                    >
                      {FileIcon}
                      Copy workflow ID
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-indigo-600 transition-all border border-indigo-600 rounded fill-indigo-600 hover:bg-indigo-50">
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
