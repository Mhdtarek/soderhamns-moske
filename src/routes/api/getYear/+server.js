// @ts-nocheck
import { json } from "@sveltejs/kit";

export const GET = async () => {
  return json({ Year: 2025 }); // Return only the first post
};
