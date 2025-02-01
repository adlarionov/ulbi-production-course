import { FC } from "react";
import classes from "./styles.module.scss";
import { classNames } from "@/shared/lib/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const { changeLanguage, language } = i18n;
    changeLanguage(language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
      className={classNames(classes.languageSwitcher, {}, [className])}
    >
      {t("Язык")}
    </Button>
  );
};
