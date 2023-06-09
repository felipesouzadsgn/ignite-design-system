import { Container, Label, Step, Steps } from "./styles";

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <Container>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ "--steps-size": size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />;
        })}
      </Steps>
    </Container>
  );
}

export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

MultiStep.display = "MultiStep";
