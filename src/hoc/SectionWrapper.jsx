import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} relative z-0 max-w-7xl mx-auto`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {/* Render the passed component */}
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
