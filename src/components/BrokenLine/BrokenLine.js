import React from 'react';
import styles from "../BrokenLine/BrokenLine.module.scss";

const BrokenLine = () => {
  return (
    <div className={styles.blockLine}>
      <div className={styles.lineBlue}/>
      <div className={styles.lineLightBlue}/>
      <div className={styles.lineGrey}/>
    </div>
  );
};

export default BrokenLine;