import { LandingAccordionItemPalette } from "@/components/ui/interactive-image-accordion-palette";
import { colorPalettes } from "@/features/ideation/color-palettes";

const LOGO_URL = "https://www.rssterling.ca/wp-content/uploads/2023/07/insignia-_small.png";

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
    <div className="relative w-full overflow-hidden rounded-xl bg-neutral-900">
      <div className="pointer-events-none absolute left-1/2 top-6 z-10 flex -translate-x-1/2 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={LOGO_URL}
          alt="Mavericks Edge insignia"
          className="h-20 w-auto drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)]"
        />
      </div>
      <LandingAccordionItemPalette palette={palette} />
    </div>
  );
}

