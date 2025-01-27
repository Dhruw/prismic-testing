import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';
import { createClient } from '@/prismicio';
import { Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
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
    <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8 ">
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
const Testimonials = async ({
  slice,
}: TestimonialsProps): Promise<JSX.Element> => {
  const client = createClient();

  const testimonials = await Promise.all(
    slice.primary.testimonial.map((testimonial) => {
      if (
        isFilled.contentRelationship(testimonial.testimonial) &&
        testimonial.testimonial.uid
      ) {
        return client.getByUID('testimonial', testimonial.testimonial.uid);
      }
    })
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => {
          return (
            <div
              key={testimonial?.uid}
              className="border bg-white shadow-lg  rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between"
            >
              <PrismicRichText
                field={testimonial?.data.quote}
                components={components}
              />
              <div className="flex items-center">
                <div>
                  <PrismicNextImage
                    field={testimonial?.data.avatar}
                    height={56}
                    width={56}
                    className="rounded-full mr-4"
                    imgixParams={{ ar: '1:1', fit: 'crop' }}
                  />
                </div>
                <div>
                  <p className="text-base font-medium text-slate-700">
                    {testimonial?.data.name}
                  </p>
                  <p className="text-base text-slate-600">
                    {testimonial?.data.job_title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Bounded>
  );
};

export default Testimonials;
