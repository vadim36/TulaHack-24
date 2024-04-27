import { ReactElement, useState } from "react";

interface UseMultistepFormHook {
    currentIndex: number,
    stepForm: ReactElement,
    steps: ReactElement[],
    next: () => void,
    back: () => void,
    isFirstStep: boolean,
    isLastStep: boolean
}

export default function useMultistepForm(steps: ReactElement[]):UseMultistepFormHook {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    function next() {
        return setCurrentIndex((index: number) => {
            if (index >= steps.length - 1) return index
            return index + 1
        })
    }

    function back() {
        return setCurrentIndex((index: number) => {
            if (index <= 0) return index
            return index - 1
        })
    }
    
    return {
        currentIndex,
        stepForm: steps[currentIndex],
        steps,
        next,
        back,
        isFirstStep: currentIndex === 0,
        isLastStep: currentIndex === steps.length - 1
    }
}