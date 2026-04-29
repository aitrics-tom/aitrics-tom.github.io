import rss from "@astrojs/rss";
import { getPublishedPosts } from "../lib/content.js";
import { siteConfig } from "../data/site.js";

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: `${siteConfig.title} Blog`,
    description: siteConfig.blogIntro,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.publishedAt,
      link: `/blog/${post.data.slug}/`,
    })),
    customData: "<language>en-us</language>",
  });
}
