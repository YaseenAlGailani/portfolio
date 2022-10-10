export default function Triangle({ rotate }) {
  return (
    <span
      className={`inline-flex justify-center item-center ${
        rotate && "rotate-180"
      } origin-center transition`}
    >
      <svg
        className="fill-palette-blue-900 dark:fill-neutral-100"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="26"
        viewBox="0 0 28 26"
      >
        <path
          d="M19.286,9.8a3.991,3.991,0,0,0-3.511,2.013L8.932,23.415a4.092,4.092,0,0,0-.038,4.134,4.034,4.034,0,0,0,3.549,2.078H26.129a4.034,4.034,0,0,0,3.549-2.078,4.092,4.092,0,0,0-.038-4.134L22.8,11.808A3.991,3.991,0,0,0,19.286,9.8m0-3.084a7.072,7.072,0,0,1,6.145,3.523L32.274,21.84a7.2,7.2,0,0,1-6.145,10.871H12.444A7.2,7.2,0,0,1,6.3,21.84l6.843-11.606A7.072,7.072,0,0,1,19.286,6.711Z"
          transform="translate(-5.286 -6.711)"
        />
      </svg>
    </span>
  );
}
