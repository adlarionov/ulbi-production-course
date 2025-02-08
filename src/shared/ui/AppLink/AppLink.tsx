// styles
import { classNames } from '@/shared/lib/classNames';
import classes from './styles.module.scss';
// components
import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...rest
}) => {
  return (
    <Link
      to={to}
      className={classNames(classes.AppLink, {}, [className, classes[theme]])}
      {...rest}
    >
      {children}
    </Link>
  );
};
