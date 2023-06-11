import React, { ReactElement, useState } from "react";

export default function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function Back() {
    setCurrentStepIndex((prev: number) => {
      if (prev <= 0) {
        return prev;
      }
      return prev - 1;
    });
  }

  function Next() {
    setCurrentStepIndex((prev: number) => {
      if (prev >= steps.length - 1) {
        return prev;
      }
      return prev + 1;
    });
  }

  function Goto(stepIndex: number) {
    setCurrentStepIndex(stepIndex);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    Next,
    Back,
    Goto,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
}
