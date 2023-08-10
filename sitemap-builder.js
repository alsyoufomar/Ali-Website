const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const axios = require("axios");

async function generateSitemap() {
  try {
    const data = await axios.get(
      `https://ali-alsyouf.netlify.app/api/blogs?fields[0]=id`
    );

    const links = [
      { url: "/", changefreq: "weekly", priority: 0.8 },
      { url: "/blog", changefreq: "weekly", priority: 0.8 },
      { url: "/about", changefreq: "monthly", priority: 0.7 },
      { url: "/contact", changefreq: "monthly", priority: 0.7 },
      ...data.data.data.map((post) => ({
        url: `/blog/${post.id}`,
        changefreq: "weekly",
        priority: 0.9,
      })),
    ];

    const sitemapStream = new SitemapStream({
      hostname: `https://ali-alsyouf.netlify.app/`,
    });

    sitemapStream.pipe(createWriteStream("./public/sitemap.xml"));
    links.forEach((link) => sitemapStream.write(link));
    sitemapStream.end();

    console.log("Sitemap generated!");
  } catch (err) {
    console.log("Failed to generate a sitemap: ", err);
  }
}

generateSitemap();
