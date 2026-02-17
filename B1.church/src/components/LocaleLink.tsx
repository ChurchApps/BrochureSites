import { Link, type LinkProps } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

interface LocaleLinkProps extends Omit<LinkProps, "to"> {
  to: string;
}

const LocaleLink = ({ to, ...props }: LocaleLinkProps) => {
  const { localePath } = useLanguage();
  const resolvedTo = to.startsWith("http") || to.startsWith("mailto:") ? to : localePath(to);
  return <Link to={resolvedTo} {...props} />;
};

export default LocaleLink;
