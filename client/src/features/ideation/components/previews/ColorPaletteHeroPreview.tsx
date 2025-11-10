import { LandingAccordionItemPalette } from "@/components/ui/interactive-image-accordion-palette";
import { colorPalettes } from "@/features/ideation/color-palettes";

type ColorPaletteHeroPreviewProps = {
  paletteId?: string;
};

export default function ColorPaletteHeroPreview({
  paletteId,
}: ColorPaletteHeroPreviewProps) {
  const palette =
    colorPalettes.find((paletteOption) => paletteOption.id === paletteId) ??
    colorPalettes[0];

  if (!palette) {
    return null;
  }

  return (
    <div className="w-full">
      <LandingAccordionItemPalette palette={palette} />
    </div>
  );
}

