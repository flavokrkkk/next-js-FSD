"use client";
import PostsList from "@/features/PostsList/PostsList";
import { useActions } from "@/shared/hooks/useActions";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { postSelector } from "@/shared/redux/selectors";
import { useEffect } from "react";

const Posts = () => {
  const { getAsyncPosts } = useActions();
  const { filterPost } = useAppSelector(postSelector);

  useEffect(() => {
    getAsyncPosts();
  }, []);

  return filterPost.map((post) => <PostsList key={post.id} post={post} />);
};

export default Posts;
