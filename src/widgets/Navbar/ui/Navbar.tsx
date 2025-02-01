import { FC } from "react";
// styles
import { classNames } from "@/shared/lib/classNames";
import classes from "./styles.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink to={"/"} className={classes.mainLink}>
          {t("Главная")}
        </AppLink>
        <AppLink to={"/about"}>{t("О нас")}</AppLink>
      </div>
    </div>
  );
};
