---
date: "2017-07-10T23:36:56.503Z"
title: About
tags:
  - tech stack
  - colophon
  - about
featured: ui-and-code.png
excerpt: Welcome to the second version of my blog, powered by Gatsby, an incredible site generator. Learn more about the tech stack and things I built to power this blog.
---

Welcome to the second version of my blog, powered by [Gatsby][gatsby], an incredible static site generator.

Inspired by [Daring Fireball][df], some detail will be provided for the technologies, applications, and techniques that power this site.

## Mac apps

- [VSCode][vscode]
- [Hyper][hyper]

## Backend software

The site is hosted on [MediaTemple][media-temple].

Articles are written using Markdown, and are translated to HTML using [remark][remark].

The content is partially server-side rendered via [gatsby][gatsby], which uses react-dom to scaffold out the basis content, and then React running client side takes over for the now-hydrated web application. Theoretically, this will provide for great SEO as well as some dynamism via React/JavaScript run client side once the page is hydrated.

The following gatsby plugins are each used as the backbone for much of the functionality present in this blog:

- [gatsby-plugin-styled-components][gatsby-plugin-styled-components]
- [gatsby-source-filesystem][gatsby-source-filesystem]
- [gatsby-transformer-remark][gatsby-transformer-remark]
- [gatsby-remark-copy-linked-files][gatsby-remark-copy-linked-files]
- [gatsby-remark-smartypants][gatsby-remark-smartypants]
- [gatsby-plugin-react-helmet][gatsby-plugin-react-helmet]

## Web technologies

As much as possible, this site attempts to abide by current web standards with a baseline threshold targeting around or about IE 10. That means that my heavy usage of Flexbox (CSS) will not _quite_ be rendered perfectly in every circumstance, but in general, the goal is to be progressively enhanced so that the site is still readable and usable in a browser that doesn't have great support for Flexbox.

### [styled-components][styled-components]

The incredible CSS library `styled-components` is used for the majority of the components rendered by the blog, particularly those not parsed via Markdown.

### Progressive enhancement

Whenever possible, I attempt to only use JavaScript to _enhance_ the site, rather than serve as the only mechanism for functionality. For instance, the [Google fonts][google-fonts] Montserrat and Bitter are used, but they are loaded asyncronously with [`webfontloader`][webfontloader] and then persisted in sessionStorage with the following JavaScript snippet. This means that in an environment without JavaScript, the fallback fonts `Georgia, serif` will be used _until_ the webfonts have been loaded.

```javascript
/*
 * https://css-tricks.com/loading-web-fonts-with-the-web-font-loader/
 */
export default function loadWebFonts() {
  const families = ["Montserrat:400,700", "Bitter:400,700"];
  if (sessionStorage.fonts === families.join(" ")) {
    document.documentElement.classList.add("wf-active");
  }

  require.ensure("webfontloader", () => {
    const WebFonts = require("webfontloader");

    WebFonts.load({
      active() {
        sessionStorage.fonts = families.join(" ");
      },
      google: {
        families
      },
      timeout: 2000
    });
  });
}
```

[gatsby]: https://github.com/gatsbyjs/gatsby
[df]: https://daringfireball.net/colophon/
[vscode]: https://code.visualstudio.com/
[hyper]: https://hyper.is/
[media-temple]: https://mediatemple.net
[remark]: https://www.npmjs.com/package/remark
[gatsby-plugin-catch-links]: https://www.npmjs.com/package/gatsby-plugin-catch-links
[gatsby-plugin-styled-components]: https://www.npmjs.com/package/gatsby-plugin-styled-components
[gatsby-source-filesystem]: https://www.npmjs.com/package/gatsby-source-filesystem
[gatsby-transformer-remark]: https://www.npmjs.com/package/gatsby-transformer-remark
[gatsby-remark-copy-linked-files]: https://www.npmjs.com/package/gatsby-remark-copy-linked-files
[gatsby-remark-prismjs]: https://www.npmjs.com/package/gatsby-remark-prismjs
[gatsby-remark-smartypants]: https://www.npmjs.com/package/gatsby-remark-smartypants
[gatsby-plugin-react-helmet]: https://www.npmjs.com/package/gatsby-plugin-react-helmet
[gatsby-plugin-offline]: https://www.npmjs.com/package/gatsby-plugin-offline
[styled-components]: https://www.styled-components.com/
[google-fonts]: https://fonts.google.com/
[webfontloader]: https://github.com/typekit/webfontloader
