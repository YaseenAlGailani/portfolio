import { useState, useEffect, Children, cloneElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Triangle from "./icons/TriangleIcon";
import useModal from "../hooks/useModal";
import SunIcon from "../components/icons/SunIcon";
import MoonIcon from "../components/icons/MoonIcon";

function Nav({ children }) {
  if (Children.count(children) !== 1 && children.type !== NavList) {
    throw new Error("Nav must have a single child of type NavList");
  }

  const [isSmallScreen, setIsSmallScreen] = useState();
  const {
    isOpen,
    toggleModal: toggleNav,
    closeModal: closeNav,
    getModalProps,
  } = useModal({ role: "dialog" });

  useEffect(() => {
    const screenWidthQuery = window.matchMedia("(max-width:	1024px)");

    screenWidthQuery.addEventListener("change", (e) => {
      setIsSmallScreen(e.matches);
    });

    setIsSmallScreen(screenWidthQuery.matches);
  }, []);

  if (!isSmallScreen) {
    return (
      <div className="grid grid-flow-col gap-12 items-center">
        {cloneElement(children, { isSmallScreen })}
        <ThemeToggle iconOnly />
      </div>
    );
  }

  return (
    <nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeNav}
            className="fixed flex justify-center items-center top-0 right-0 bottom-0 left-0 p-10 bg-[rgba(0,0,0,0.8)] opacity-0 z-10"
          ></motion.div>
        )}
      </AnimatePresence>
      <div {...getModalProps()}>
        <ToggleButton onClick={toggleNav} isOpen={isOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              animate={{ translateY: "9rem", opacity: 1 }}
              exit={{ translateY: "1rem", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 800 }}
              className="absolute top-0 opacity-0 z-20 left-0 right-0"
            >       
              <div>{cloneElement(children, { isSmallScreen, closeNav })}</div>
                <ThemeToggle
                  onClick={closeNav}
                  classes="mt-4 mx-auto py-8 dark:text-neutral-50 text-center bg-neutral-50 dark:bg-slate-800 rounded-2xl w-screen max-w-[80vw] z-50"
                />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function ToggleButton({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-7 flex justify-center items-center border border-neutral-200 dark:border-slate-700 bg-neutral-50 dark:bg-slate-800 p-4 rounded-full focus:outline-none z-20 focus:ring ring-palette-yellow ring-offset-4 ring-offset-neutral-50 dark:ring-offset-slate-800 transition"
    >
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      <Triangle rotate={!isOpen} />
    </button>
  );
}

function NavList({ isSmallScreen, children, closeNav = () => {} }) {
  return (
    <ul
      className={
        isSmallScreen
          ? "mx-auto dark:text-neutral-50 text-center bg-neutral-50 dark:bg-slate-800 rounded-2xl w-screen max-w-[80vw] z-50"
          : "grid grid-flow-col gap-12 md:text-xl font-bold text-palette-blue-900 dark:text-palette-grey -mr-3"
      }
    >
      {Children.map(children, (navItem) => {
        if (navItem.type === "a") {
          return (
            <li
              className={
                isSmallScreen
                  ? "border-b last:border-b-0 dark:border-slate-700 dark:text-neutral-50"
                  : undefined
              }
            >
              {cloneElement(navItem, {
                className: isSmallScreen
                  ? "block py-12 dark:text-neutral-50"
                  : "relative py-4 px-3 dark:text-neutral-50 hover:before:w-full before:w-0 before:h-full dark:before:bg-palette-blue-900 before:bg-palette-grey  before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:rounded-lg before:transition-all before:z-[-1] after:w-full after:opacity-0 hover:after:opacity-100 after:h-2 after:bg-palette-yellow after:content-[''] after:block after:absolute hover:after:-bottom-4 after:bottom-0 after:rounded-sm after:transition-all",
                href: "#",
                onClick: (e) => {
                  closeNav();
                  navItem.props.onClick(e);
                },
              })}
            </li>
          );
        }
      })}
    </ul>
  );
}

export { Nav, NavList };

function ThemeToggle({ iconOnly, onClick = null, classes="" }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = (e) => {
    const html = document.documentElement;
    const currentIsDark = !isDark;
    setIsDark(currentIsDark);
    localStorage.setItem("theme", currentIsDark ? "dark" : "light");

    html.classList.contains("dark")
      ? html.classList.remove("dark")
      : html.classList.add("dark");
  };

  return (
    <button
      onClick={() => {
        toggleTheme(), onClick?.();
      }}
      className={`flex items-center justify-center ${iconOnly ? "border" : ""} border-neutral-200 p-4 rounded-full hover hover:ring ring-palette-yellow ring-offset-4 ring-offset-neutral-50 dark:ring-offset-slate-800 transition ${classes}`}
    >
      <span className={iconOnly ? "sr-only" : "mr-4"}>
        {isDark ? "Light theme" : "Dark theme"}
      </span>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
