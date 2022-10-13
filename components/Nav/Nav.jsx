import {
  useState,
  useEffect,
  useRef,
  Children,
  cloneElement,
} from "react";
import styles from "./Nav.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Triangle from "../icons/TriangleIcon";
import useModal from "../../hooks/useModal";

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
    const screenWidthQuery = window.matchMedia("(max-width:	768px)");

    screenWidthQuery.addEventListener("change", (e) => {
      setIsSmallScreen(e.matches);
    });

    setIsSmallScreen(screenWidthQuery.matches);
  }, []);

  if (!isSmallScreen) {
    return cloneElement(children, { isSmallScreen });
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
              className="absolute top-0 left-1/2 -translate-x-1/2 opacity-0 z-20 shadow-xl"
            >
              {cloneElement(children, { isSmallScreen, closeNav })}
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
      className="absolute right-0 top-7 flex justify-center items-center border border-neutral-200 dark:border-slate-700 bg-neutral-50 dark:bg-slate-800 p-4 rounded-full focus:outline-none z-50 focus:ring ring-palette-yellow ring-offset-4 ring-offset-neutral-50 dark:ring-offset-slate-800 transition"
    >
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      <Triangle rotate={!isOpen} />
    </button>
  );
}

function NavList({ isSmallScreen, children, closeNav=()=>{} }) {

  return (
    <ul
      className={isSmallScreen ? styles.vertical_list : styles.horizontal_list}
    >
      {Children.map(children, (navItem) => {
        if (navItem.type === "a") {
          return (
            <li
              className={
                isSmallScreen ? styles.vertical_item : styles.horizontal_item
              }
            >
              {cloneElement(navItem, {
                className: isSmallScreen
                  ? styles.vertical_link
                  : styles.horizontal_link,
                  href:'#',
                  onClick:(e)=>{navItem.props.onClick(e);closeNav()}
              })}
            </li>
          );
        }
      })}
    </ul>
  );
}

export { Nav, NavList };
