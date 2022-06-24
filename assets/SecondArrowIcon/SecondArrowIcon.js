import React from "react";
import classnames from "classnames";

const SecondArrowIcon = ({ mod }) => {
  return (
    <div className={classnames("icon", { [mod]: mod })}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6.00012L8 10.0001L4 6.00012"
          stroke="#21334F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SecondArrowIcon;
