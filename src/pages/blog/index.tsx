import { Link } from "react-router-dom";
import { useEffect } from "react";
import { times } from "lodash";

import { useBlogPosts } from "../../api";
import { Card, CardSkeleton } from "../../components";

export const Blog = () => {
  const { posts, loading } = useBlogPosts();

  useEffect(() => {
    document.title = "Shrihari | Blog";

    return () => {
      document.title = "Shrihari Murali | Front End Developer";
    };
  }, []);

  return (
    <div className="w-full h-auto mb-10 max-w-screen-2xl">
      <div className="flex items-center justify-start w-full gap-2 px-4 mb-10">
        <svg
          className="w-3 h-3 text-blue-600 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <Link to="/">Back</Link>
      </div>

      {loading ? (
        <div className="gap-2 columns-1 md:columns-4">
          {times(10).map((_, index: number) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="gap-2 columns-1 md:columns-4">
          {posts.map(({ title, thumbnail, guid, link }) => (
            <Card
              title={title}
              thumbnail={thumbnail}
              guid={guid}
              link={link}
              key={guid}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
