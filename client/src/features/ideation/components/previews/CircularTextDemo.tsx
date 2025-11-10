import CircularText from "@/components/ui/circular-text";

export default function CircularTextDemo() {
  return (
    <div className="flex h-full min-h-[360px] w-full items-center justify-center bg-gradient-to-br from-neutral-900 via-black to-neutral-800">
      <CircularText
        text="Future of web design • "
        spinDuration={20}
        onHover="speedUp"
        className="text-white"
      />
    </div>
  );
}

