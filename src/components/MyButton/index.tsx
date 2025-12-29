import { Button, ButtonProps } from "@chakra-ui/react";
import { MouseEvent } from "react";

export interface AppButtonProps extends ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function MyButton({ children, onClick, ...rest }: AppButtonProps) {
  return (
    <Button onClick={onClick} {...rest}>
      {children}
    </Button>
  );
}
