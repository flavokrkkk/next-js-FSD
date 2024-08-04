import { IPost } from "@/entities/Posts/lib/IPost";
import { useActions } from "@/shared/hooks/useActions";
import Link from "next/link";
import { FC } from "react";
import "./styles.scss";

interface IPostsList {
  post: IPost;
}

// const deletePost = async (id: number) => {
//   "use server";

//   await fetch(`http://localhost:3000/posts/${id}`, {
//     method: "DELETE",
//   });

//   revalidatePath("/blog");
//   redirect("/blog");
// };

const PostsList: FC<IPostsList> = ({ post }) => {
  const { deletePost } = useActions();

  const handleDeletePost = () => {
    deletePost(post.id);
  };

  return (
    <div className="flex flex-col gap-2 p-2 border-2 border-gray-400">
      <h1 className="text-xl">{`${post.id}.${post.title}`}</h1>
      <span className="p-2 border border-gray-400">{post.body}</span>
      <div className="w-full flex justify-center gap-2">
        <button className="bg-gray-400 p-1 text-white">
          <Link href={`/blog/${post.id}`}>Подробнее</Link>
        </button>
        <button
          type="submit"
          className="bg-red-400 p-1 text-white"
          onClick={handleDeletePost}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default PostsList;
