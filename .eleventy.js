module.exports = function (eleventyConfig) {
  let { DateTime } = require('luxon');

  let pluginRss = require('@11ty/eleventy-plugin-rss');
  let pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
  let pluginNavigation = require('@11ty/eleventy-navigation');
  let pluginTOC = require('eleventy-plugin-toc');

  let markdownIt = require('markdown-it');
  let markdownItAnchor = require('markdown-it-anchor');
  let markdownItContainer = require("markdown-it-container");
  let markdownItAttrs = require("markdown-it-attrs");

  let fs = require('fs');

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3'],
    wrapper: 'div',
  });


  eleventyConfig.addFilter('asPostDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);

    // other config likely here
  });

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          let content_404 = fs.readFileSync('_site/404.html');
          // Add 404 http status code in request header.
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  // https://www.11ty.dev/docs/copy/
  eleventyConfig.addPassthroughCopy('*.ico');
  eleventyConfig.addPassthroughCopy('*.png');
  eleventyConfig.addPassthroughCopy('*.svg');
  eleventyConfig.addPassthroughCopy('*.webmanifest');

  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'dd LLL yyyy'
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addPassthroughCopy('assets/');

  // Markdown
  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    })
      .use(markdownItAnchor, {
        permalink: true,
        permalinkClass: 'direct-link',
        permalinkSymbol: '',
      })
      .use(require('markdown-it-attrs'))
      .use(require('markdown-it-container'), '', {
        validate: () => true,
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            const classList = tokens[idx].info.trim();
            return `<div ${classList && `class="${classList}"`}>`;
          } else {
            return `</div>`;
          }
        },
      })
  );

  eleventyConfig.addFilter('markdownify', (content) => {
    let markdownify = markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    }).use(markdownItAnchor, {
      permalink: true,
      permalinkClass: 'direct-link',
      permalinkSymbol: '',
    });
    return markdownify.render(content);
  });

  eleventyConfig.addFilter('markdownInline', (content) => {
    let markdownInline = markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    }).use(markdownItAnchor, {
      permalink: true,
      permalinkClass: 'direct-link',
      permalinkSymbol: '',
    });
    return markdownInline.renderInline(content);
  });

  return {
    markdownTemplateEngine: 'njk',
  };
};
