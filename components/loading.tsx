"use client";

import React, { useEffect, useState } from "react";
import { motion, type Variants, type Variant } from "framer-motion";
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.0,
    },
  },
};

const childHidden: Variant = { opacity: 0, y: 14, filter: "blur(10px)" };
const childVisible: Variant = {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
  transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
};
const childVariants: Variants = { hidden: childHidden, visible: childVisible };

export default function PageLoaderOverlay() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 2200);
    const t2 = setTimeout(() => setVisible(false), 2220);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  const text = "Make it work, make it right, make it fast";

  return (
    <div
      className={`fixed inset-0 z-[9999] grid place-items-center bg-vintage text-vintage transition-opacity duration-200 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
      aria-live="polite"
      role="status"
    >
      <div className="flex flex-col items-center gap-6 p-6">
        <div className="relative w-10 h-10" aria-hidden="true">
          <div className="absolute w-full h-full rounded-full border-2 border-orange-600 animate-ping opacity-75"></div>
          <div
            className="absolute w-6 h-6 top-2 left-2 rounded-full border-2 border-orange-600 animate-ping opacity-50"
            style={{ animationDelay: "0.4s" }}
          ></div>
          <div className="relative rounded-full h-full w-full border-2 border-orange-600"></div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl font-semibold leading-relaxed text-lg md:text-2xl"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {text.split(" ").map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              variants={childVariants}
              style={{ marginRight: 10, marginTop: 8 }}
            >
              {w}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
