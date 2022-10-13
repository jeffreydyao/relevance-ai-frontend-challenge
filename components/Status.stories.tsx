import Status from "./Status";

export const Completed = () => {
  <Status type="completed" />;
};

export const Running = () => {
  <Status type="running" />;
};
Running.storyName = "In progress";
