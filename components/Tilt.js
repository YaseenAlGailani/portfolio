import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

export default function Tilt({ children, disabled }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      return;
    }

    const tiltNode = tiltRef.current;
    VanillaTilt.init(tiltNode, {
      max: 5,
      speed: 200,
    });
    return () => tiltNode.vanillaTilt.destroy();
  }, [disabled]);

  return !disabled ? (
    <div ref={tiltRef} className="tilt-root">
      {children}
    </div>
  ) : (
    children
  );
}
