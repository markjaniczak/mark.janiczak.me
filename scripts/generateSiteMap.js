const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

const getDate = new Date().toISOString();

const DOMAIN = 'mark.janiczak.me';

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' });

const generatePagesSitemap = async () => {
  const pages = await globby(['pages/**/*.tsx', 'pages/*.tsx', '!pages/_*.tsx', '!pages/**/[slug].tsx', '!pages/404.tsx']);

  const pagesSitemap = `
    ${pages
      .map((page) => {
        const path = page
          .replace('pages/', '')
          .replace('.tsx', '')
          .replace(/\/index/g, '');
        const routePath = path === 'index' ? '' : path;
        return `
          <url>
            <loc>${DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join('')}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    >
      ${pagesSitemap}
    </urlset>
  `;

  const formattedSitemap = formatted(generatedSitemap);

  return formattedSitemap;
};

const generatePostsSitemap = async () => {
  const posts = await globby(['_posts/*.mdx']);

  const postsSitemap = `
    ${posts
      .map((post) => {
        const path = post.replace('_posts/', '').replace(/\.mdx?/g, '');
        const routePath = `blog/${path}`;
        return `
          <url>
            <loc>${DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join('')}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    >
      ${postsSitemap}
    </urlset>
  `;

  const formattedSitemap = formatted(generatedSitemap);

  return formattedSitemap;
};

const generateSitemapIndex = async () => {
  const sitemaps = await Promise.all([generatePagesSitemap(), generatePostsSitemap()]);

  await Promise.all(
    sitemaps.map(async (xml, i) => {
      await new Promise((resolve, reject) =>
        fs.writeFile(
          `public/sitemap${i}.xml`,
          xml,
          {
            encoding: 'utf-8',
          },
          (err) => {
            if (err) return reject();
            resolve();
          }
        )
      );
    })
  );

  const index = `
    ${sitemaps.map(
      (_, i) => `
      <sitemap>
        <loc>https://${DOMAIN}/sitemap${i}.xml.gz</loc>
        <lastmod>${getDate}</lastmod>
      </sitemap>
    `
    )}
  `;

  const sitemapIndex = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${index}
    </sitemapindex>
  `;
  const formattedSitemapIndex = formatted(sitemapIndex);

  fs.writeFileSync('public/sitemap_index.xml', formattedSitemapIndex, {
    encoding: 'utf-8',
  });
};

generateSitemapIndex()