interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  /* A Tailwind color, i.e. indigo */
  color: string;
}

export default function Button(props: ButtonProps) {
  let color = props.color ? props.color : "grey";

  return (
    <button
      className={`px-3 py-2 border border-${color}-600 text-${color}-600 text-xs font-medium rounded flex items-center fill-${color}-600 gap-2 hover:bg-${color}-50 hover:fill-${color}-500 transition-all`}
    >
      {props.children}
    </button>
  );
}
