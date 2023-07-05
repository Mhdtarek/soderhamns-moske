// @ts-nocheck
import { fetchMarkdownPosts } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });

  const firstPost = sortedPosts[0]; // Get the first post from the sorted array

  return json(firstPost); // Return only the first post
};
