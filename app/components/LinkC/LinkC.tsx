import classNames from "classnames";
import { LinkComponentProps } from "./LinkC.types";

const LinkC: React.FC<LinkComponentProps> = ({
  href,
  children,
  external = false,
  className,
}) => {
  const isMailOrTel = href.startsWith("mailto:") || href.startsWith("tel:");

  const defaultClasses =
    "text-blue-600 hover:text-blue-800 focus:text-blue-800";

  const combinedClasses = classNames(defaultClasses, className);

  const content = children
    ? children
    : isMailOrTel
      ? `${href.split(":")[1]}`
      : href;

  if (external && !isMailOrTel) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }
  return (
    <a href={href} className={combinedClasses}>
      {content}
    </a>
  );
};
export default LinkC;
