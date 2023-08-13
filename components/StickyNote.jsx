export default function StickyNote({ children, classes = "" }) {
  return ( 
    <div className={classes}>
      <div className="bg-amber-200 w-40 h-4 sm:w-44 sm:h-8 shadow-inner-sm border-b border-b-amber-200"></div>
      <div
        className='bg-amber-200 shadow-md rounded-b-sm p-6 pt-1 w-40 h-36 sm:w-44 sm:h-36 sm:text-2xl sm:leading-9 font-handwriting'
        >
        {children}
      </div>
    </div>
  );
}
