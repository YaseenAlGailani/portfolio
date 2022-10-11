export default function FreeCircle({ children }) {
  return (
    <div className="relative">
      <span className="absolute top-0 left-0 translate-x-[-32%] translate-y-[-32%] z-[-1]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="94"
          height="94"
          viewBox="0 0 94 94"
        >
          <path
            d="M23.166,0S1.071,14.5.046,37.841,15.509,65.715,24.724,65.922,45.766,67.18,56.157,47.668s-2.809-32.8-9.913-37.487A32.214,32.214,0,0,0,24.724,5.41C17.713,6.41,10.189,11.245.046,16.7"
            transform="translate(9.119 20.646) rotate(-16)"
            fill="none"
            stroke="#f4d152"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
          <path
            className="dark:stroke-palette-yellow"
            d="M562.831,3033.661s-25.428,4.151-26.418,27.356,18.5,30.9,27.4,31.1,20.808-1.689,30.846-21.086-2.714-32.61-9.576-37.267-21.148-12.248-43.267,0"
            transform="translate(1897.755 -2454.672) rotate(47)"
            fill="none"
            stroke="#343750"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
        </svg>
      </span>
      {children}
    </div>
  );
}
