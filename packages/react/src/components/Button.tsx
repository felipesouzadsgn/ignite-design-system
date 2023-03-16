import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  padding: "0 $4",

  "&:disabled": {
    backgroundColor: "$gray200",
  },

  svg: {
    width: "$4",
    height: "$4",
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$ignite500",

        "&:not(:disabled):hover": {
          backgroundColor: "$ignite300",
        },

        "&:disabled": {
          backgroundColor: "$gray200",
        },
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",

        "&:not(:disabled):hover": {
          backgroundColor: "$ignite500",
          color: "$white",
        },

        "&:disabled": {
          backgroundColor: "transparent",
          color: "$gray200",
          borderColor: "$gray200",
        },
      },
      tertiary: {
        color: "$gray100",

        "&:not(:disabled):hover": {
          color: "$white",
        },

        "&:disabled": {
          color: "$gray600",
        },
      },
    },

    size: {
      sm: {
        height: 36,
      },
      md: {
        height: 48,
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

Button.displayName = "Button";
