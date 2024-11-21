import { NextResponse } from "next/server";

//@ts-ignore
import { enableDraftHandler } from "@contentful/vercel-nextjs-toolkit/app-router";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const secret = url.searchParams.get("secret");
  const slug = url.searchParams.get("slug");

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    await enableDraftHandler(req);
  } catch (error) {}

  if (slug) {
    return NextResponse.redirect(`http://localhost:3000${slug}`);
  }

  return NextResponse.json({ message: "Preview mode enabled" });
}
