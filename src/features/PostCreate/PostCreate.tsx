import { IPost } from "@/entities/Posts/lib/IPost";
import { redirect } from "next/navigation";

const createPost = async (data: FormData) => {
  "use server";

  const { title, body } = Object.fromEntries(data);

  const response = await fetch("http://localhost:3000/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  const post: IPost = await response.json();

  redirect(`/blog/${post.id}`);
};

const PostCreate = () => {
  return (
    <form className="border flex flex-col p-4" action={createPost}>
      <h1 className="text-center mb-5">Add New Post</h1>
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          name="title"
          placeholder="Введите title"
          className="border border-blue-200 p-1 outline-blue-300"
        />
        <input
          type="text"
          name="body"
          placeholder="Введите description"
          className="border border-blue-200 p-1 outline-blue-300"
        />
      </div>

      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded-md"
          type="submit"
        >
          Add Post
        </button>
      </div>
    </form>
  );
};

export default PostCreate;
