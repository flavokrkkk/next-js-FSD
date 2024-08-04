import { NextResponse } from "next/server";
import { comments } from "./comments";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("q");

  let currentComments = comments;

  if (query) {
    currentComments.filter((comment) =>
      comment.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  return NextResponse.json(currentComments);
};

export const POST = async (req: Request) => {
  const body = await req.json();

  console.log(body);

  return NextResponse.json({ body });
};
