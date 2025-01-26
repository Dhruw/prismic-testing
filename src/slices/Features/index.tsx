import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';
import {
  BarGraphIcon,
  CalendarIcon,
  CloverIcon,
  HourGlassIcon,
} from '@/components/icons/icons';
import { JSX } from 'react';

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-12">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading
      as="h3"
      size="sm"
      className="mb-3 font-medium sm:text-left text-center"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="font-medium font-body text-slate-600 sm:text-left text-center">
      {children}
    </p>
  ),
};

const icons = {
  bargraph: <BarGraphIcon />,
  calendar: <CalendarIcon />,
  clover: <CloverIcon />,
  hourglass: <HourGlassIcon />,
};

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  console.log(slice);
  return (
    <Bounded
      as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
        {slice.primary.feature.map((item, index) => (
          // Render the item
          <div
            key={index}
            className="max-w-xs sm:place-items-start place-items-center"
          >
            {item.icon && icons[item.icon]}
            <PrismicRichText field={item.title} components={components} />
            <PrismicRichText field={item.description} components={components} />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Features;
