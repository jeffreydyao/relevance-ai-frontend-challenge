interface Params {
  workflow_name: string;
  dataset_id: string;
}

interface Result {
  id: string;
  params: Params;
  status: "error" | "running" | "completed";
  creation_time: string;
}

interface Data {
  results: Result[];
}

export const data: Data = {
  results: [
    {
      id: "ODYyNTU1MGM0NGM5LTRlZjctYjE1Zi1jNGQyYjk3OTBhMWQ-205ec28e-1",
      params: {
        workflow_name: "Vectorize",
        dataset_id: "sample-dataset",
      },
      status: "completed",
      creation_time: "2022-09-08T02:32:43.591Z",
    },
    {
      id: "ODYyNTU1MGM0NGM5LTRlZjctYjE1Zi1jNGQyYjk3OTBhMWQ-7696d154-6",
      params: {
        workflow_name: "Cluster",
        dataset_id: "customer-survey-dataset",
      },
      status: "running",
      creation_time: "2022-09-08T02:32:43.591Z",
    },
    {
      id: "ODYyNTU1MGM0NGM5LTRlZjctYjE1Zi1jNGQyYjk3OTBhMWQ-cc760afc-3",
      params: {
        workflow_name: "AI tagging",
        dataset_id: "new-dataset",
      },
      status: "completed",
      creation_time: "2022-09-08T02:32:43.591Z",
    },
    {
      id: "ODYyNTU1MGM0NGM5LTRlZjctYjE1Zi1jNGQyYjk3OTBhMWQ-e3b37cd4-5",
      params: {
        workflow_name: "Vectorize",
        dataset_id: "sample-dataset",
      },
      status: "completed",
      creation_time: "2022-09-08T02:32:43.591Z",
    },
  ],
};
