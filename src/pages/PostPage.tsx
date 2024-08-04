import Posts from "@/features/Posts/Posts";
import PostSearch from "@/features/PostSearch/PostSearch";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "Posts | Next App",
};

const PostPage = () => {
  return (
    <section className="flex flex-col gap-2">
      <PostSearch />
      <Posts />
    </section>
  );
};

export default PostPage;
