import { useEffect, useRef, useCallback, useId } from "react";
import useLockedBody from "./useLockedBody";

const focusFirstDescendant = (element) => {
  for (let i = 0; i < element.childNodes.length; i++) {
    let child = element.childNodes[i];
    if (attemptFocus(child) || focusFirstDescendant(child)) {
      return true;
    }
  }
  return false;
};
const focusLastDescendant = (element) => {
  for (let i = element.childNodes.length - 1; i >= 0; i--) {
    let child = element.childNodes[i];
    if (attemptFocus(child) || focusLastDescendant(child)) {
      return true;
    }
  }
  return false;
};

const attemptFocus = (element) => {
  if (!isFocusable(element)) {
    return false;
  }
  try {
    element.focus();
  } catch (e) {
    // continue regardless of error
  }
  return document.activeElement === element;
};

const isFocusable = (element) => {
  if (element.tabIndex >= 0) {
    return true;
  }
  if (element.tabIndex < 0) {
    return false;
  }
  if (element.disabled) {
    return false;
  }
  switch (element.nodeName) {
    case "A":
      return !!element.href && element.rel != "ignore";
    case "INPUT":
      return element.type != "hidden";
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    default:
      return false;
  }
};

function useModal({
  labelledby: userLabelledby = "",
  describedby: userDescribedby = "",
  role = "alertdialog",
} = {}) {
  const [isOpen, setIsOpen] = useLockedBody(false);

  const modalRef = useRef(null);
  const labelledby = useId();
  const describedby = useId();

  useEffect(() => {
    //move focus to the first focusable child
    if (Boolean(modalRef.current)) {
      focusFirstDescendant(modalRef.current);
    }
  });

  // keep focus within modal until closed
  useEffect(() => {
    const { current: modalNode } = modalRef;
    // keep a reference to the parentNode for the cleanup
    const modalParent = modalNode?.parentNode;

    const pre = document.createElement("div");
    const post = document.createElement("div");
    pre.tabIndex = 0;
    post.tabIndex = 0;

    if (modalNode) {
      pre.addEventListener("focus", () => {
        focusLastDescendant(modalNode);
      });
      post.addEventListener("focus", () => {
        focusFirstDescendant(modalNode);
      });
      modalParent.insertBefore(pre, modalNode);
      modalParent.appendChild(post);
    }

    return () => {
      if (modalParent) {
        modalParent.removeChild(pre);
        modalParent.removeChild(post);
      }
    };
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const getModalProps = useCallback(() => {
    const modalClickHandle = (event) => {
      event.stopPropagation();
    };
    const modalEscapeKeyDownHandle = (event) => {
      if (event.which === 27) {
        closeModal();
      }
    };

    return {
      ref: modalRef,
      role: role,
      "aria-modal": true,
      "aria-labelledby": userLabelledby || labelledby,
      "aria-describedby": userDescribedby || describedby,
      onClick: modalClickHandle,
      onKeyDown: modalEscapeKeyDownHandle,
    };
  }, [
    role,
    userLabelledby,
    labelledby,
    userDescribedby,
    describedby,
    closeModal,
  ]);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
    getModalProps,
    ...(!userLabelledby && { labelledby }),
    ...(!userDescribedby && { describedby }),
  };
}

export default useModal;
