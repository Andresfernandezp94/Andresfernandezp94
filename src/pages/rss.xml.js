import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Andres Fernandez | Blog',
    description: 'Mi viaje de aprendizaje en la programación',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-ES</language>`,
  });
}