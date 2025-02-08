import { FC } from 'react';
// Styles
import classes from './styles.module.scss';
import { classNames } from '@/shared/lib/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(classes.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};