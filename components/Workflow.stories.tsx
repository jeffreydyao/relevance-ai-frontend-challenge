import Workflow from "./Workflow";

export const Vectorize = () => (
  <Workflow name="Vectorize" datasetId="sample-dataset" />
);

export const Cluster = () => (
  <Workflow name="Cluster" datasetId="customer-survey-dataset" />
);

export const Tagging = () => (
  <Workflow name="AI tagging" datasetId="new-dataset" />
);
Tagging.storyName = "AI tagging";

export const Default = () => (
  <Workflow name="Stable Diffusion" datasetId="museum-dataset" />
);
