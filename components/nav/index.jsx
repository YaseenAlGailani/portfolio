import { useState, useEffect, Children, cloneElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useModal from "../../hooks/useModal";
import NavList from "./_navList";
import ToggleButton from "./_toggleButton";
import ThemeToggle from "./_themeToggle";

function Nav({ children }) {
  if (Children.count(children) !== 1 && children.type !== NavList) {
    throw new Error("Nav must have a single child of type NavList");
  }

  const [isSmallScreen, setIsSmallScreen] = useState(true);
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
      <ToggleButton onClick={toggleNav} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 bg-[rgba(0,0,0,0.8)] z-20 h-screen overflow-auto"
            onClick={closeNav}
          >
            <motion.div
              animate={{ translateY: "6rem", opacity: 1 }}
              exit={{ translateY: "1rem", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 800 }}
              className="opacity-0 w-screen max-w-[80vw] mx-auto"
              {...getModalProps()}
            >
              {cloneElement(children, { isSmallScreen, closeNav })}
              <ThemeToggle
                onClick={closeNav}
                classes="mt-4 mx-auto py-6 dark:text-neutral-50 text-center bg-neutral-50 dark:bg-slate-800 rounded-2xl w-screen max-w-[80vw] z-50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export { Nav, NavList };
