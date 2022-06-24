import classnames from "classnames";

const ButtonPrimary = ({
  buttonLink = "https://www.halo-lab.com/",
  buttonText = "Read this article",
  mod,
  Icon,
}) => {
  return (
    <a
      href={buttonLink}
      className={classnames("button", { [mod]: mod })}
      rel="nofollow"
    >
      <div className="button-wrapper">
        {buttonText}
        {Icon && <Icon />}
      </div>
    </a>
  );
};

export default ButtonPrimary;
