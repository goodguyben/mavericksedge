import { useEffect, useMemo, useState } from "react";
import { CatalogItem, Category } from "../types";
import TubelightNavbarDemo from "./previews/TubelightNavbarDemo";
import HeaderDemo from "./previews/HeaderDemo";
import NavbarMenuDemo from "./previews/NavbarMenuDemo";
import NavigationMenuGridDemo from "./previews/NavigationMenuGridDemo";
import NavHeaderDemo from "./previews/NavHeaderDemo";
import StaggeredMenuDemo from "./previews/StaggeredMenuDemo";
import CardNavDemo from "./previews/CardNavDemo";
import HeroDemo from "./previews/HeroDemo";
import NeuralNetworkHeroDemo from "./previews/NeuralNetworkHeroDemo";
import ShaderShowcaseDemo from "./previews/ShaderShowcaseDemo";
import InteractiveImageAccordionDemo from "./previews/InteractiveImageAccordionDemo";
import VideoHeroDemo from "./previews/VideoHeroDemo";
import ModernVideoHeroDemo from "./previews/ModernVideoHeroDemo";
import RoundedBentoVideoHeroDemo from "./previews/RoundedBentoVideoHeroDemo";
import LogoCarouselDemo from "./previews/LogoCarouselVideoHeroDemo";
import SubscribeButtonDemo from "./previews/SubscribeButtonDemo";
import ExploreButtonDemo from "./previews/ExploreButtonDemo";
import LearnMoreButtonDemo from "./previews/LearnMoreButtonDemo";
import InteractiveHoverButtonDemo from "./previews/InteractiveHoverButtonDemo";
import RippleButtonDemo from "./previews/RippleButtonDemo";
import ShinyTextDemo from "./previews/ShinyTextDemo";
import SubscribeButtonV2Demo from "./previews/SubscribeButtonV2Demo";
import NeumorphicButtonDemo from "./previews/NeumorphicButtonDemo";
import FeatureStepsDemo from "./previews/FeatureStepsDemo";
import CircularTestimonialsDemo from "./previews/CircularTestimonialsDemo";
import CircularGalleryDemo from "./previews/CircularGalleryDemo";
import PortfolioCarouselDemo from "./previews/PortfolioCarouselDemo";
import TestimonialSliderDemo from "./previews/TestimonialSliderVideoHeroDemo";
import StaggerTestimonialsDemo from "./previews/StaggerTestimonialsDemo";
import SplitTextDemo from "./previews/SplitTextDemo";
import BlurTextDemo from "./previews/BlurTextDemo";
import CircularTextDemo from "./previews/CircularTextDemo";
import TextTypeDemo from "./previews/TextTypeDemo";
import ScrollRevealDemo from "./previews/ScrollRevealDemo";
import ScrollFloatDemo from "./previews/ScrollFloatDemo";
import ColorPaletteHeroPreview from "./previews/ColorPaletteHeroPreview";
import { colorPalettes } from "../color-palettes";

type CategoryStepProps = {
  category: Category;
  items: CatalogItem[];
  selectedIds: string[];
  onToggle: (id: string) => void;
  onSkipChange: (skip: boolean) => void;
  skip: boolean;
  min?: number;
  max?: number;
};

export default function CategoryStep({
  category,
  items,
  selectedIds,
  onToggle,
  onSkipChange,
  skip,
  min = 1,
  max = 5,
}: CategoryStepProps) {
  const isColorPaletteCategory = category === "Color Palettes";
  const initialPaletteId =
    items[0]?.id ?? colorPalettes[0]?.id ?? "";
  const [appliedPaletteId, setAppliedPaletteId] = useState(initialPaletteId);

  useEffect(() => {
    if (!isColorPaletteCategory) return;
    if (items.length === 0) return;
    if (!items.some((item) => item.id === appliedPaletteId)) {
      setAppliedPaletteId(items[0].id);
    }
  }, [items, appliedPaletteId, isColorPaletteCategory]);

  const appliedPalette = useMemo(
    () =>
      colorPalettes.find((palette) => palette.id === appliedPaletteId) ??
      colorPalettes[0],
    [appliedPaletteId]
  );

  const count = selectedIds.length;
  const withinLimits = count >= min && count <= max;

  return (
    <div>
      <div className="mb-6 flex items-center justify-between bg-neutral-800/30 rounded-lg p-4 border border-neutral-700/50">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${withinLimits || skip ? 'bg-green-500' : 'bg-amber-500'}`}></div>
          <div className="text-sm font-medium text-neutral-200">
            {count} of {max} selected
            <span className="text-neutral-500 ml-1">({min} minimum)</span>
          </div>
        </div>
        <label className="flex items-center gap-3 text-sm text-neutral-300 cursor-pointer group">
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              checked={skip}
              onChange={(e) => onSkipChange(e.target.checked)}
              className="sr-only peer"
            />
            <div className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
              skip 
                ? 'bg-orange-500 border-orange-500 group-hover:bg-orange-400 group-hover:border-orange-400' 
                : 'bg-neutral-800 border-neutral-600 group-hover:border-neutral-500'
            }`}>
              {skip && (
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <span className="group-hover:text-white transition-colors duration-200 select-none">I'm flexible with {category}</span>
        </label>
      </div>

      {items.length === 0 ? (
        <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-12 text-center">
          <div className="text-neutral-500 mb-2">
            <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <p className="text-neutral-300 font-medium">No components available yet</p>
          <p className="text-sm text-neutral-500 mt-1">We're still curating options for this category</p>
        </div>
      ) : (
        <>
          {isColorPaletteCategory && appliedPalette && (
            <div className="mb-6 rounded-xl border border-neutral-700 bg-neutral-900">
              <div className="border-b border-neutral-800 px-5 py-3">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Live preview
                    </p>
                    <p className="text-xs text-neutral-400">
                      Apply a palette to see it on the hero component before selecting.
                    </p>
                  </div>
                  <div className="text-xs text-neutral-500">
                    {appliedPalette.name}
                  </div>
                </div>
              </div>
              <ColorPaletteHeroPreview paletteId={appliedPalette.id} />
            </div>
          )}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => {
                  const selected = selectedIds.includes(item.id);
                  const isPreview = !!item.previewComponent;
                  const isNavHeader = item.previewComponent === "NavHeaderDemo";
                  const isStaggeredMenu = item.previewComponent === "StaggeredMenuDemo";
                  const isCardNav = item.previewComponent === "CardNavDemo";
                  const isHero = item.previewComponent === "HeroDemo";
                  const isNeuralHero = item.previewComponent === "NeuralNetworkHeroDemo";
                  const isShaderShowcase = item.previewComponent === "ShaderShowcaseDemo";
                  const isInteractiveAccordion = item.previewComponent === "InteractiveImageAccordionDemo";
                  const isVideoHero = item.previewComponent === "VideoHeroDemo";
                  const isModernVideoHero = item.previewComponent === "ModernVideoHeroDemo";
                  const isRoundedBentoVideoHero = item.previewComponent === "RoundedBentoVideoHeroDemo";
                  const isLogoCarousel = item.previewComponent === "LogoCarouselVideoHeroDemo";
                  const isSubscribeButton = item.previewComponent === "SubscribeButtonDemo";
                  const isExploreButton = item.previewComponent === "ExploreButtonDemo";
                  const isLearnMoreButton = item.previewComponent === "LearnMoreButtonDemo";
                  const isInteractiveHoverButton = item.previewComponent === "InteractiveHoverButtonDemo";
                  const isRippleButton = item.previewComponent === "RippleButtonDemo";
                  const isShinyButton = item.previewComponent === "ShinyTextDemo";
                  const isSubscribeButtonV2 = item.previewComponent === "SubscribeButtonV2Demo";
                  const isNeumorphicButton = item.previewComponent === "NeumorphicButtonDemo";
                  const isFeatureSteps = item.previewComponent === "FeatureStepsDemo";
                  const isCircularTestimonials = item.previewComponent === "CircularTestimonialsDemo";
                  const isCircularGallery = item.previewComponent === "CircularGalleryDemo";
                  const isPortfolioCarousel = item.previewComponent === "PortfolioCarouselDemo";
                  const isTestimonialSlider = item.previewComponent === "TestimonialSliderVideoHeroDemo";
                  const isStaggerTestimonials = item.previewComponent === "StaggerTestimonialsDemo";
                  const isSplitText = item.previewComponent === "SplitTextDemo";
                  const isBlurText = item.previewComponent === "BlurTextDemo";
                  const isCircularText = item.previewComponent === "CircularTextDemo";
                  const isTextType = item.previewComponent === "TextTypeDemo";
                  const isScrollReveal = item.previewComponent === "ScrollRevealDemo";
                  const isScrollFloat = item.previewComponent === "ScrollFloatDemo";
                  const paletteData = isColorPaletteCategory
                    ? colorPalettes.find((palette) => palette.id === item.id)
                    : undefined;
                  const isAppliedPalette =
                    isColorPaletteCategory && appliedPaletteId === item.id;

                  if (isColorPaletteCategory) {
                    return (
                      <div
                        key={item.id}
                        className={`group rounded-xl border transition-all ${
                          selected
                            ? "border-white bg-neutral-800 shadow-lg shadow-white/10"
                            : "border-neutral-700 bg-neutral-900 hover:border-neutral-600"
                        }`}
                      >
                        <div className="p-5">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="text-sm font-semibold text-white">
                                {paletteData?.name ?? item.title}
                              </div>
                              <p className="mt-2 text-xs text-neutral-400">
                                {paletteData?.description ??
                                  "Apply this palette to preview it on the hero above."}
                              </p>
                            </div>
                            {isAppliedPalette && (
                              <span className="rounded-full bg-orange-500/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-orange-300">
                                Applied
                              </span>
                            )}
                          </div>
                          {paletteData && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {[
                                { label: "Primary", color: paletteData.primary },
                                { label: "Secondary", color: paletteData.secondary },
                                { label: "Accent", color: paletteData.accent },
                                { label: "Neutral", color: paletteData.neutral },
                                { label: "Background", color: paletteData.background },
                              ].map((swatch) => (
                                <div key={swatch.label} className="flex items-center gap-2">
                                  <div
                                    className="h-6 w-6 rounded-full border border-white/40 shadow-inner"
                                    style={{ backgroundColor: swatch.color }}
                                    title={`${swatch.label}: ${swatch.color}`}
                                  />
                                  <span className="text-[11px] uppercase tracking-wide text-neutral-400">
                                    {swatch.label}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2 border-t border-neutral-700/70 bg-neutral-900 px-5 py-4">
                          <button
                            onClick={() => setAppliedPaletteId(item.id)}
                            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                              isAppliedPalette
                                ? "bg-orange-500 text-black hover:bg-orange-400"
                                : "border border-orange-500/60 text-orange-100 hover:bg-orange-500/10"
                            }`}
                          >
                            {isAppliedPalette ? "Palette Applied" : "Apply Palette"}
                          </button>
                          <button
                            onClick={() => onToggle(item.id)}
                            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                              selected
                                ? "bg-white text-black hover:bg-neutral-100"
                                : "border border-neutral-600 bg-neutral-800 text-white hover:bg-neutral-700 hover:border-neutral-500"
                            }`}
                          >
                            {selected ? "✓ Selected" : "Select"}
                          </button>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={item.id}
                      className={`group rounded-xl border transition-all ${
                        selected 
                          ? "border-white bg-neutral-800 shadow-lg shadow-white/10" 
                          : "border-neutral-700 bg-neutral-900 hover:border-neutral-600"
                      } overflow-hidden ${isPreview && !isSubscribeButton && !isExploreButton && !isLearnMoreButton && !isInteractiveHoverButton && !isRippleButton && !isShinyButton && !isSubscribeButtonV2 && !isNeumorphicButton && !isFeatureSteps && !isCircularTestimonials && !isCircularGallery && !isPortfolioCarousel && !isTestimonialSlider && !isLogoCarousel && !isStaggerTestimonials && !isSplitText && !isBlurText && !isCircularText && !isTextType && !isScrollReveal && !isScrollFloat ? 'sm:col-span-2 lg:col-span-3' : isFeatureSteps || isCircularTestimonials || isCircularGallery || isPortfolioCarousel || isTestimonialSlider || isLogoCarousel || isStaggerTestimonials ? 'sm:col-span-2 lg:col-span-3' : ''}`}
                    >
                      <div className={`${isPreview ? (isNavHeader ? 'h-[240px]' : isStaggeredMenu ? 'h-[640px]' : isCardNav ? 'h-[400px]' : isHero ? 'h-[700px]' : isNeuralHero ? 'h-[800px]' : isShaderShowcase ? 'h-[800px]' : isInteractiveAccordion ? 'h-[900px]' : isVideoHero ? 'h-auto min-h-[600px]' : isModernVideoHero ? 'h-auto min-h-[600px]' : isRoundedBentoVideoHero ? 'h-auto min-h-[600px]' : isLogoCarousel ? 'h-auto min-h-[600px]' : isSubscribeButton ? 'h-[200px]' : isExploreButton ? 'h-[200px]' : isLearnMoreButton ? 'h-[200px]' : isInteractiveHoverButton ? 'h-[200px]' : isRippleButton ? 'h-[200px]' : isShinyButton ? 'h-[200px]' : isSubscribeButtonV2 ? 'h-[200px]' : isNeumorphicButton ? 'h-[200px]' : isFeatureSteps ? 'h-[900px]' : isCircularTestimonials ? 'h-[600px]' : isCircularGallery ? 'h-[600px]' : isPortfolioCarousel ? 'h-[700px]' : isTestimonialSlider ? 'h-auto min-h-[400px]' : isStaggerTestimonials ? 'h-[700px]' : isSplitText ? 'h-[360px]' : isBlurText ? 'h-[360px]' : isCircularText ? 'h-[360px]' : isTextType ? 'h-[360px]' : isScrollReveal ? 'h-[360px]' : isScrollFloat ? 'h-[360px]' : isColorPalettes ? 'h-[1000px]' : 'h-[480px]') : 'aspect-[4/3]'} ${isPreview ? 'bg-background' : 'bg-neutral-800'} relative overflow-hidden`}>
                  {isPreview && item.previewComponent === "TubelightNavbarDemo" ? (
                    <div className="w-full h-full">
                      <TubelightNavbarDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "HeaderDemo" ? (
                    <div className="w-full h-full">
                      <HeaderDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "NavbarMenuDemo" ? (
                    <div className="w-full h-full">
                      <NavbarMenuDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "NavigationMenuGridDemo" ? (
                    <div className="w-full h-full">
                      <NavigationMenuGridDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "NavHeaderDemo" ? (
                    <div className="w-full h-full">
                      <NavHeaderDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "StaggeredMenuDemo" ? (
                    <div className="w-full h-full">
                      <StaggeredMenuDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "CardNavDemo" ? (
                    <div className="w-full h-full">
                      <CardNavDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "HeroDemo" ? (
                    <div className="w-full h-full">
                      <HeroDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "NeuralNetworkHeroDemo" ? (
                    <div className="w-full h-full">
                      <NeuralNetworkHeroDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "ShaderShowcaseDemo" ? (
                    <div className="w-full h-full">
                      <ShaderShowcaseDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "InteractiveImageAccordionDemo" ? (
                    <div className="w-full h-full">
                      <InteractiveImageAccordionDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "VideoHeroDemo" ? (
                    <div className="w-full h-full">
                      <VideoHeroDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "ModernVideoHeroDemo" ? (
                    <div className="w-full h-full">
                      <ModernVideoHeroDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "RoundedBentoVideoHeroDemo" ? (
                    <div className="w-full h-full">
                      <RoundedBentoVideoHeroDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "LogoCarouselVideoHeroDemo" ? (
                    <div className="w-full h-full">
                      <LogoCarouselDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "SubscribeButtonDemo" ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <SubscribeButtonDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "ExploreButtonDemo" ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <ExploreButtonDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "LearnMoreButtonDemo" ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <LearnMoreButtonDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "InteractiveHoverButtonDemo" ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <InteractiveHoverButtonDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "RippleButtonDemo" ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <RippleButtonDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "ShinyTextDemo" ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <ShinyTextDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "SubscribeButtonV2Demo" ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <SubscribeButtonV2Demo />
                    </div>
                  ) : isPreview && item.previewComponent === "NeumorphicButtonDemo" ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <NeumorphicButtonDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "FeatureStepsDemo" ? (
                    <div className="w-full h-full">
                      <FeatureStepsDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "CircularTestimonialsDemo" ? (
                    <div className="w-full h-full">
                      <CircularTestimonialsDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "CircularGalleryDemo" ? (
                    <div className="w-full h-full">
                      <CircularGalleryDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "PortfolioCarouselDemo" ? (
                    <div className="w-full h-full">
                      <PortfolioCarouselDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "TestimonialSliderVideoHeroDemo" ? (
                    <div className="w-full h-full">
                      <TestimonialSliderDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "StaggerTestimonialsDemo" ? (
                    <div className="w-full h-full">
                      <StaggerTestimonialsDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "SplitTextDemo" ? (
                    <div className="w-full h-full">
                      <SplitTextDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "BlurTextDemo" ? (
                    <div className="w-full h-full">
                      <BlurTextDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "CircularTextDemo" ? (
                    <div className="w-full h-full">
                      <CircularTextDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "TextTypeDemo" ? (
                    <div className="w-full h-full">
                      <TextTypeDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "ScrollRevealDemo" ? (
                    <div className="w-full h-full">
                      <ScrollRevealDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "ScrollFloatDemo" ? (
                    <div className="w-full h-full">
                      <ScrollFloatDemo />
                    </div>
                  ) : isPreview && item.previewComponent === "ColorPalettesDemo" ? (
                    <div className="w-full h-full">
                      <ColorPalettesDemo />
                    </div>
                  ) : item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-neutral-500">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  {/* Badges - hidden for interactive previews */}
                  {item.badges && item.badges.length > 0 && !isPreview && (
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1.5">
                      {item.badges.includes("popular") && (
                        <span className="bg-amber-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                          POPULAR
                        </span>
                      )}
                      {item.badges.includes("new") && (
                        <span className="bg-green-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                          NEW
                        </span>
                      )}
                      {item.badges.includes("accessible") && (
                        <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          A11Y
                        </span>
                      )}
                    </div>
                  )}
                  {selected && (
                    <div className="absolute top-2 right-2 bg-white text-black rounded-full p-1.5 shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                  <div className="text-xs text-neutral-400 mb-3">
                    {item.provider} · {item.category}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onToggle(item.id)}
                      className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                        selected
                          ? "bg-white text-black hover:bg-neutral-100"
                          : "border border-neutral-600 bg-neutral-800 text-white hover:bg-neutral-700 hover:border-neutral-500"
                      }`}
                    >
                      {selected ? "✓ Selected" : "Select"}
                    </button>
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-neutral-600 bg-neutral-800 px-3 py-2 text-sm text-white hover:bg-neutral-700 hover:border-neutral-500 transition-all"
                      title="View source"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!skip && !withinLimits && (
        <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 flex items-start gap-3">
          <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-sm font-medium text-amber-300">Selection needed to continue</p>
            <p className="text-sm text-amber-400/80 mt-1">
              Please select between {min} and {max} items, or check "I'm flexible" to skip this step.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}


