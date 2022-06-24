import React from "react";
import s from "./StatsItem.module.scss";

const StatsItem = ({ data }) => {
  const { statsNumber, statsNumberDescription } = data;

  return (
    <div className={s.statsItem}>
      <h4 className={s.statsItemTitle}>{statsNumber}</h4>
      <span className={s.statsItemDesc}>{statsNumberDescription}</span>
    </div>
  );
};

export default StatsItem;
