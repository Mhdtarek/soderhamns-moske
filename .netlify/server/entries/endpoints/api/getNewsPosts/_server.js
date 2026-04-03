import { f as fetchMarkdownPosts } from "../../../../chunks/index4.js";
import { j as json } from "../../../../chunks/index.js";
const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
  return json(sortedPosts);
};
export {
  GET
};
