import axios from "axios";
import useSwr from "swr";

interface Feed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

interface Post {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: object;
  categories: string[];
}

const fetchBlogPosts = async (url: string) => {
  return await axios.get(url).then((res) => res.data);
};

export const useBlogPosts = () => {
  const url =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shriharim006";
  const { data, error } = useSwr(url, fetchBlogPosts);
  return {
    profile: data?.feed as Feed,
    posts: data?.items as Post[],
    loading: !error && !data,
  };
};
