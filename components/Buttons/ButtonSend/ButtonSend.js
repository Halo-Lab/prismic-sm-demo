import classnames from "classnames";

const ButtonSend = ({ mod, Icon }) => {
  return (
    <button type="submit" className={classnames("button", { [mod]: mod })}>
      <div className="button-wrapper">{Icon && <Icon />}</div>
    </button>
  );
};

export default ButtonSend;
