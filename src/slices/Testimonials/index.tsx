import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import { JSX } from 'react';
import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';

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

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      {slice.primary.testimonial.map((item, index) => (
        <div key={index}>{console.log(item)} Item</div>
      ))}
    </Bounded>
  );
};

export default Testimonials;
