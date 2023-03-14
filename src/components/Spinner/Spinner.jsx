import React from 'react';
import classes from "./Spinner.module.css";

export const Spinner = () => {
  const { overlay, ring } = classes;
  return (
    <div className={overlay}>
      <div className={ring} />
    </div>
  );
};
