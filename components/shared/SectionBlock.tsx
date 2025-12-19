import React from "react";

type SectionBlockProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  background?: string; // e.g. "bg-background-alt" or custom hex
  children?: React.ReactNode;
  centered?: boolean;
  padding?: string; // e.g. "py-16 px-6"
  texture?: boolean;
  bgPattern?: string;
};

export default function SectionBlock({
  id,
  title,
  subtitle,
  background = "bg-background",
  children,
  centered = true,
  padding = "py-16 px-6",
  texture,
  bgPattern,
}: SectionBlockProps) {
  return (
    <section
      id={id}
      className={`${background} ${padding} relative  scroll-mt-24`}
    >
      <div className="container mx-auto flex flex-col items-center relative z-10">
        {(title || subtitle) && (
          <div
            className={`mb-10 underline-animated relative flex  before:!bg-accent/40 after:!bg-accent ${
              centered ? "text-center" : "text-left"
            }`}
          >
            {title && (
              <h2 className="text-3xl font-bold md:text-4xl uppercase">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-lg text-text-muted">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
      {texture && <SectionTexture bgPattern={bgPattern} />}
    </section>
  );
}

const SectionTexture = ({ bgPattern }: { bgPattern?: string }) => {
  return (
    <div
      className={`absolute w-full h-full inset-0 mix-blend-difference ${bgPattern} `}
    ></div>
  );
};
