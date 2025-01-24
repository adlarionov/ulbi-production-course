import { FC } from "react";
// styles
import { classNames } from "@/shared/lib/classNames";
import classes from "./styles.module.scss";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink to={"/"} className={classes.mainLink}>
          Главная
        </AppLink>
        <AppLink to={"/about"}>О нас</AppLink>
      </div>
    </div>
  );
};
