import { FC, ReactNode } from "react";

interface SectionProps {
  className?: string;
  children: ReactNode;
  heading?: string;
}

export const Section: FC<SectionProps> = ({
  children,
  heading,
  className = "",
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row justify-center py-[50px] px-[35px] md:py-[100px] md:px-[170px] w-full max-w-screen-2xl gap-10 md:gap-16 ${className}`}
    >
      {heading && (
        <h2 className="text-lg font-semibold text-blue-700">{heading}</h2>
      )}
      {children}
    </section>
  );
};
