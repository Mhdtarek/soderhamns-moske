// @ts-ignore
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { slug } = params;
  try {
    const post = await import(`../../app/nyheter/${slug}.md`);
    const { title, date, created } = post.metadata;
    const content = post.default;

    return {
      content,
      title,
      date,
      created,
    };
  } catch {
    throw error(404, "Artikeln kunde inte hittas");
  }
}
