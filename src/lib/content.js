import { getCollection } from "astro:content";
import { trackMeta } from "../data/site.js";

const sortByDateDesc = (a, b) => {
  const left = a.data.publishedAt ?? a.data.year;
  const right = b.data.publishedAt ?? b.data.year;

  if (left instanceof Date && right instanceof Date) {
    return right.getTime() - left.getTime();
  }

  return Number(right) - Number(left);
};

export async function getPublishedPosts() {
  const posts = await getCollection("posts", ({ data }) => data.status === "published");
  return posts.sort(sortByDateDesc);
}

export async function getPublishedProfessionalPosts() {
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.track === "professional");
}

export async function getPublishedWork() {
  const work = await getCollection("work", ({ data }) => data.status === "published");
  return work.sort(sortByDateDesc);
}

export function getFeaturedBySlugs(entries, slugs) {
  const entryMap = new Map(entries.map((entry) => [entry.data.slug, entry]));
  return slugs.map((slug) => entryMap.get(slug)).filter(Boolean);
}

export function getTrackInfo(track) {
  return trackMeta[track] ?? trackMeta.personal;
}

export function formatDate(date, language = "en") {
  return new Intl.DateTimeFormat(language === "ko" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function getTopTags(posts, limit = 8) {
  const counts = new Map();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .slice(0, limit)
    .map(([tag]) => tag);
}
