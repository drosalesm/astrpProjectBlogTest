import { getCollection } from "astro:content";

export async function GET(context) {
    const blog = await getCollection('blog');
    return rss({
      title: 'Blog de Astro',
      description: 'Mi super cool blog de astro',
      site: context.site,
      items: blog.map((post) => ({
        ...post.data,
        link: `/blog/${post.slug}/`,
      })),
    });
  }