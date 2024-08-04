import { NextResponse } from "next/server";
import { posts } from "../posts";
import { headers } from "next/headers";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const postById = posts.find((p) => p.id === Number(params.id));

  return NextResponse.json(postById);
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  //обращение в бд
  posts.filter((post) => post.id !== Number(params.id));

  const headerList = headers();
  //проверяем заголовки
  const type = headerList.get("Content-Type");
  const responsePost = posts.find((p) => p.id === Number(params.id));
  return NextResponse.json(responsePost);
};
