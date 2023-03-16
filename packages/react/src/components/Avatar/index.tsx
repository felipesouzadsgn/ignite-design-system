import { User } from "phosphor-react";
import { ComponentProps } from "react";
import { AvatarFallback, AvatarImage, Container } from "./styles";

export function Avatar(props: AvatarProps) {
  return (
    <Container>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </Container>
  );
}

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

Avatar.displayName = "Avatar";
