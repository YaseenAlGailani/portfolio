export default function StickyNote({ children, classes = "" }) {
  return (
    <div
      className={`bg-amber-200 shadow-md rotate-3 rounded-sm p-6 w-40 h-40 sm:w-52 sm:h-52 sm:text-2xl sm:leading-9 font-handwriting ${classes}`}
    >
      {children}
    </div>
  );
}
