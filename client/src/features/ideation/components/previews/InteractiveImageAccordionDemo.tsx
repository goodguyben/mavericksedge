import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import type { ColorPalette } from "../../types";

interface InteractiveImageAccordionDemoProps {
  colors?: ColorPalette;
}

export default function InteractiveImageAccordionDemo({ colors }: InteractiveImageAccordionDemoProps) {
  return (
    <div className="w-full">
      <LandingAccordionItem colors={colors} />
    </div>
  );
}

