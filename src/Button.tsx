import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { CgSpinner } from 'react-icons/cg';

const StyledButton = styled.button.attrs<ButtonProps>(
  ({ variant }: { variant: ButtonVariants}) => ({
    className: `w-80 px-16 py-4 font-thin font-serif ${
      variant === 'loading' 
      ? 'text-white bg-nc-sage' 
      : 'text-primary bg-primary-bg hover:text-white hover:bg-nc-sage'
    } rounded-none border border-primary transition duration-500 ease-in-out`,
  })
)<{ variant: ButtonVariants }>``;

type ButtonVariants = 'default' | 'loading';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
  text,
  variant = 'default',
  ...rest
}) => {
  return (
    <StyledButton variant={variant} {...rest}>
      
      {
        variant !== 'loading' 
        ? null
        : <CgSpinner className="h-6 w-6 animate-spin inline-flex mx-2" title="loading"/> 
      }
      {text.toLocaleUpperCase()}
    </StyledButton>

  );
};
