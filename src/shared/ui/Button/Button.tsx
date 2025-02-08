import { classNames } from '@/shared/lib/classNames';
import { type ButtonHTMLAttributes, type FC } from 'react';
import classes from './styles.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...rest
}) => {
  return (
    <button
      className={classNames(classes.button, {}, [className, classes[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};
