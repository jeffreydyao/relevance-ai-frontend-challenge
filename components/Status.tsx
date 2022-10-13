import { CompletedIcon, Spinner } from "./icons";

interface StatusProps {
  type: "running" | "completed";
}

export function Completed() {
  return (
    <div className="w-full flex items-center gap-2">
      {CompletedIcon}
      <span className="text-[0.8125rem] font-medium">Completed</span>
    </div>
  );
}

export function Running() {
  return (
    <div className="w-full max-w-[180px] flex items-center justify-center border border-indigo-100 bg-indigo-50 gap-3 px-3 py-1 rounded">
      {Spinner}
      <span className="text-indigo-400 font-medium text-xs">In progress</span>
    </div>
  );
}

/**
 * Displays the status of an action.
 *
 * ## API
 * - `type` - 'running' | 'completed'` - An action can
 * either be running, completed or halt with an error.
 * > Error state hasn't been implemented in the mock.
 */
export default function Status(props: StatusProps) {
  let status;

  switch (props.type) {
    case "running":
      status = <Running />;
      break;
    case "completed":
      status = <Completed />;
      break;
    default:
      status = <Running />;
      break;
  }

  return status;
}
