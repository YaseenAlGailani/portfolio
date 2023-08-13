
import { Children, cloneElement } from "react";

export default function NavList({ isSmallScreen, children, closeNav = () => {} }) {
  return (
    <ul
      className={
        isSmallScreen
          ? "dark:text-neutral-50 text-center bg-neutral-50 dark:bg-slate-800 rounded-2xl"
          : "grid grid-flow-col gap-12 md:text-xl font-bold text-palette-blue-900 dark:text-palette-grey -mr-3 cursor-pointer"
      }
    >
      {Children.map(children, (navItem) => {
        if (navItem.type === "a") {
          return (
            <li
              className={
                isSmallScreen
                  ? "flex border-b last:border-b-0 dark:border-slate-700 dark:text-neutral-50"
                  : undefined
              }
            >
              {cloneElement(navItem, {
                className: isSmallScreen
                  ? "flex py-6 dark:text-neutral-50 w-full justify-center"
                  : "flex relative py-4 px-3 dark:text-neutral-50 hover:before:w-full before:w-0 before:h-full dark:before:bg-palette-blue-900 before:bg-palette-grey  before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:rounded-lg before:transition-all before:z-[-1] after:left-0 after:w-full after:opacity-0 hover:after:opacity-100 after:h-2 after:bg-palette-yellow after:content-[''] after:block after:absolute hover:after:-bottom-4 after:bottom-0 after:rounded-sm after:transition-all",
                onClick: (e) => {
                  closeNav();
                  navItem.props.onClick && navItem.props.onClick(e);
                },
              })}
            </li>
          );
        }
      })}
    </ul>
  );
}
