import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button.attrs<ButtonProps>(
  ({ variant }: { variant: ButtonVariants}) => ({
    className: `px-16 py-4 font-thin font-serif ${
      variant === 'default' ? 'text-black hover:text-white' : 'text-red-700 hover:text-white'
    } rounded-none border border-black transition duration-500 ease-in-out bg-white hover:bg-black`,
  })
)<{ variant: ButtonVariants }>``;

type ButtonVariants = 'default' | 'warning';
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
      {text.toLocaleUpperCase()}
      {/* <button className="border-black bg-black font-serif"></button> */}
    </StyledButton>
  );
};
