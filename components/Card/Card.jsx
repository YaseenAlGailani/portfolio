import { useRef, useEffect } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import CloseIcon from "../icons/CloseIcon";
import { motion, useMotionValue } from "framer-motion";
import useModal from "../../hooks/useModal";

export default function Card({ imageSrc, title, children }) {
  const {
    isOpen,
    openModal: openCard,
    closeModal: closeCard,
    getModalProps,
    labelledby,
  } = useModal({
    role: "dialog",
  });

  const zIndex = useMotionValue(isOpen ? 9 : 0);

  function setzIndex() {
    zIndex.set(9);
  }
  function unsetzIndex() {
    zIndex.set(0);
  }

  useEffect(() => {
    useEffect;
  });

  return (
    <li
      className={`relative px-0 py-4 md:p-6 h-60 md:h-[460px] ${styles.card_width}`}
    >
      <div
        className={`flex items-start mx-auto w-full h-full ${
          isOpen
            ? "fixed top-0 left-0 right-0 bg-[#000000ac] z-30 overflow-scroll py-12"
            : "relative"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          closeCard();
        }}
      >
        <motion.div
          layout
          style={{ zIndex, borderRadius: 24 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          onLayoutAnimationStart={setzIndex}
          onLayoutAnimationComplete={unsetzIndex}
          className={`relative translate-y-0 bg-neutral-50 dark:bg-slate-800 rounded-3xl overflow-x-hidden z-0
          ${
            isOpen
              ? "fixed max-w-4xl mx-auto h-auto overflow-hidden"
              : "w-full h-full overflow-hidden"
          }
          `}
        >
          <motion.h3
            layout
            id={labelledby}
            className="absolute top-4 left-4 z-30 text-lg sm:text-3xl font-display sm:leading-snug text-palette-blue-900 w-96 max-w-full pr-12"
          >
            <span className="px-2 bg-palette-yellow">{title}</span>
          </motion.h3>
          <motion.div
            layout
            style={{ borderTopRadius: 24 }}
            className={`w-screen max-h-[220px] md:max-h-[420px] overflow-hidden max-w-4xl`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Image
              aria-hidden={true}
              src={imageSrc}
              alt=""
              placeholder="blur"
              layout="responsive"
            />
          </motion.div>
          {isOpen && (
            <div {...getModalProps()}>
              <CloseButton onClick={closeCard} />
              <motion.div
                animate={{ opacity: 1 }}
                transition={{ opacity: { delay: 0, duration: 0.6 } }}
                className="opacity-0 p-6 dark:text-neutral-50 w-screen max-w-4xl"
              >
                <div>{children}</div>
              </motion.div>
            </div>
          )}
        </motion.div>
        {!isOpen && (
          <button
            className="absolute top-0 right-0 bottom-0 left-0 z-20 w-full rounded-3xl hover:ring focus:ring ring-palette-yellow ring-offset-8 ring-offset-neutral-50 dark:ring-offset-slate-800 focus:outline-none transition"
            onClick={(e) => {
              e.stopPropagation();
              openCard();
            }}
          >
            <span className="sr-only">{title}, view project details</span>
          </button>
        )}
      </div>
    </li>
  );
}

function CloseButton({ onClick }) {
  return (
    <motion.button
    animate={{opacity:1}}
    transition={{opacity:{duration:0.7}}}
      className="absolute opacity-0 top-2 right-2 rounded-full p-4 bg-neutral-100 dark:bg-slate-800 hover:bg-neutral-200 active:bg-neutral-300 dark:hover:bg-slate-700 dark:active-bg-slate-900"
      onClick={onClick}
    >
      <span aria-hidden={true}>
        <CloseIcon />
      </span>
      <span className="sr-only">Close card</span>
    </motion.button>
  );
}
