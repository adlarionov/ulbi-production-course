import { FC } from 'react';
import classes from './styles.module.scss';
import { classNames } from '@/shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(classes.pageError, {}, [className])}>
      <p>
        {t('Произошла непредвиденная ошибка...')}
      </p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};