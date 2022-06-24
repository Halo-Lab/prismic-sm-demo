import s from "./Stats.module.scss";
import StatsItem from "./StatsItem/StatsItem";

const Stats = ({ data }) => {
  const { stats, title, category } = data.stats;

  const statsItems = stats.map((item, index) => {
    return <StatsItem data={item} key={index} />;
  });

  return (
    <div className="section">
      <div className={s.stats}>
        <div className="container">
          <span className="section-category">{category}</span>
          <h3 className="section-title">{title}</h3>
          <div className="section-content">
            <div className={s.statsList}>{statsItems}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
