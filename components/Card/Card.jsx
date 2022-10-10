import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import CloseIcon from "../icons/CloseIcon";
import Tilt from "../Tilt";
import { motion, useMotionValue } from "framer-motion";
import useLockedBody from "../../hooks/useLockedBody"

export default function Card({ imageSrc, alt, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [locked, setLocked] = useLockedBody();

  const openCard = () => {
    setIsOpen(true);
    setLocked(true);
  };

  const closeCard = () => {
    setIsOpen(false);
    setLocked(false);
  };

  const zIndex = useMotionValue(isOpen ? 200 : 0);

  function checkZIndex(latest) {
    console.log('HEEEEEEYYY')
    if (isOpen) {
      zIndex.set(200);
    } else if (!isOpen && latest.scaleX < 1.01) {
      zIndex.set(0);
    }
  }


  return (
    <li
      className={`relative px-0 py-4 md:p-6 h-60 md:h-[460px] ${styles.card_width}`}
      onClick={closeCard}
    >
      <div
        className={`flex items-center mx-auto w-full h-full ${
          isOpen
            ? "fixed top-0 left-0 right-0 ] bg-[#000000ac] z-40"
            : "relative"
        }`}
      >
        <motion.div
          layout
          style={{ zIndex }}
          onUpdate={checkZIndex}
          className={`relative translate-y-0 bg-neutral-50 dark:bg-slate-800 rounded-3xl overflow-x-hidden 
          ${
            isOpen
              ? "max-w-4xl mx-auto h-auto max-h-[80vh] overflow-x-hidden"
              : "w-full h-full overflow-hidden"
          }
          `}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {isOpen && <CloseButton onClick={closeCard} />}
          <motion.div
            layout
            className={` w-screen max-h-[420px] overflow-hidden rounded-t-3xl ${
              !isOpen && "rounded-3xl"
            }`}
          >
            <Image src={imageSrc} alt={alt} layout="fixed" />
          </motion.div>
          <motion.div
            layout
            className="p-6 dark:text-neutral-50 w-screen max-w-4xl"
          >
            {children}
          </motion.div>
        </motion.div>
        {!isOpen && (
          <button
            className="absolute top-0 right-0 bottom-0 left-0"
            onClick={(e) => {
              e.stopPropagation();
              openCard();
            }}
          >
            <span className="sr-only">View project details</span>
          </button>
        )}
      </div>
    </li>
  );
}

function CloseButton({ onClick }) {
  return (
    <motion.button
    layout  
      className="absolute top-2 right-2 z-50 rounded-full p-4 bg-neutral-100 dark:bg-slate-800 hover:bg-neutral-200 active:bg-neutral-300 dark:hover:bg-slate-700 dark:active-bg-slate-900"
      onClick={onClick}
    >
      <CloseIcon />
      <span className="sr-only">Close</span>
    </motion.button>
  );
}
