import clsx from 'clsx';
import React from 'react';

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

function Bounded({
  children,
  as: Comp = 'section',
  className,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx('px-4 py-10 md:py-14 xl:px-6 lg:py-16', className)}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}

export default Bounded;
