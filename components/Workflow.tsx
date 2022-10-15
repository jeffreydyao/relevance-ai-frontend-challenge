import { ClusterIcon, TaggingIcon, VectorizeIcon } from "./icons";

interface WorkflowProps {
  // This type is too brittle and wouldn't scale (i.e adding all the individual types for each workflow).
  // This is only for the purposes of this challenge to keep things simple.
  // In production, this would be a string and an additional 'iconUrl' string would be added.
  name: string | "Vectorize" | "Cluster" | "AI tagging";
  datasetId: string;
}

/**
 * Displays a compact Workflow chip containing:
 * - workflow icon (automatically matched to name)
 * - workflow name
 * - dataset ID
 *
 * ## API
 * - `name` - `string` - Workflow name
 * - `datasetId` - `string` - ID of the dataset processed.
 */
export default function Workflow(props: WorkflowProps) {
  let icon;

  switch (props.name) {
    case "Vectorize":
      icon = VectorizeIcon;
      break;
    case "Cluster":
      icon = ClusterIcon;
      break;
    case "AI tagging":
      icon = TaggingIcon;
      break;
    default:
      icon = undefined;
  }

  return (
    <div className="flex items-center gap-3">
      {icon ? (
        <>{icon}</>
      ) : (
        <div className="w-8 h-8 bg-indigo-100 rounded-lg" />
      )}
      <div className="flex-col h-full justify-between text-[0.8125rem] font-semibold">
        <p className="text-gray-800">{props.name}</p>
        <span className="text-[#9CA4BA]">{props.datasetId}</span>
      </div>
    </div>
  );
}
