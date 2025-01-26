import { Content } from '@prismicio/client';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { JSX } from 'react';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 py-10 md:py-14 xl:px-6 lg:py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 place-items-center text-center gap-10">
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight font-display text-slate-700">
                  {children}
                </h1>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.body}
            components={{
              paragraph: ({ children }) => (
                <p className="text-2xl text-center font-normal leading-10 font-body text-slate-600 mb-4 md:8 max-w-md">
                  {children}
                </p>
              ),
            }}
          />
          <PrismicNextLink
            field={slice.primary.button_link}
            className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider mb-8 md:mb-10"
          >
            {slice.primary.button_text}
          </PrismicNextLink>
          <PrismicNextImage
            field={slice.primary.hero_image}
            className="rounded drop-shadow-xl max-w-4xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
