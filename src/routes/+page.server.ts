import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch(`https://fun-api-next.vercel.app/api/activity`);
  const activity = await res.json();

  return { activity };
};
