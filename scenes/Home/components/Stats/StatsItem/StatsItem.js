import React from "react";
import s from "./StatsItem.module.scss";

const StatsItem = ({ data }) => {
  const { statTitle, statNumber } = data;

  return (
    <div className={s.statsItem}>
      <h4 className={s.statsItemTitle}>{statNumber}+</h4>
      <span className={s.statsItemDesc}>{statTitle}</span>
    </div>
  );
};

export default StatsItem;
