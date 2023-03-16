import { ComponentProps, ElementRef, forwardRef } from "react";
import { Container, Input, Prefix } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <Container>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </Container>
    );
  }
);

TextInput.displayName = "TextInput";
