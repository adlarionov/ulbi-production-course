import { FC } from 'react';
import classes from './styles.module.scss';
import { classNames } from '@/shared/lib/classNames';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation('not-found');

  return (
    <div className={classNames(classes.notFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};