import { FC, useState } from "react";
import classes from "./styles.module.scss";
import { classNames } from "@/shared/lib/classNames";
import { Button } from "@/shared/ui/Button/Button";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        classes.sidebar,
        { [classes.collapsed]: isCollapsed },
        [className]
      )}
    >
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
      <Button onClick={handleToggle}>{t("Скрыть")}</Button>
    </div>
  );
};
