// @ts-nocheck
import { fetchMarkdownPostBySlug } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET = async ({ params }) => {
  const { slug } = params;
  const post = fetchMarkdownPostBySlug(slug);

  if (!post) {
    return json({ error: "not_found" }, { status: 404 });
  }

  return json(post);
};
