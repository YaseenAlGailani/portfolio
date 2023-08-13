import Triangle from "../icons/TriangleIcon";

export default function ToggleButton({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      className="relative flex justify-center items-center border border-neutral-200 dark:border-slate-700 bg-neutral-50 dark:bg-slate-800 p-4 rounded-full focus:outline-none z-30 focus:ring ring-palette-yellow ring-offset-4 ring-offset-neutral-50 dark:ring-offset-slate-800 transition"
    >
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      <Triangle rotate={!isOpen} />
    </button>
  );
}
