import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import { JSX } from 'react';
import Bounded from '@/components/Bounded';
import Button from '@/components/Button';
import Heading from '@/components/Heading';

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as="h1"
      size="xl"
      className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-2xl font-normal leading-10 font-body text-slate-600 mb-4 md:8 max-w-md">
      {children}
    </p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {

  if (slice.variation === 'horizontal')
    return (
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="px-4 py-10 md:py-14 xl:px-6 lg:py-16"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-2 place-items-center text-center">
            <div className="grid grid-rows-[1fr,auto,auto] gap-8 h-fit">
              <PrismicRichText
                field={slice.primary.heading}
                components={components}
              />
              <PrismicRichText
                field={slice.primary.body}
                components={components}
              />
              <Button
                field={slice.primary.button_link}
                className="mb-8 md:mb-10"
              >
                {slice.primary.button_text}
              </Button>
            </div>
            <PrismicNextImage
              field={slice.primary.hero_image}
              className="rounded drop-shadow-xl max-w-4xl w-full"
            />
          </div>
        </div>
      </Bounded>
    );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 py-10 md:py-14 xl:px-6 lg:py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 place-items-center text-center">
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
          <PrismicRichText field={slice.primary.body} components={components} />
          <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
            {slice.primary.button_text}
          </Button>
          <PrismicNextImage
            field={slice.primary.hero_image}
            className="rounded drop-shadow-xl max-w-4xl w-full"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
