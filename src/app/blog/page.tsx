import PostPage from "@/pages/PostPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

const Blog = async () => {
  return <PostPage />;
};

export default Blog;
