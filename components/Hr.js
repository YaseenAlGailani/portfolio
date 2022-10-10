export default function Hr({ className = "", light = false }) {
  return (
    <hr
      className={`border-neutral-200 dark:border-slate-700 ${className}`}
    />
  );
}
