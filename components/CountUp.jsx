"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function CountUp({ from = 0, to, duration = 2, suffix = "", ...props }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(from);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate: (val) => setDisplayed(Math.round(val)),
    });

    return () => controls.stop();
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} {...props}>
      {displayed}{suffix}
    </span>
  );
}
