"use client";

import { useActions } from "@/shared/hooks/useActions";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { postSelector } from "@/shared/redux/selectors";
import { useEffect } from "react";

const PostInfo = ({ params }: { params: { id: string } }) => {
  const { getAsyncPostById } = useActions();
  const { post } = useAppSelector(postSelector);
  const isEmptyPost = post !== null;

  useEffect(() => {
    getAsyncPostById(params.id);
  }, []);

  return (
    <div className="border border-red-400 p-4">
      {isEmptyPost && (
        <section className="flex flex-col gap-3">
          {`${post.id}. ${post.title}`}
          <span className="border border-red-500">{post.body}</span>
        </section>
      )}
    </div>
  );
};

export default PostInfo;
