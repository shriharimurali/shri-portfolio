import { times } from "lodash";

import { useBlogPosts } from "../../api";
import { Card, CardSkeleton } from "../../components";
import { useTitle } from "react-use";

export const Blog = () => {
  const { posts, loading } = useBlogPosts();

  useTitle("Blog | Shrihari");

  return (
    <div className="w-full h-auto mb-10 max-w-screen-2xl">
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
