interface CardProps {
  title: string;
  thumbnail: string;
  guid: string;
  link: string;
}

export const Card = ({ title, thumbnail, link }: CardProps) => {
  return (
    <div className="px-4 break-inside-avoid-column">
      <div className="mb-5 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md">
        <a
          href={link}
          aria-label={title}
          target="_blank"
          className="min-h-[300px] h-auto bg-gray-400 flex"
        >
          <img src={thumbnail} loading="lazy" alt="" className="aspect-auto" />
        </a>
        <div className="p-5">
          <a href={link} target="_blank" aria-label={title}>
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
              {title}
            </h5>
          </a>

          <a
            aria-label={title}
            href={link}
            target="_blank"
            className="relative flex h-[40px] w-36 rounded-xl items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
          >
            <span className="relative z-10">Check out</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="w-full p-4">
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg">
        <div className="object-cover object-center w-full bg-gray-400 h-[300px]"></div>
        <div className="p-6">
          <h2 className="w-1/4 h-4 mb-2 bg-gray-400 animate-pulse"></h2>

          <div className="flex flex-wrap items-center ">
            <a className="inline-flex items-center w-32 h-4 mt-2 bg-black animate-pulse md:mb-2 lg:mb-0"></a>
          </div>
        </div>
      </div>
    </div>
  );
};
