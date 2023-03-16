import { ComponentProps } from "react";
import { Check } from "phosphor-react";
import { Container, Indicator } from "./styles";

export function Checkbox(props: CheckboxProps) {
  return (
    <Container {...props}>
      <Indicator asChild>
        <Check weight="bold" />
      </Indicator>
    </Container>
  );
}

export interface CheckboxProps extends ComponentProps<typeof Container> {}

Checkbox.displayName = "Checkbox";
